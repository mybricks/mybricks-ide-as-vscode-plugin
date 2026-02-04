const vscode = require('vscode')
const path = require('path')
const fs = require('fs')

/**
 * 获取当前工作区目录
 * @param {*} context
 * @returns
 */
function getWorkspaceFolder(context) {
  const extensionUri = context.extensionUri
  let defaultUri
  const workspaceFolders = vscode.workspace.workspaceFolders

  if (workspaceFolders && workspaceFolders.length > 0) {
    // 优先使用当前工作区目录
    defaultUri = workspaceFolders[0].uri
  } else if (vscode.window.activeTextEditor) {
    // 如果没有打开文件夹，尝试使用当前编辑文件的目录
    const activeUri = vscode.window.activeTextEditor.document.uri
    if (activeUri.scheme === 'file') {
      defaultUri = vscode.Uri.file(path.dirname(activeUri.fsPath))
    }
  }

  // 如果以上都获取不到，使用插件根目录作为兜底
  if (!defaultUri) {
    defaultUri = extensionUri
  }
  return defaultUri
}

/**
 * 读取工作区的fide.project.config.json，判断是不是低码项目
 */
const PROJECT_CONFIG_FILE = 'fide.project.config.json'
const MYBRICKS_PROJECT_KEY = 'mybricksType'
function isMybricksProject(context) {
  const defaultUri = getWorkspaceFolder(context)
  const filePath = path.join(defaultUri.fsPath, PROJECT_CONFIG_FILE)
  try {
    const projectConfigContent = fs.readFileSync(filePath, 'utf8')
    const projectConfig = JSON.parse(projectConfigContent)
    return projectConfig[MYBRICKS_PROJECT_KEY] === 1
  } catch (error) {
    return false
  }
}

module.exports = {
  getWorkspaceFolder,
  isMybricksProject,
}
