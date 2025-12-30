/**
 * VSCode Webview Message API
 * 用于与 VSCode 插件进行 Promise 风格的通信
 * 使用方法：在 webview 页面引入此文件，然后 new WebViewMessageApi(vscode)
 */

class WebViewMessageAPI {
  constructor(vscode) {
    this.vscode = vscode
    if (!this.vscode) {
      throw new Error('VSCode API 不可用，请确保在 VSCode Webview 环境中运行')
    }

    this.messageId = 0
    this.pendingCallbacks = new Map()
    this.eventListeners = new Map()
    this.handlers = new Map()

    this._onMessage = (event) => {
      const message = event && event.data
      if (!message || !message.type) {
        return
      }

      switch (message.type) {
        case 'response':
          this._handleResponse(message)
          break
        case 'notification':
          this._handleNotification(message)
          break
        case 'request':
          this._handleRequest(message)
          break
      }
    }

    window.addEventListener('message', this._onMessage)
  }

  dispose() {
    if (this._onMessage) {
      window.removeEventListener('message', this._onMessage)
    }
    for (const [id] of this.pendingCallbacks.entries()) {
      this._cleanupCallback(id)
    }
    this.pendingCallbacks.clear()
    this.eventListeners.clear()
    this.handlers.clear()
  }

  _postMessage(message) {
    this.vscode.postMessage(JSON.stringify(message))
  }

  _cleanupCallback(id) {
    if (!this.pendingCallbacks.has(id)) {
      return
    }
    const callback = this.pendingCallbacks.get(id)
    if (callback && callback.timeoutId) {
      clearTimeout(callback.timeoutId)
    }
    this.pendingCallbacks.delete(id)
  }

  _handleResponse(message) {
    const { id, success, result, error } = message
    if (!this.pendingCallbacks.has(id)) {
      return
    }

    const callback = this.pendingCallbacks.get(id)
    this._cleanupCallback(id)

    if (success) {
      callback.resolve(result)
    } else {
      callback.reject(new Error(error))
    }
  }

  _handleNotification(message) {
    const { event: eventName, data } = message
    if (!this.eventListeners.has(eventName)) {
      return
    }

    const listeners = this.eventListeners.get(eventName)
    listeners.forEach((listener) => {
      try {
        listener(data)
      } catch (err) {}
    })
  }

  _handleRequest(message) {
    const { id, method, data } = message
    this._handleWebviewRequest(method, data)
      .then((result) => {
        this._postMessage({
          type: 'response',
          id,
          success: true,
          result,
          timestamp: Date.now(),
        })
      })
      .catch((error) => {
        this._postMessage({
          type: 'response',
          id,
          success: false,
          error: error && error.message ? error.message : String(error),
          timestamp: Date.now(),
        })
      })
  }

  async _handleWebviewRequest(method, data) {
    if (this.handlers.has(method)) {
      const handler = this.handlers.get(method)
      return await Promise.resolve(handler(data))
    }

    if (window.vscodeHandlers && window.vscodeHandlers[method]) {
      const handler = window.vscodeHandlers[method]
      return await Promise.resolve(handler(data))
    }

    if (method === 'alert') {
      alert((data && data.message) || '')
      return 'Alert shown'
    }

    if (method === 'getInfo') {
      return {
        userAgent: navigator.userAgent,
        location: window.location.href,
        timestamp: Date.now(),
        title: document.title,
      }
    }

    if (method === 'evaluate') {
      if (data && data.code) {
        try {
          return eval(data.code)
        } catch (err) {
          throw new Error(`JS 执行错误: ${err.message}`)
        }
      }
      throw new Error('缺少 JS 代码')
    }

    if (method === 'ping') {
      return 'pong'
    }

    if (window[method] && typeof window[method] === 'function') {
      return await Promise.resolve(window[method](data))
    }

    throw new Error(`方法 "${method}" 未实现`)
  }

  callExtension(method, data = {}, options = {}) {
    return new Promise((resolve, reject) => {
      const id = ++this.messageId
      const defaultOptions = { timeout: 30000, noResponse: false }
      const opts = { ...defaultOptions, ...options }

      if (opts.noResponse) {
        this._postMessage({
          type: 'request',
          id,
          method,
          data,
          noResponse: true,
          timestamp: Date.now(),
        })
        resolve()
        return
      }

      this.pendingCallbacks.set(id, { resolve, reject })

      this._postMessage({
        type: 'request',
        id,
        method,
        data,
        expectsResponse: true,
        timestamp: Date.now(),
      })

      const timeoutId = setTimeout(() => {
        if (this.pendingCallbacks.has(id)) {
          this._cleanupCallback(id)
          reject(new Error(`调用 "${method}" 超时 (${opts.timeout}ms)`))
        }
      }, opts.timeout)

      const callback = this.pendingCallbacks.get(id)
      callback.timeoutId = timeoutId
    })
  }

  call(method, data = {}, options = {}) {
    return this.callExtension(method, data, options)
  }

  notifyExtension(event, data = {}) {
    this._postMessage({
      type: 'notification',
      event,
      data,
      timestamp: Date.now(),
    })
  }

  notify(event, data = {}) {
    this.notifyExtension(event, data)
  }

  on(event, callback) {
    if (!this.eventListeners.has(event)) {
      this.eventListeners.set(event, [])
    }

    this.eventListeners.get(event).push(callback)

    return () => {
      const listeners = this.eventListeners.get(event)
      if (!listeners) {
        return
      }
      const index = listeners.indexOf(callback)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }

  registerHandler(method, handler) {
    this.handlers.set(method, handler)
  }

  registerHandlers(handlers) {
    for (const [method, handler] of Object.entries(handlers || {})) {
      this.handlers.set(method, handler)
    }
  }

  removeHandler(method) {
    this.handlers.delete(method)
  }
}

window.WebViewMessageAPI = WebViewMessageAPI
