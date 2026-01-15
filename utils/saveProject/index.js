const fs = require('fs')
const path = require('path')
const { getWorkspaceFolder } = require('../utils')
// 保存路径
const SAVE_FILE_DIR = '.mybricks'
// 保存文件名
const SAVE_FILE_NAME = 'mybricks.dsl.json'

/**
 * 获取低码项目数据
 */
function getFileContent(context) {
  const defaultUri = getWorkspaceFolder(context)
  const filePath = path.join(defaultUri.fsPath, SAVE_FILE_DIR, SAVE_FILE_NAME)
  if (!fs.existsSync(filePath)) {
    return null
  }
  const content = fs.readFileSync(filePath, 'utf8')
  return JSON.parse(content)
}

/**
 * 保存低码项目数据
 */
function saveFileContent(context, data) {
  const defaultUri = getWorkspaceFolder(context)
  const saveDir = path.join(defaultUri.fsPath, SAVE_FILE_DIR)
  if (!fs.existsSync(saveDir)) {
    fs.mkdirSync(saveDir)
  }
  const filePath = path.join(saveDir, SAVE_FILE_NAME)

  // 检查文件是否存在
  if (!fs.existsSync(filePath)) {
    // 文件不存在，创建文件
    fs.writeFileSync(filePath, '', 'utf8')
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8')
}

module.exports = {
  getFileContent,
  saveFileContent,
}
