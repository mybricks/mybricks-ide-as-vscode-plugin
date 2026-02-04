const path = require('path')
const {
  toCodeTaro,
  generateTaroProjectJson,
} = require('@mybricks/to-code-taro')
const taroConfig = require('./taroConfig')
const { getWorkspaceFolder } = require('..')
const generateTaroProject = require('./generateTaroProject')

// 导出路径
const EXPORT_DIR = ''

/**
 * 导出
 */
async function exportProject(context, configJson) {
  const defaultUri = getWorkspaceFolder(context)
  try {
    const projectJson = generateTaroProjectJson(
      toCodeTaro(configJson, taroConfig),
    )

    await generateTaroProject({
      exportDir: path.join(defaultUri.fsPath, EXPORT_DIR),
      projectJson,
      toZip: false,
    })
    return {
      success: true,
      message: '导出成功',
    }
  } catch (error) {
    console.error('导出失败', error)
    return {
      success: false,
      message: error,
    }
  }
}

module.exports = {
  exportProject,
}
