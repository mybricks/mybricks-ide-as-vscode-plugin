/**
 * MyBricks SDK 配置
 */
const { message } = (window as any).antd;

const STORAGE_KEY = '--mybricks-file-content-'

const servicePlugin = window['@mybricks/plugins/service'].default

function config({ designerRef }) {

  const cachedContent = localStorage.getItem(STORAGE_KEY);
  const fileContent = cachedContent ? JSON.parse(cachedContent) : null;

  return {
    version: new Date().getTime(),
    type: 'mpa',
    plugins: [
      servicePlugin(),//服务接口连接器插件
    ],
    comLibAdder() {
    },
    comLibLoader(desc) {//加载组件库
      return new Promise((resolve, reject) => {
        resolve([
          //小程序组件库
          `https://p66-ec.becukwai.com/udata/pkg/eshop/fangzhou/mybricks.normal-miniapp.taro/0.5.11/edit.js`
        ])
      })
    },
    save() {
      try {
        if (!designerRef.current) {
          message.error('设计器未初始化');
          return;
        }

        const dumped = designerRef.current.dump(true, true)

        if (!dumped) {
          message.error('无法获取设计器数据');
          console.error('dump() 返回 undefined');
          return;
        }

        const { json: dumpedJson, reset } = dumped

        if (!dumpedJson) {
          message.error('导出数据为空');
          console.error('dumped.json 为空:', dumped);
          return;
        }

        const {
          pageAry,
          projectContent,
          openedPageAry,
          updatedPageAry,
          deletedPageAry
        } = dumpedJson

        let saveContent = fileContent

        if (!saveContent) {
          saveContent = {
            project: {
              projectContent
            }, pages: []
          }
        } else {
          saveContent.project.projectContent = projectContent
        }

        saveContent.project.pageAry = pageAry
        saveContent.project.openedPageAry = openedPageAry
        saveContent.project.deletedPageAry = deletedPageAry

        if (updatedPageAry) {
          updatedPageAry.forEach(page => {
            const idx = saveContent.pages.findIndex(p => p.id === page.id)
            if (idx > -1) {
              saveContent.pages[idx].content = page.content
            } else {
              saveContent.pages.push(page)
            }
          })
        }

        // 使用 localStorage 缓存文件内容
        localStorage.setItem(STORAGE_KEY, JSON.stringify(saveContent));

        message.info(`保存完成`);
      } catch (error) {
        console.error('❌ 保存失败:', error);
      }
    },
    pageMetaLoader() {//加载页面结构数据
      return new Promise((resolve, reject) => {
        if (fileContent) {
          const { project } = fileContent

          resolve(project)
        } else {
          resolve()//空文件
        }
      })
    },
    pageContentLoader(pageId) {//加载页面内容
      return new Promise((resolve, reject) => {
        if (fileContent) {
          const { pages } = fileContent

          const rtn = pages.find(page => page.id === pageId)
          resolve(rtn)
        } else {
          resolve()
        }
      })
    },
    // sliderView: {
    //   display: false
    // },
    geoView: {
      toolbarContainer: '#toolbarBtns',
      type: "mobile",
      width: 375,
      height: 667,
      scenes: {
        presets: [],
        adder: [
          {
            type: "normal",
            title: "小程序标签页",
            template: {
              namespace: "mybricks.taro.systemPage",
              deletable: false,
              asRoot: true,
            },
            inputs: [
              {
                id: "open",
                title: "打开",
                schema: {
                  type: "object",
                },
              },
            ],
          },
          {
            type: "normal",
            title: "小程序页面",
            template: {
              namespace: "mybricks.taro.systemPage",
              deletable: false,
              asRoot: true,
              data: {
                useTabBar: false,
              },
            },
            inputs: [
              {
                id: "open",
                title: "打开",
                schema: {
                  type: "object",
                },
              },
            ],
          },
          {
            type: "popup",
            title: "对话框",
            template: {
              namespace: "mybricks.taro.popup",
              deletable: false,
              asRoot: true,
            },
            inputs: [
              {
                id: "open",
                title: "打开",
                schema: {
                  type: "object",
                },
              },
            ],
          },
          {
            type: "normal",
            title: "网页",
            template: {
              namespace: "mybricks.taro.systemWebview",
              deletable: false,
              asRoot: true,
            },
            inputs: [
              {
                id: "open",
                title: "打开",
                schema: {
                  type: "object",
                },
              },
            ],
          },
        ],
      },
    },
    toplView: {
      title: '交互',
      cards: {
        main: {
          title: '页面',
          ioEditable: true,
        },
      },
      vars: {},
      fx: {},
      useStrict: false
    },
    com: {//组件运行配置
      env: {
        i18n(title) {//多语言
          return title
        },
        callConnector(connector, params) {//调用连接器
          const plugin = designerRef.current?.getPlugin(connector.connectorName || '@mybricks/plugins/service');

          if (plugin) {
            return plugin.callConnector(connector, params);
          } else {
            return Promise.reject('错误的连接器类型.');
          }
        }
      }
    },
    editView: {
      items({ }, cate0, cate1, cate2) {
        cate0.title = `项目`
        cate0.items = [
          {
            items: [
              {
                title: '项目的配置项例子',
                type: 'switch',
                value: {
                  get(context) {
                    return context._useRem;
                  },
                  set(context, v: boolean) {
                    context._useRem = v;
                  },
                },
              },
            ]
          }
        ]
      }
    },
  }
}

// 将 config 函数挂载到 window 对象上
(window as any).config = config;