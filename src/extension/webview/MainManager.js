const fs = require('fs')
const path = require('path')
const vscode = require('vscode')
const MessageAPI = require('../utils/messageApi')

/**
 * 主编辑器面板管理类
 */
class MainManager {
  constructor() {
    this.currentPanel = undefined
  }

  /**
   * 获取 webview HTML 内容
   * @param {vscode.Webview} webview
   * @param {vscode.Uri} extensionUri
   * @returns {string}
   */
  getWebviewContent(webview, extensionUri) {
    const distDirUri = vscode.Uri.joinPath(extensionUri, 'dist', 'webview')
    const distIndexPath = path.join(distDirUri.fsPath, 'main', 'index.html')

    if (!fs.existsSync(distIndexPath)) {
      return `
        <!doctype html>
        <html>
          <body>
            <h1>MyBricks IDE</h1>
            <p>构建产物不存在，请运行 <code>npm run build:webview</code>。</p>
            <p>预期路径: ${distIndexPath}</p>
          </body>
        </html>
      `
    }

    let htmlContent = fs.readFileSync(distIndexPath, 'utf8')

    // 将 ./assets/...（Vite 构建产物）路径转成 webview 资源 URI
    htmlContent = htmlContent.replace(
      /\.\.\/assets\/([^"'\s)]+)/g,
      (_, relPath) => {
        const resourceUri = vscode.Uri.joinPath(distDirUri, 'assets', relPath)
        return webview.asWebviewUri(resourceUri).toString()
      },
    )

    // 将 ./node_modules/... 路径转成 webview 资源 URI
    htmlContent = htmlContent.replace(
      /\.\/node_modules\/([^"'\s)]+)/g,
      (_, relPath) => {
        const resourceUri = vscode.Uri.joinPath(
          extensionUri,
          'node_modules',
          relPath,
        )
        return webview.asWebviewUri(resourceUri).toString()
      },
    )

    // 处理其它可能引用的本地资源 (src/extension/assets)
    htmlContent = htmlContent.replace(
      /\.\/assets\/([^"'\s)]+)/g,
      (_, relPath) => {
        const resourceUri = vscode.Uri.joinPath(
          extensionUri,
          'src',
          'extension',
          'assets',
          relPath,
        )
        return webview.asWebviewUri(resourceUri).toString()
      },
    )

    return htmlContent
  }

  /**
   * 创建或显示 webview 面板
   * @param {vscode.ExtensionContext} context
   * @param {Function} registerHandlers - 注册事件处理器的函数
   * @returns {vscode.WebviewPanel}
   */
  createOrShow(context, registerHandlers) {
    const extensionUri = context.extensionUri

    if (this.currentPanel) {
      // 如果面板已存在，显示并更新
      this.currentPanel.reveal(vscode.ViewColumn.One)
      this.currentPanel.webview.html = this.getWebviewContent(
        this.currentPanel.webview,
        extensionUri,
      )
      return this.currentPanel
    }

    // 创建新面板
    this.currentPanel = vscode.window.createWebviewPanel(
      'mybricksWeb',
      'MyBricks',
      vscode.ViewColumn.One,
      {
        enableScripts: true, // 允许运行 JS
        retainContextWhenHidden: true, // 隐藏时保留状态
        localResourceRoots: [
          // 允许访问的本地资源路径
          vscode.Uri.joinPath(extensionUri, 'src', 'extension', 'assets'),
          vscode.Uri.joinPath(extensionUri, 'node_modules'),
          vscode.Uri.joinPath(extensionUri, 'dist', 'webview'),
          extensionUri,
        ],
      },
    )

    this.currentPanel.webview.html = this.getWebviewContent(
      this.currentPanel.webview,
      extensionUri,
    )

    // 创建消息 API 实例
    const messageApiInstance = new MessageAPI(this.currentPanel)

    // 注册事件处理器
    if (registerHandlers) {
      registerHandlers(messageApiInstance, context)
    }

    // 在新窗口打开
    // vscode.commands.executeCommand('workbench.action.moveEditorToNewWindow')

    // 关闭左侧边栏
    vscode.commands.executeCommand('workbench.action.closeSidebar')

    // 关闭底部面板
    vscode.commands.executeCommand('workbench.action.closePanel')

    // 面板关闭时清理
    this.currentPanel.onDidDispose(() => {
      this.currentPanel = undefined
    })

    return this.currentPanel
  }

  /**
   * 获取当前面板实例
   * @returns {vscode.WebviewPanel|undefined}
   */
  getCurrentPanel() {
    return this.currentPanel
  }
}

module.exports = MainManager
