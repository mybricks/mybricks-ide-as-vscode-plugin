/**
 * MyBricks VSCode 插件 - 主入口
 * 提供 MyBricks.ai 设计器的 VSCode 集成
 */
const vscode = require('vscode')
const { getWebviewContent } = require('./webview')
const messageApi = require('./utils/messageApi')
const generateTaroProject = require('./utils/generateTaroProject')
const testData = require('./test/taro-project.json')

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

        messageApiInstance.registerHandler('export', async (data) => {
          const { projectName, exportDir, configJson, isZip } = data
          // const taroProjectJson = generateTaroProjectJson(data)
          // generateTaroProject(testData)
          return {
            message: '下载完成',
          }
        })

        // 选择导出目录
        messageApiInstance.registerHandler('selectExportDir', async (data) => {
          let defaultUri
          const workspaceFolders = vscode.workspace.workspaceFolders
          console.log(workspaceFolders)
          if (workspaceFolders && workspaceFolders.length > 0) {
            defaultUri = workspaceFolders[0].uri
          }
          const result = await vscode.window.showOpenDialog({
            canSelectFiles: false,
            canSelectFolders: true,
            canSelectMany: false,
            defaultUri,
            openLabel: '选择',
            title: '选择要保存应用的文件夹',
          })
          if (result && result.length > 0) {
            this.selectedFolder = result[0].fsPath
            return {
              path: selectedFolder,
            }
          }
          return {
            message: '取消选择',
          }
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
                    padding: 20px;
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
                .welcome {
                    font-size: 12px;
                    text-align: center;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="welcome">欢迎使用MyBricks</div>
            </div>
            <script>

            </script>
        </body>
      </html>`

      // 监听侧边栏消息
      webviewView.webview.onDidReceiveMessage(
        async (message) => {
          switch (message.command) {
            // 打开 dump.json 文件
            case 'openDumpFile':
              try {
                const fs = require('fs')
                const path = require('path')

                // 确定默认打开路径
                let defaultUri
                const workspaceFolders = vscode.workspace.workspaceFolders
                if (workspaceFolders && workspaceFolders.length > 0) {
                  defaultUri = workspaceFolders[0].uri
                } else {
                  const homeDir = require('os').homedir()
                  defaultUri = vscode.Uri.file(homeDir)
                }

                // 弹出文件选择对话框
                const fileUris = await vscode.window.showOpenDialog({
                  defaultUri: defaultUri,
                  canSelectMany: false,
                  filters: {
                    'Dump JSON 文件': ['dump.json', 'json'],
                    所有文件: ['*'],
                  },
                  openLabel: '打开',
                })

                if (!fileUris || fileUris.length === 0) {
                  return
                }

                // 读取文件内容
                const fileContent = fs.readFileSync(fileUris[0].fsPath, 'utf8')
                const fileName = path.basename(fileUris[0].fsPath)

                // 打开主面板并加载内容
                vscode.commands.executeCommand('mybricks.openIDE')

                // 等待主面板加载
                setTimeout(() => {
                  if (currentPanel) {
                    currentPanel.webview.postMessage({
                      command: 'loadDump',
                      fileName: fileName,
                      content: fileContent,
                    })
                  }
                }, 500)
              } catch (error) {
                vscode.window.showErrorMessage(`打开文件失败: ${error.message}`)
              }
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
  setTimeout(() => {
    vscode.commands.executeCommand('mybricks.openIDE')
  }, 100)
}

/**
 * 插件停用时调用
 */
function deactivate() {}

module.exports = {
  activate,
  deactivate,
}
