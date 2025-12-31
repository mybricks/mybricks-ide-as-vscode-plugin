import * as fs from 'fs'
import * as path from 'path'
import * as vscode from 'vscode'
import { fileURLToPath } from 'url'

// 获取当前文件目录（ES6 模块中没有 __dirname）
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/**
 * 读取 webview.html 并将本地相对路径 (./asserts/...) 转成 webview 可访问的 URI。
 * @param {vscode.Webview} webview
 * @param {vscode.Uri} extensionUri
 * @returns {string}
 */
function getWebviewContent(webview, extensionUri) {
  const htmlPath = path.join(__dirname, 'webview.html')
  let htmlContent = fs.readFileSync(htmlPath, 'utf8')

  // 将 ./asserts/... 等本地相对路径转成 webview 资源 URI
  htmlContent = htmlContent.replace(
    /\.\/asserts\/([^"'\s)]+)/g,
    (_, relPath) => {
      const resourceUri = vscode.Uri.joinPath(extensionUri, 'asserts', relPath)
      return webview.asWebviewUri(resourceUri).toString()
    }
  )

  return htmlContent
}

export { getWebviewContent }
