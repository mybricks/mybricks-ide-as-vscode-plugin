/**
 * MyBricks.ai 设计器配置
 * 配置小程序组件库、存储、页面加载等核心功能
 */
const { message } = (window as any).antd

// 本地存储 Key
const STORAGE_KEY = '--mybricks-file-content-'

// 服务连接器插件
const servicePlugin = window['@mybricks/plugins/service'].default

/**
 * 生成设计器配置
 */
function config({ designerRef }) {
  // 从 localStorage 读取缓存
  const cachedContent = localStorage.getItem(STORAGE_KEY)
  const fileContent = cachedContent ? JSON.parse(cachedContent) : null

  // tabbar
  ;(window as any).tabbarModel.initFromFileContent(fileContent)

  return {
    version: new Date().getTime(), // 版本号
    type: 'mpa', // 多页应用模式
    plugins: [
      servicePlugin(), // HTTP 接口连接器
    ],

    // 组件库添加器（预留）
    comLibAdder() {},

    // 组件库加载器
    comLibLoader(desc) {
      return new Promise((resolve, reject) => {
        resolve([
          // Taro 小程序组件库
          `https://p66-ec.becukwai.com/udata/pkg/eshop/fangzhou/mybricks.normal-miniapp.taro/0.5.17/edit.js`,
        ])
      })
    },

    // 保存到 localStorage
    save() {
      try {
        if (!designerRef.current) {
          message.error('设计器未初始化')
          return
        }

        const dumped = designerRef.current.dump(true, true)

        if (!dumped) {
          message.error('无法获取设计器数据')
          console.error('dump() 返回 undefined')
          return
        }

        const { json: dumpedJson, reset } = dumped

        if (!dumpedJson) {
          message.error('导出数据为空')
          console.error('dumped.json 为空:', dumped)
          return
        }

        console.log('dumpedJson', dumpedJson)

        // 提取导出数据
        const {
          pageAry, // 页面列表
          projectContent, // 项目内容
          openedPageAry, // 打开的页面
          updatedPageAry, // 更新的页面
          deletedPageAry, // 删除的页面
        } = dumpedJson

        let saveContent = fileContent

        // 初始化保存结构
        if (!saveContent) {
          saveContent = {
            project: { projectContent },
            pages: [],
          }
        } else {
          saveContent.project.projectContent = projectContent
        }

        // 更新项目信息
        saveContent.project.pageAry = pageAry
        saveContent.project.openedPageAry = openedPageAry
        saveContent.project.deletedPageAry = deletedPageAry

        // 更新页面内容
        if (updatedPageAry) {
          updatedPageAry.forEach((page) => {
            const idx = saveContent.pages.findIndex((p) => p.id === page.id)
            if (idx > -1) {
              saveContent.pages[idx].content = page.content
            } else {
              saveContent.pages.push(page)
            }
          })
        }

        // tabbar
        const tabbar = (window as any).__tabbar__.get()
        saveContent.tabbar = tabbar

        // 持久化到 localStorage
        localStorage.setItem(STORAGE_KEY, JSON.stringify(saveContent))

        message.info(`保存完成`)
      } catch (error) {
        console.error('❌ 保存失败:', error)
      }
    },

    // 加载页面元数据（项目结构）
    pageMetaLoader() {
      return new Promise((resolve, reject) => {
        if (fileContent) {
          const { project } = fileContent
          resolve(project)
        } else {
          resolve() // 空项目
        }
      })
    },

    // 加载页面内容（根据 ID）
    pageContentLoader(pageId) {
      return new Promise((resolve, reject) => {
        if (fileContent) {
          const { pages } = fileContent
          const rtn = pages.find((page) => page.id === pageId)
          resolve(rtn)
        } else {
          resolve()
        }
      })
    },

    // 画布配置
    geoView: {
      toolbarContainer: '#toolbarBtns', // 工具栏容器
      type: 'mobile', // 移动端模式
      width: 375, // 画布宽度
      height: 667, // 画布高度
      scenes: {
        presets: [], // 预设场景
        adder: [
          // 可添加的页面类型
          {
            type: 'normal',
            title: '小程序标签页',
            template: {
              namespace: 'mybricks.taro.systemPage',
              deletable: false,
              asRoot: true,
            },
            inputs: [
              {
                id: 'open',
                title: '打开',
                schema: {
                  type: 'object',
                },
              },
            ],
          },
          {
            type: 'normal',
            title: '小程序页面',
            template: {
              namespace: 'mybricks.taro.systemPage',
              deletable: false,
              asRoot: true,
              data: {
                useTabBar: false,
              },
            },
            inputs: [
              {
                id: 'open',
                title: '打开',
                schema: {
                  type: 'object',
                },
              },
            ],
          },
          {
            type: 'popup',
            title: '对话框',
            template: {
              namespace: 'mybricks.taro.popup',
              deletable: false,
              asRoot: true,
            },
            inputs: [
              {
                id: 'open',
                title: '打开',
                schema: {
                  type: 'object',
                },
              },
            ],
          },
          {
            type: 'normal',
            title: '网页',
            template: {
              namespace: 'mybricks.taro.systemWebview',
              deletable: false,
              asRoot: true,
            },
            inputs: [
              {
                id: 'open',
                title: '打开',
                schema: {
                  type: 'object',
                },
              },
            ],
          },
        ],
      },
    },

    // 交互编排视图
    toplView: {
      title: '交互',
      cards: {
        main: {
          title: '页面',
          ioEditable: true, // 可编辑输入输出
        },
      },
      vars: {}, // 变量配置
      fx: {}, // 函数配置
      useStrict: false, // 非严格模式
    },

    // 组件运行环境配置
    com: {
      env: {
        // 国际化
        i18n(title) {
          return title
        },
        // 调用连接器（HTTP 请求等）
        callConnector(connector, params) {
          const plugin = designerRef.current?.getPlugin(
            connector.connectorName || '@mybricks/plugins/service'
          )

          if (plugin) {
            return plugin.callConnector(connector, params)
          } else {
            return Promise.reject('错误的连接器类型.')
          }
        },
      },
    },

    // 编辑器配置面板
    editView: {
      items({}, cate0, cate1, cate2) {
        cate0.title = `项目`
        cate0.items = [
          {
            items: [
              {
                title: '项目的配置项例子',
                type: 'switch',
                value: {
                  get(context) {
                    return context._useRem
                  },
                  set(context, v: boolean) {
                    context._useRem = v
                  },
                },
              },
            ],
          },
        ]
      },
    },
  }
}

// 挂载到全局供 app.tsx 使用
;(window as any).config = config
