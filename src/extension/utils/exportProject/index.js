const vscode = require('vscode')
const path = require('path')
const {
  toCodeTaro,
  generateTaroProjectJson,
} = require('@mybricks/to-code-taro')
const taroConfig = require('./taroConfig')
const { getWorkspaceFolder } = require('..')
const generateTaroProject = require('./generateTaroProject')

// 调试环境导出到 taro-project 子目录，打包环境保持默认
function getExportDir(context) {
  if (context.extensionMode === vscode.ExtensionMode.Development) {
    return 'taro-project'
  }
  return ''
}

/**
 * 导出
 */
async function exportProject(context, configJson, rootConfig) {
  console.log('>>>传给出码的数据', {
    ...configJson,
    rootConfig,
  })
  const defaultUri = getWorkspaceFolder(context)
  try {
    const projectJson = generateTaroProjectJson(
      toCodeTaro(
        {
          ...configJson,
          rootConfig,
        },
        taroConfig,
      ),
    )

    await generateTaroProject({
      exportDir: path.join(defaultUri.fsPath, getExportDir(context)),
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
