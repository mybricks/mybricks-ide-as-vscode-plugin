const vscode = require('vscode')
const fs = require('fs')
const path = require('path')
const { handleSidebarMessage } = require('../../event')

/**
 * WebviewView 侧边栏视图管理类
 */
class WebviewView {
  /**
   * 获取侧边栏 HTML 内容
   * @param {vscode.Uri} extensionUri - 扩展 URI
   * @returns {string}
   */
  getWebviewContent(extensionUri) {
    const htmlPath = path.join(__dirname, 'index.html')
    let htmlContent = fs.readFileSync(htmlPath, 'utf8')

    // 将 ./asserts/... 等本地相对路径转成 webview 资源 URI
    // 注意：这里侧边栏通常不需要转换，但保留以保持一致性
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
            vscode.Uri.joinPath(extensionUri, 'asserts'),
            extensionUri,
          ],
        }

        // 设置侧边栏 HTML 内容
        webviewView.webview.html = self.getWebviewContent(extensionUri)

        // 处理侧边栏消息
        handleSidebarMessage(webviewView, context)
      },
    }
  }
}

module.exports = WebviewView
