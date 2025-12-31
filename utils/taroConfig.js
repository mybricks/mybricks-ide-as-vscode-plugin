module.exports = {
  getComponentMeta: (com, configMeta) => {
    // 根据组件的 namespace 返回对应的元数据
    const namespace = com.def?.namespace || ''
    const rtType = com.def?.rtType || ''

    // JS 类型组件（_showToast、_scan-qrcode、_setStorage 等）
    const isJsComponent = rtType?.match(/^js/gi)
    const isJsApiComponent = namespace.startsWith('mybricks.taro._')

    if (isJsApiComponent) {
      // 转换为导入名：mybricks.taro._showToast -> mybricks_taro__showToast
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

    // 普通组件：从 namespace 中提取组件名（取最后一部分）
    const componentName = namespace.split('.').pop() || 'Component'

    // 创建组件元数据对象
    const createMeta = (name) => ({
      importInfo: {
        name,
        from: '../../components',
        type: 'named',
      },
      name,
      callName: name,
    })

    // 以下划线开头的组件（如 _muilt-inputJs）在 handleProcess 中会有特殊处理
    return createMeta(componentName)
  },
  getComponentPackageName: () => '../../core/utils/ComContext',
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
  codeStyle: {
    indent: 2,
  },
}
