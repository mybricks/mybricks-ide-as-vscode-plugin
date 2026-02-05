/**
 * VSCode Webview Message API
 * 用于与 VSCode 插件进行 Promise 风格的通信
 */

export class WebViewMessageAPI {
  private vscode: any
  private messageId: number = 0
  private pendingCallbacks: Map<
    number,
    { resolve: Function; reject: Function; timeoutId?: any }
  > = new Map()
  private eventListeners: Map<string, Function[]> = new Map()
  private handlers: Map<string, Function> = new Map()
  private _onMessage: (event: any) => void

  constructor(vscode: any) {
    this.vscode = vscode
    if (!this.vscode) {
      throw new Error('VSCode API 不可用，请确保在 VSCode Webview 环境中运行')
    }

    this._onMessage = (event: any) => {
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

  private _postMessage(message: any) {
    this.vscode.postMessage(JSON.stringify(message))
  }

  private _cleanupCallback(id: number) {
    if (!this.pendingCallbacks.has(id)) {
      return
    }
    const callback = this.pendingCallbacks.get(id)
    if (callback && callback.timeoutId) {
      clearTimeout(callback.timeoutId)
    }
    this.pendingCallbacks.delete(id)
  }

  private _handleResponse(message: any) {
    const { id, success, result, error } = message
    if (!this.pendingCallbacks.has(id)) {
      return
    }

    const callback = this.pendingCallbacks.get(id)!
    this._cleanupCallback(id)

    if (success) {
      callback.resolve(result)
    } else {
      callback.reject(new Error(error))
    }
  }

  private _handleNotification(message: any) {
    const { event: eventName, data } = message
    if (!this.eventListeners.has(eventName)) {
      return
    }

    const listeners = this.eventListeners.get(eventName)!
    listeners.forEach((listener) => {
      try {
        listener(data)
      } catch (err) {}
    })
  }

  private _handleRequest(message: any) {
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

  private async _handleWebviewRequest(method: string, data: any): Promise<any> {
    if (this.handlers.has(method)) {
      const handler = this.handlers.get(method)!
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

    if (method === 'ping') {
      return 'pong'
    }

    throw new Error(`方法 "${method}" 未实现`)
  }

  callExtension(
    method: string,
    data: any = {},
    options: any = {},
  ): Promise<any> {
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
        resolve(undefined)
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

      const callback = this.pendingCallbacks.get(id)!
      callback.timeoutId = timeoutId
    })
  }

  call(method: string, data: any = {}, options: any = {}): Promise<any> {
    return this.callExtension(method, data, options)
  }

  notifyExtension(event: string, data: any = {}) {
    this._postMessage({
      type: 'notification',
      event,
      data,
      timestamp: Date.now(),
    })
  }

  notify(event: string, data: any = {}) {
    this.notifyExtension(event, data)
  }

  on(event: string, callback: Function) {
    if (!this.eventListeners.has(event)) {
      this.eventListeners.set(event, [])
    }

    this.eventListeners.get(event)!.push(callback)

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

  registerHandler(method: string, handler: Function) {
    this.handlers.set(method, handler)
  }

  registerHandlers(handlers: Record<string, Function>) {
    for (const [method, handler] of Object.entries(handlers || {})) {
      this.handlers.set(method, handler)
    }
  }

  removeHandler(method: string) {
    this.handlers.delete(method)
  }
}

// 导出单例获取方法
let instance: WebViewMessageAPI | null = null
export function getWebViewMessageAPI(vscode?: any) {
  if (!instance && vscode) {
    console.log('>>>getWebViewMessageAPI', 'new')
    instance = new WebViewMessageAPI(vscode)
  }
  console.log('>>>getWebViewMessageAPI instance', instance)
  return instance
}
