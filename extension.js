/**
 * MyBricks VSCode 插件 - 主入口
 * 提供 MyBricks.ai 设计器的 VSCode 集成
 */
const { onActivate, onDeactivate } = require('./src/hooks')

/**
 * 插件激活时调用
 * @param {vscode.ExtensionContext} context - 扩展上下文
 */
function activate(context) {
  onActivate(context)
}

/**
 * 插件停用时调用
 */
function deactivate() {
  onDeactivate()
}

module.exports = {
  activate,
  deactivate,
}
