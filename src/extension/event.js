const vscode = require('vscode')

/**
 * 处理侧边栏消息事件
 * @param {vscode.WebviewView} webviewView - 侧边栏视图
 * @param {vscode.ExtensionContext} context - 扩展上下文
 */
function handleSidebarMessage(webviewView, context) {
  // 监听侧边栏消息
  webviewView.webview.onDidReceiveMessage(
    async (message) => {
      switch (message.command) {
        // 打开 MyBricks IDE
        case 'openIDE':
          vscode.commands.executeCommand('mybricks.openIDE')
          break
      }
    },
    undefined,
    context.subscriptions
  )
}

module.exports = {
  handleSidebarMessage,
}

