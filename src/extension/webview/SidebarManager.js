const vscode = require('vscode')
const fs = require('fs')
const path = require('path')
const { handleSidebarMessage } = require('../event')

/**
 * 侧边栏视图管理类
 */
class SidebarManager {
  /**
   * 获取侧边栏 HTML 内容
   * @param {vscode.Webview} webview
   * @param {vscode.Uri} extensionUri
   * @returns {string}
   */
  getWebviewContent(webview, extensionUri) {
    const distDirUri = vscode.Uri.joinPath(extensionUri, 'dist', 'webview')
    const distIndexPath = path.join(distDirUri.fsPath, 'sidebar', 'index.html')

    if (!fs.existsSync(distIndexPath)) {
      return `
        <!doctype html>
        <html>
          <body>
            <h1>MyBricks Sidebar</h1>
            <p>构建产物不存在，请运行 <code>npm run build:webview</code>。</p>
          </body>
        </html>
      `
    }

    let htmlContent = fs.readFileSync(distIndexPath, 'utf8')

    // 将 ../assets/...（Vite 构建产物）路径转成 webview 资源 URI
    htmlContent = htmlContent.replace(
      /\.\.\/assets\/([^"'\s)]+)/g,
      (_, relPath) => {
        const resourceUri = vscode.Uri.joinPath(distDirUri, 'assets', relPath)
        return webview.asWebviewUri(resourceUri).toString()
      },
    )

    return htmlContent
  }

  /**
   * 创建侧边栏视图提供者
   * @param {vscode.ExtensionContext} context - 扩展上下文
   * @returns {vscode.WebviewViewProvider}
   */
  createProvider(context) {
    const extensionUri = context.extensionUri
    const self = this

    return {
      resolveWebviewView(webviewView, webviewContext, token) {
        webviewView.webview.options = {
          enableScripts: true,
          localResourceRoots: [
            vscode.Uri.joinPath(extensionUri, 'src', 'extension', 'assets'),
            vscode.Uri.joinPath(extensionUri, 'dist', 'webview'),
            extensionUri,
          ],
        }

        // 设置侧边栏 HTML 内容
        webviewView.webview.html = self.getWebviewContent(
          webviewView.webview,
          extensionUri,
        )

        // 处理侧边栏消息
        handleSidebarMessage(webviewView, context)
      },
    }
  }
}

module.exports = SidebarManager
