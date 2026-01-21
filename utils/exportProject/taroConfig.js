function convertNamespaceToComponentName(namespace) {
  return namespace
    .split('.')
    .map((part, index) => {
      // 第一部分（mybricks）保持小写
      if (index === 0) {
        return part.toLowerCase()
      }
      // 其他部分：去掉下划线前缀，将连字符后的字母转为大写（驼峰命名）
      let result = part.replace(/^_/, '')
      result = result.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())
      return result
    })
    .join('_')
}

function convertNamespaceToImportName(namespace) {
  return convertNamespaceToComponentName(namespace)
}

const compNamespace = 'mybricks.taro'

module.exports = {
  getComponentMeta: (com) => {
    const { namespace = '' } = com.def || {}

    // JS API 组件（以 _ 开头，如 _showToast）
    if (namespace.startsWith(`${compNamespace}._`)) {
      const importName = convertNamespaceToImportName(namespace)
      return {
        importInfo: {
          name: importName,
          from: '../../core/comlib',
          type: 'named',
        },
        name: importName,
        callName: importName,
      }
    }

    // 普通组件：从 namespace 中提取组件名
    const componentName =
      namespace
        .replace(`${compNamespace}.`, '')
        ?.replace(/[_\-\.]([a-zA-Z])/g, (_, letter) => letter.toUpperCase()) ||
      'Component'
    return {
      importInfo: {
        name: componentName,
        from: '../../components',
        type: 'named',
      },
      name: componentName,
      callName: componentName,
    }
  },
  getComponentPackageName: () => '../../core/utils/index',
  getUtilsPackageName: () => '../../core/utils/index',
  getPageId: (id) => id,
  getModuleApi: () => ({
    dependencyImport: {
      packageName: '@mybricks/taro-api-todo',
      dependencyNames: ['api'],
      importType: 'named',
    },
    componentName: 'api',
  }),
  codeStyle: { indent: 2 },
}
