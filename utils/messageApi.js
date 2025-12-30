class MessageAPI {
  constructor(panel) {
    this.panel = panel
    this.pendingCallbacks = new Map() // 存储等待响应的回调
    this.messageId = 0 // 消息ID计数器
    this.handlers = new Map() // 存储注册的方法处理器

    // 监听 webview 发来的消息
    this.panel.webview.onDidReceiveMessage(
      async (messageStr) => {
        const message = JSON.parse(messageStr || '{}')
        if (message.type === 'request') {
          // 处理 webview 的请求
          await this.handleRequest(message)
        } else if (message.type === 'response') {
          // 处理 webview 的响应
          this.handleResponse(message)
        }
      },
      null,
      []
    )

    // this.registerDefaultHandlers()
  }

  /**
   * 注册一个方法处理器
   * @param {string} methodName - 方法名
   * @param {Function} handler - 处理函数，返回 Promise
   */
  registerHandler(methodName, handler) {
    this.handlers.set(methodName, handler)
    console.log(`[VSCodeAPI] 注册方法: ${methodName}`)
  }

  /**
   * 注册多个方法处理器
   * @param {Object} handlers - 方法处理器对象
   */
  registerHandlers(handlers) {
    for (const [methodName, handler] of Object.entries(handlers)) {
      this.registerHandler(methodName, handler)
    }
  }

  /**
   * 移除方法处理器
   * @param {string} methodName - 方法名
   */
  removeHandler(methodName) {
    this.handlers.delete(methodName)
    console.log(`[VSCodeAPI] 移除方法: ${methodName}`)
  }

  /**
   * 清空所有方法处理器
   */
  clearHandlers() {
    this.handlers.clear()
    console.log('[VSCodeAPI] 清空所有方法处理器')
  }

  /**
   * 发送请求到 webview（插件主动调用 webview）
   * @param {string} method - 方法名
   * @param {any} data - 数据
   * @returns {Promise} 返回 webview 的响应结果
   */
  callWebview(method, data = {}) {
    return new Promise((resolve, reject) => {
      const id = ++this.messageId

      // 存储回调
      this.pendingCallbacks.set(id, { resolve, reject })

      // 发送消息到 webview
      this.panel.webview.postMessage({
        type: 'request',
        id,
        method,
        data,
        timestamp: Date.now(),
      })

      // 设置超时（30秒）
      const timeoutId = setTimeout(() => {
        if (this.pendingCallbacks.has(id)) {
          this.pendingCallbacks.delete(id)
          reject(new Error(`调用 webview 方法 "${method}" 超时`))
        }
      }, 2000)

      // 存储超时ID以便清理
      const callback = this.pendingCallbacks.get(id)
      callback.timeoutId = timeoutId
    })
  }

  /**
   * 处理 webview 的请求
   * @param {Object} message - 请求消息
   */
  async handleRequest(message) {
    const { id, method, data } = message

    try {
      // 检查方法是否已注册
      if (!this.handlers.has(method)) {
        throw new Error(`方法 "${method}" 未注册`)
      }

      // 获取处理器并执行
      const handler = this.handlers.get(method)
      const result = await Promise.resolve(handler(data))

      // 发送成功响应到 webview
      this.panel.webview.postMessage({
        type: 'response',
        id,
        success: true,
        result,
        timestamp: Date.now(),
      })
    } catch (error) {
      // 发送错误响应到 webview
      this.panel.webview.postMessage({
        type: 'response',
        id,
        success: false,
        error: error.message || String(error),
        timestamp: Date.now(),
      })
    }
  }

  /**
   * 处理 webview 的响应
   * @param {Object} message - 响应消息
   */
  handleResponse(message) {
    const { id, success, result, error } = message

    // 检查是否有对应的等待回调
    if (!this.pendingCallbacks.has(id)) {
      console.warn(`[VSCodeAPI] 收到未知ID的响应: ${id}`)
      return
    }

    // 获取回调并清理
    const callback = this.pendingCallbacks.get(id)
    this.cleanupCallback(id)

    // 根据成功/失败调用回调
    if (success) {
      callback.resolve(result)
    } else {
      callback.reject(new Error(error))
    }
  }

  /**
   * 清理回调
   * @param {number} id - 消息ID
   */
  cleanupCallback(id) {
    if (this.pendingCallbacks.has(id)) {
      const callback = this.pendingCallbacks.get(id)

      // 清除超时定时器
      if (callback.timeoutId) {
        clearTimeout(callback.timeoutId)
      }

      // 从Map中删除
      this.pendingCallbacks.delete(id)
    }
  }

  /**
   * 注册默认方法处理器
   */
  // registerDefaultHandlers() {
  //   // 这些是基础方法，可以在外部覆盖

  //   this.registerHandler('ping', async () => {
  //     return 'pong'
  //   })

  //   this.registerHandler('echo', async (data) => {
  //     return data
  //   })

  //   this.registerHandler('getTimestamp', async () => {
  //     return Date.now()
  //   })
  // }

  /**
   * 发送通知到 webview（不需要响应）
   * @param {string} event - 事件名
   * @param {any} data - 数据
   */
  notifyWebview(event, data = {}) {
    this.panel.webview.postMessage({
      type: 'notification',
      event,
      data,
      timestamp: Date.now(),
    })
  }

  /**
   * 销毁资源
   */
  dispose() {
    // 清理所有超时定时器
    for (const [id, callback] of this.pendingCallbacks) {
      if (callback.timeoutId) {
        clearTimeout(callback.timeoutId)
      }
    }

    this.pendingCallbacks.clear()
    this.handlers.clear()
    console.log('[VSCodeAPI] 资源已清理')
  }
}

module.exports = MessageAPI
