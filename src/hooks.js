const vscode = require('vscode')
const { registerSubscriptions } = require('./subscriptions')
const { isMybricksProject } = require('../utils/utils')

/**
 * 插件激活时的生命周期钩子
 * @param {vscode.ExtensionContext} context - 扩展上下文
 */
function onActivate(context) {
  // 注册所有订阅（命令、视图等）
  registerSubscriptions(context)

  // 启动时自动打开设计器
  if (isMybricksProject(context)) {
    setTimeout(() => {
      vscode.commands.executeCommand('mybricks.openIDE')
    }, 100)
  }
  // vscode.commands.executeCommand('mybricks.openIDE')
}

/**
 * 插件停用时的生命周期钩子
 */
function onDeactivate() {
  // 清理资源
  // 可以在这里添加清理逻辑，如关闭面板、释放资源等
}

module.exports = {
  onActivate,
  onDeactivate,
}

