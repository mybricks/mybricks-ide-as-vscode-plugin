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
    const distIndexPath = path.join(distDirUri.fsPath, 'index.html') // Removed 'main' subdirectory

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

    // 1. 处理 Webpack 输出的相对路径引用 assets/xxx.js -> vscode-webview://.../assets/xxx.js
    htmlContent = htmlContent.replace(
      /(src|href)=["'](assets\/[^"']+)["']/g,
      (_, attr, relPath) => {
        // 使用 path.join 可能会使用反斜杠，在 URI 中应始终使用正斜杠
        const resourceUri = vscode.Uri.joinPath(distDirUri, relPath)
        const webviewUri = webview.asWebviewUri(resourceUri).toString()
        return `${attr}="${webviewUri}"`
      },
    )

    // 2. 处理 publicPath: './' 产生的引用 (例如: ./assets/xxx.js)
    htmlContent = htmlContent.replace(
      /(src|href)=["']\.\/(assets\/[^"']+)["']/g,
      (_, attr, relPath) => {
        const resourceUri = vscode.Uri.joinPath(distDirUri, relPath)
        const webviewUri = webview.asWebviewUri(resourceUri).toString()
        return `${attr}="${webviewUri}"`
      },
    )

    // 3. 处理 Webpack 动态加载 Chunk 的 publicPath 问题 (关键修复)
    // 注入一个脚本，在运行时修正 window.__webpack_public_path__
    // 使得动态加载的 chunk (如 vendors, src_webview_pages...) 能正确指向 vscode-webview 资源路径
    // 注意：需要确保路径以 / 结尾，否则拼接资源时会出错
    const assetsUri = webview.asWebviewUri(distDirUri)
    htmlContent = htmlContent.replace(
      '<head>',
      `<head>
      <script>
        window.mybricks_public_path = "${assetsUri.toString()}/";
        window.__webpack_public_path__ = "${assetsUri.toString()}/";
      </script>
      `,
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
      '低代码',
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
