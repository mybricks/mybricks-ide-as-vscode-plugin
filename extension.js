const vscode = require('vscode');
const { getWebviewContent } = require('./webview');

let currentPanel = undefined;

function activate(context) {
    const extensionUri = context.extensionUri;
    // 注册命令：打开全屏网页
    const openWebCommand = vscode.commands.registerCommand('mybricks.openIDE', () => {
        if (currentPanel) {
            // 如果面板已存在，显示并更新
            currentPanel.reveal(vscode.ViewColumn.One);
            currentPanel.webview.html = getWebviewContent(currentPanel.webview, extensionUri);
        } else {
            // 创建新的全屏面板
            currentPanel = vscode.window.createWebviewPanel(
                'mybricksWeb',
                'MyBricks',
                vscode.ViewColumn.One,
                {
                    enableScripts: true,
                    retainContextWhenHidden: true,
                    localResourceRoots: [
                        vscode.Uri.joinPath(extensionUri, 'asserts'),
                        extensionUri
                    ]
                }
            );

            currentPanel.webview.html = getWebviewContent(currentPanel.webview, extensionUri);

            // 监听来自 webview 的消息
            currentPanel.webview.onDidReceiveMessage(
                async message => {
                    switch (message.command) {
                       
                    }
                },
                undefined,
                context.subscriptions
            );

            // 面板关闭时清理引用
            currentPanel.onDidDispose(() => {
                currentPanel = undefined;
            });
        }
    });

    // 注册侧边栏视图
    const provider = {
        resolveWebviewView(webviewView, context, token) {
            webviewView.webview.options = {
                enableScripts: true,
                localResourceRoots: [
                    vscode.Uri.joinPath(extensionUri, 'asserts'),
                    extensionUri
                ]
            };

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
</html>`;

            // 监听来自侧边栏的消息
            webviewView.webview.onDidReceiveMessage(
                async message => {
                    switch (message.command) {
                        case 'openDumpFile':
                            try {
                                const fs = require('fs');
                                const path = require('path');

                                // 确定默认打开路径
                                let defaultUri;
                                const workspaceFolders = vscode.workspace.workspaceFolders;
                                if (workspaceFolders && workspaceFolders.length > 0) {
                                    defaultUri = workspaceFolders[0].uri;
                                } else {
                                    const homeDir = require('os').homedir();
                                    defaultUri = vscode.Uri.file(homeDir);
                                }

                                // 弹出文件选择对话框
                                const fileUris = await vscode.window.showOpenDialog({
                                    defaultUri: defaultUri,
                                    canSelectMany: false,
                                    filters: {
                                        'Dump JSON 文件': ['dump.json', 'json'],
                                        '所有文件': ['*']
                                    },
                                    openLabel: '打开'
                                });

                                if (!fileUris || fileUris.length === 0) {
                                    return;
                                }

                                // 读取文件内容
                                const fileContent = fs.readFileSync(fileUris[0].fsPath, 'utf8');
                                const fileName = path.basename(fileUris[0].fsPath);

                                // 打开主面板并加载内容
                                vscode.commands.executeCommand('mybricks.openIDE');
                                
                                // 等待主面板加载
                                setTimeout(() => {
                                    if (currentPanel) {
                                        currentPanel.webview.postMessage({
                                            command: 'loadDump',
                                            fileName: fileName,
                                            content: fileContent
                                        });
                                    }
                                }, 500);
                            } catch (error) {
                                vscode.window.showErrorMessage(`打开文件失败: ${error.message}`);
                            }
                            break;
                    }
                },
                undefined,
                context.subscriptions
            );
        }
    };

    context.subscriptions.push(openWebCommand);
    context.subscriptions.push(
        vscode.window.registerWebviewViewProvider('mybricks.ide', provider)
    );

    // 扩展激活时自动打开全屏页面
    // 使用 setTimeout 确保扩展完全初始化后再打开
    setTimeout(() => {
        vscode.commands.executeCommand('mybricks.openIDE');
    }, 100);
}

function deactivate() { }

module.exports = {
    activate,
    deactivate
};

