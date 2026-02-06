/**
 * MyBricks.ai 设计器配置
 * 配置小程序组件库、存储、页面加载等核心功能
 */
import { message } from 'antd'
import { getWebViewMessageAPI } from '@/utils/message'
import { tabbarModel } from '@/stores'
import servicePlugin from '@mybricks/plugin-connector-http'
import { editorAppenderFn } from './editorAppender'
import { MpConfig } from './custom-configs'
import { LOCAL_EDITOR_ASSETS } from '@/constants'
import globalPrompt from '@/utils/global-prompt'

const vsCodeMessage = getWebViewMessageAPI()!

/**
 * 生成设计器配置
 */
export async function config({ ctx, designerRef, pageModel }: any) {
  // 读取低码项目内容
  const fileContent = await vsCodeMessage.call('getFileContent')

  // tabbar
  tabbarModel.initFromFileContent(fileContent)

  // 应用配置
  pageModel.appConfig = fileContent?.extra?.appConfig || {}
  pageModel.wxConfig = fileContent?.extra?.wxConfig || {}

  return {
    version: new Date().getTime(), // 版本号
    type: 'mpa', // 多页应用模式
    plugins: [
      servicePlugin({
        isPrivatization: false,
        pure: true, //连接器输出配置
      }), // HTTP 接口连接器
    ],

    // 组件库添加器（预留）
    comLibAdder() {},

    // 组件库加载器
    comLibLoader() {
      return new Promise((resolve, reject) => {
        resolve([
          // Taro 小程序组件库
          `https://p66-ec.becukwai.com/udata/pkg/eshop/fangzhou/mybricks.normal-miniapp.taro/0.5.17/edit.js`,
          // 小程序图表组件库
          `https://p66-ec.becukwai.com/udata/pkg/eshop/fangzhou/mybricks.chart-miniapp.taro/0.0.23/edit.js`,
          // 'http://localhost:5500/dist/lib/edit.js',
        ])
      })
    },

    // 保存
    async save() {
      try {
        if (!designerRef.current) {
          message.error('设计器未初始化')
          return
        }

        const dumped = designerRef.current.dump(true, true)
        console.log('>>>>pageModel', pageModel)

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
            extra: {},
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
          updatedPageAry.forEach((page: any) => {
            const idx = saveContent.pages.findIndex(
              (p: any) => p.id === page.id,
            )
            if (idx > -1) {
              saveContent.pages[idx].content = page.content
            } else {
              saveContent.pages.push(page)
            }
          })
        }

        if (!saveContent.extra) saveContent.extra = {}
        saveContent.extra.appConfig = pageModel.appConfig
        saveContent.extra.wxConfig = pageModel.wxConfig

        // tabbar
        const tabbar = tabbarModel.get()
        saveContent.extra.tabbar = tabbar

        // 通知 VS Code 保存文件
        await vsCodeMessage.call('saveFileContent', saveContent)

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
          resolve(undefined) // 空项目
        }
      })
    },

    // 加载页面内容（根据 ID）
    pageContentLoader(pageId: string) {
      return new Promise((resolve, reject) => {
        if (fileContent) {
          const { pages } = fileContent
          const rtn = pages.find((page: any) => page.id === pageId)
          resolve(rtn)
        } else {
          resolve(undefined)
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
      theme: {
        css: [
          'https://my.mybricks.world/mybricks-app-mpsite/public/brickd-mobile/0.0.53/index.css',
          'https://my.mybricks.world/mybricks-app-mpsite/public/edit-reset.css',
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
        i18n(title: any) {
          return title
        },
        // 调用连接器（HTTP 请求等）
        callConnector(connector, params, connectorConfig) {
          const plugin = designerRef.current?.getPlugin(
            connector.connectorName || '@mybricks/plugins/service',
          )

          if (plugin) {
            return plugin.callConnector(
              {
                ...connector,
              },
              params,
              {
                ...connectorConfig,
                before(options) {
                  let newOptions = { ...options }

                  newOptions.headers = newOptions.headers || {}
                  let mybricksGlobalHeaders: any =
                    localStorage.getItem('_MYBRICKS_GLOBAL_HEADERS_') ||
                    '{"data": {}}'
                  mybricksGlobalHeaders = JSON.parse(mybricksGlobalHeaders)

                  // 优先级应该是请求头 > 全局请求头
                  newOptions.headers = {
                    ...mybricksGlobalHeaders.data,
                    ...newOptions.headers,
                  }

                  /**
                   * 如果 url 不以 http 开头，添加默认域名
                   */
                  if (
                    !/^(http|https):\/\/.*/.test(newOptions.url) &&
                    pageModel.appConfig.defaultCallServiceHost
                  ) {
                    newOptions.url = `${pageModel.appConfig.defaultCallServiceHost}${newOptions.url}`
                  }
                  // end

                  return newOptions
                },
              },
            )
          } else {
            return Promise.reject('错误的连接器类型.')
          }
        },
      },
    },

    // 编辑器配置面板
    editView: {
      editorAppender(editConfig) {
        return editorAppenderFn(editConfig, pageModel)
      },
      // eslint-disable-next-line no-empty-pattern
      items({}, cate0, cate1, cate2) {
        cate0.title = '项目'
        cate0.items = [
          {
            title: '绑定微信小程序',
            items: [
              {
                type: 'editorRender',
                // ifVisible: ({ data }) => {
                //   return isDesignFilePlatform('miniprogram')
                // },
                options: {
                  render: () => {
                    return <MpConfig />
                  },
                },
              },
            ],
          },
          {
            title: '接口默认域名',
            description:
              '接口允许单独配置域名。如未设置特定域名，则默认使用预设域名；若已配置特定域名，则会优先使用您所设定的域名。',
            type: 'array',
            options: {
              getTitle: (item) => {
                return (
                  <div
                    style={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      lineHeight: '30px',
                    }}
                    title={item.host}
                  >
                    {item.host || '未设置'}
                  </div>
                )
              },
              items: [
                {
                  title: '域名',
                  type: 'text',
                  value: 'host',
                },
              ],
              editable: false,
              selectable: true,
              onSelect(_id) {
                let item = pageModel.appConfig.hostList.find((hostItem) => {
                  return hostItem._id === _id
                })

                if (!item) {
                  return
                }

                if (!item?.host) {
                  message.warning('请先设置域名')
                  return
                }

                message.success(`默认域名已切换为: ${item.host}`)
                pageModel.appConfig.defaultCallServiceHost = item.host
              },
              onRemove(_id) {
                let item = pageModel.appConfig.hostList.find((hostItem) => {
                  return hostItem._id === _id
                })

                if (!item) {
                  return
                }

                if (item.host === pageModel.appConfig?.defaultCallServiceHost) {
                  pageModel.appConfig.defaultCallServiceHost = undefined
                }
              },
              customOptRender({ item, setList }) {
                return (
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    {pageModel.appConfig?.defaultCallServiceHost ===
                      item.host &&
                      item.host && (
                        <div
                          style={{
                            fontSize: '9px',
                            border: '1px solid #FA6400',
                            borderRadius: '20px',
                            color: 'white',
                            fontWeight: '700',
                            backgroundColor: '#FA6400',
                            padding: '2px 4px',
                          }}
                        >
                          使用该域名
                        </div>
                      )}
                    <div
                      style={{
                        margin: '3px 0px 3px 5px',
                        height: '22px',
                        width: '22px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      onClick={async (e) => {
                        e.stopPropagation()

                        // const host = window.prompt(
                        //   '请输入域名，使用 https:// 或 http:// 开头',
                        //   item.host,
                        // )
                        const host = await globalPrompt({
                          title: '请输入域名，使用 https:// 或 http:// 开头',
                          content: item.host,
                          validate: (value) => {
                            // 校验域名
                            if (value && !/^https?:\/\/.*/.test(value)) {
                              return '请输入正确的域名'
                            }

                            // 重复域名校验
                            if (
                              value &&
                              pageModel.appConfig.hostList.find(
                                (hostItem) => hostItem.host === value,
                              )
                            ) {
                              return '域名已存在'
                            }

                            return ''
                          },
                        })

                        if (host) {
                          setList((c) =>
                            c.map((t) => {
                              if (t._id === item._id) {
                                return {
                                  ...t,
                                  host,
                                }
                              }
                              return t
                            }),
                          )
                        }
                      }}
                    >
                      <svg viewBox='0 0 1024 1024' width='15' height='15'>
                        <path
                          d='M341.108888 691.191148 515.979638 616.741529 408.633794 511.126097 341.108888 691.191148Z'
                          p-id='5509'
                        ></path>
                        <path
                          d='M860.525811 279.121092 749.7171 164.848489 428.544263 481.69274 543.68156 601.158622 860.525811 279.121092Z'
                          p-id='5510'
                        ></path>
                        <path
                          d='M951.813934 142.435013c0 0-29.331026-32.462343-63.091944-57.132208-33.759895-24.670889-59.729359 0-59.729359 0l-57.132208 57.132208 115.996874 115.565039c0 0 48.909943-49.342802 63.957661-66.222237C966.861652 174.897356 951.813934 142.435013 951.813934 142.435013L951.813934 142.435013z'
                          p-id='5511'
                        ></path>
                        <path
                          d='M802.174845 946.239985 176.165232 946.239985c-61.635779 0-111.786992-50.151213-111.786992-111.786992L64.37824 208.443379c0-61.635779 50.151213-111.786992 111.786992-111.786992l303.856449 0c12.357446 0 22.357194 10.011005 22.357194 22.357194s-9.999748 22.357194-22.357194 22.357194L176.165232 141.370775c-36.986379 0-67.072605 30.086226-67.072605 67.072605l0 626.009613c0 36.986379 30.086226 67.072605 67.072605 67.072605l626.009613 0c36.985356 0 67.072605-30.086226 67.072605-67.072605L869.24745 530.596544c0-12.347213 9.999748-22.357194 22.357194-22.357194s22.357194 10.011005 22.357194 22.357194l0 303.856449C913.961838 896.088772 863.810624 946.239985 802.174845 946.239985z'
                          p-id='5512'
                        ></path>
                      </svg>
                    </div>
                  </div>
                )
              },
            },

            value: {
              get({ data, focusArea }) {
                return pageModel?.appConfig?.hostList
              },
              set({ data, focusArea, output, input, ...res }, value) {
                pageModel.appConfig.hostList = value
              },
            },
          },
        ]
      },
      editorOptions: mergeEditorOptions([
        LOCAL_EDITOR_ASSETS,
        DESIGN_MATERIAL_EDITOR_OPTIONS(),
      ]),
    },
  }
}

export function mergeEditorOptions(
  editorOptions: (Record<string, any> | boolean)[],
): Record<string, any> {
  const options: Record<string, any> = {}
  for (let i = 0; i < editorOptions.length; i++) {
    const element = editorOptions[i]
    if (typeof element === 'boolean') {
      continue
    } else {
      Object.assign(options, element)
    }
  }
  return options
}

export const DESIGN_MATERIAL_EDITOR_OPTIONS = () => {
  return {
    imageselector: {
      fileSizeLimit: 2 * 1024,
      extras: [],
    },
  }
}
