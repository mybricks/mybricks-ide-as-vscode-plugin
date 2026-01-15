/**
 * MyBricks VSCode 插件 - 主入口
 * 提供 MyBricks.ai 设计器的 VSCode 集成
 */
const vscode = require('vscode')
const { getWebviewContent } = require('./webview')
const messageApi = require('./utils/messageApi')
const { getFileContent, saveFileContent } = require('./utils/saveProject')
const { exportProject } = require('./utils/exportProject')
const { isMybricksProject } = require('./utils/utils')

// 当前面板实例，单例模式
let currentPanel = undefined

/**
 * 插件激活时调用
 */
function activate(context) {
  const extensionUri = context.extensionUri

  // 注册命令：打开 MyBricks 设计器
  const openWebCommand = vscode.commands.registerCommand(
    'mybricks.openIDE',
    () => {
      if (currentPanel) {
        // 如果面板已存在，显示并更新
        currentPanel.reveal(vscode.ViewColumn.One)
        currentPanel.webview.html = getWebviewContent(
          currentPanel.webview,
          extensionUri
        )
      } else {
        // 创建新面板
        currentPanel = vscode.window.createWebviewPanel(
          'mybricksWeb',
          'MyBricks',
          vscode.ViewColumn.One,
          {
            enableScripts: true, // 允许运行 JS
            retainContextWhenHidden: true, // 隐藏时保留状态
            localResourceRoots: [
              // 允许访问的本地资源路径
              vscode.Uri.joinPath(extensionUri, 'asserts'),
              extensionUri,
            ],
          }
        )

        currentPanel.webview.html = getWebviewContent(
          currentPanel.webview,
          extensionUri
        )

        // 监听来自 webview 的消息（扩展用于未来的交互）
        const messageApiInstance = new messageApi(currentPanel)

        // 获取低码项目内容
        messageApiInstance.registerHandler('getFileContent', async () => {
          const data = getFileContent(context)
          return data
        })

        // 保存低码项目
        messageApiInstance.registerHandler('saveFileContent', async (data) => {
          saveFileContent(context, data)
        })

        // 导出项目
        messageApiInstance.registerHandler('exportProject', async (data) => {
          const { configJson } = data
          const res = await exportProject(context, configJson)
          return res
        })
        // currentPanel.webview.onDidReceiveMessage(
        //   async (message) => {
        //     switch (message.command) {
        //       // 可在此处添加自定义消息处理
        //     }
        //   },
        //   undefined,
        //   context.subscriptions
        // )

        // 面板关闭时清理
        currentPanel.onDidDispose(() => {
          currentPanel = undefined
        })
      }
    }
  )

  // 注册侧边栏视图提供者
  const provider = {
    resolveWebviewView(webviewView, context, token) {
      webviewView.webview.options = {
        enableScripts: true,
        localResourceRoots: [
          vscode.Uri.joinPath(extensionUri, 'asserts'),
          extensionUri,
        ],
      }

      // 侧边栏显示简洁的打开按钮
      webviewView.webview.html = `<!DOCTYPE html>
        <html lang="zh-CN">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                body {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin: 0;
                    padding: 10px;
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
                    background: var(--vscode-sideBar-background);
                    color: var(--vscode-sideBar-foreground);
                }
                .container {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    width: 100%;
                }
                .btn {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  height: 30px;
                  background: #d1d3db;
                  cursor: pointer;
                  color: #000;
                  border-radius: 4px;
                }
                .btn:hover {
                  background: #edeff2;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <span class="btn" onclick="openIDE()">打开 MyBricks IDE</span>
            </div>
            <script>
                const vscode = acquireVsCodeApi()
                window.VS_CODE = vscode

                function openIDE() {
                  window.VS_CODE.postMessage({
                    command: 'openIDE',
                  })
                }
            </script>
        </body>
      </html>`

      // 监听侧边栏消息
      webviewView.webview.onDidReceiveMessage(
        async (message) => {
          switch (message.command) {
            // 打开 MyBricks IDE
            case 'openIDE':
              vscode.commands.executeCommand('mybricks.openIDE')
              break
          }
        },
        undefined,
        context.subscriptions
      )
    },
  }

  // 注册命令和视图
  context.subscriptions.push(openWebCommand)
  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider('mybricks.ide', provider)
  )

  // 启动时自动打开设计器
  if (isMybricksProject(context)) {
    setTimeout(() => {
      vscode.commands.executeCommand('mybricks.openIDE')
    }, 100)
  }
}

/**
 * 插件停用时调用
 */
function deactivate() {}

module.exports = {
  activate,
  deactivate,
}
