const vscode = require('vscode')
const MainManager = require('./webview/MainManager')
const SidebarManager = require('./webview/SidebarManager')
const registerHandlers = require('./registerHandler')

// 主编辑器面板管理实例
const mainManager = new MainManager()
// 侧边栏视图管理实例
const sidebarManager = new SidebarManager()

/**
 * 注册所有订阅（命令、视图等）
 * @param {vscode.ExtensionContext} context - 扩展上下文
 */
function registerSubscriptions(context) {
  // 注册命令：打开 MyBricks 设计器
  const openWebCommand = vscode.commands.registerCommand(
    'mybricks.openIDE',
    () => {
      mainManager.createOrShow(context, registerHandlers)
    }
  )

  // 注册侧边栏视图提供者
  const provider = sidebarManager.createProvider(context)
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

