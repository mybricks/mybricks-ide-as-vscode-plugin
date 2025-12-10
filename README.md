# MyBricks VS Code Extension

在 VS Code 中全屏显示 MyBricks 网页界面。

## 使用方法

1. 按 F5 启动扩展开发调试
2. 扩展会自动打开全屏网页，或者：
   - 点击活动栏的 MyBricks 图标，在侧边栏点击按钮
   - 使用命令面板（Cmd/Ctrl+Shift+P）运行 "Open MyBricks Web"

## 配置

在 VS Code 设置中修改 `mybricks.webUrl` 可以更改显示的网址，默认为 `http://localhost:8002/?ai1`。
修改配置后，已打开的页面会自动刷新。

## 注意事项

如果网页无法显示，可能是目标网站设置了 `X-Frame-Options` 或 `Content-Security-Policy` 阻止了 iframe 嵌入。需要在服务端移除或修改这些响应头。

