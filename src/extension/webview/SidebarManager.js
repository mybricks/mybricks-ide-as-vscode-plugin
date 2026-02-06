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
    const distIndexPath = path.join(distDirUri.fsPath, 'sidebar.html') // Removed 'sidebar' subdirectory

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

    // 1. 处理 Webpack 输出的相对路径引用 assets/xxx.js -> vscode-webview://.../assets/xxx.js
    htmlContent = htmlContent.replace(
      /(src|href)=["'](assets\/[^"']+)["']/g,
      (_, attr, relPath) => {
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
