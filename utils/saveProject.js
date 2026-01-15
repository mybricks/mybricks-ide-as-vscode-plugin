const fs = require('fs')
const path = require('path')
const SAVE_FILE_NAME = 'mybricks.ide.config.json'
// {
//     // 导出配置
//     exportConfig: {
//         projectName: '',
//         exportDir: '',
//     },
//     // 低码数据
//     fileContent: {}
// }

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
 * 获取当前项目配置
 */
function getProject(context) {
  const defaultUri = getWorkspaceFolder(context)
  const filePath = path.join(defaultUri.fsPath, SAVE_FILE_NAME)
  if (!fs.existsSync(filePath)) {
    return null
  }
  const content = fs.readFileSync(filePath, 'utf8')
  return JSON.parse(content)
}

/**
 * 保存当前项目配置
 */
function saveProject(context, data) {
  const defaultUri = getWorkspaceFolder(context)
  const filePath = path.join(defaultUri.fsPath, SAVE_FILE_NAME)

  // 检查文件是否存在
  if (!fs.existsSync(filePath)) {
    // 文件不存在，创建文件
    fs.writeFileSync(filePath, '', 'utf8')
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8')
}

/**
 * 保存当前项目配置的某个字段
 */
function saveProjectByKey(context, key, value) {
  const project = getProject(context) || {}
  project[key] = value
  saveProject(context, project)
}

module.exports = {
  getProject,
  getWorkspaceFolder,
  saveProject,
  saveProjectByKey,
}
