const vscode = require('vscode')
const { WebviewPanel, WebviewView } = require('./renderer')
const registerHandlers = require('./registerHandler')

// Webview 面板实例
const webviewPanel = new WebviewPanel()
// WebviewView 侧边栏视图实例
const webviewView = new WebviewView()

/**
 * 注册所有订阅（命令、视图等）
 * @param {vscode.ExtensionContext} context - 扩展上下文
 */
function registerSubscriptions(context) {
  // 注册命令：打开 MyBricks 设计器
  const openWebCommand = vscode.commands.registerCommand(
    'mybricks.openIDE',
    () => {
      webviewPanel.createOrShow(context, registerHandlers)
    }
  )

  // 注册侧边栏视图提供者
  const provider = webviewView.createProvider(context)
  const webviewViewProvider = vscode.window.registerWebviewViewProvider(
    'mybricks.ide',
    provider
  )

  // 将所有订阅添加到 context.subscriptions
  context.subscriptions.push(openWebCommand)
  context.subscriptions.push(webviewViewProvider)
}

module.exports = {
  registerSubscriptions,
}

