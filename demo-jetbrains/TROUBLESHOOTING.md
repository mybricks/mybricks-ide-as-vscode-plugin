# 空白页面故障排查指南

如果 MyBricks 工具窗口显示空白，请按照以下步骤排查：

## 🔍 步骤 1：重新运行插件

1. **停止当前运行的插件**（如果正在运行）
2. **重新构建并运行**：

```bash
cd /Users/cmj/01_dev/mybricks/mybricks-ide-as-vscode-plugin/demo-jetbrains

# 清理旧的构建
./gradlew clean

# 重新运行
./gradlew runIde
```

## 👀 步骤 2：查看 DevTools

现在代码已经修改为**自动打开 DevTools**：

1. 运行插件后，打开 MyBricks 工具窗口
2. **DevTools 窗口会自动弹出**
3. 切换到 **Console** 标签
4. 查看错误信息

### 需要查找的信息：

#### ✅ 正常情况应该看到：
```
🚀 MyBricks: HTML 已加载
📦 检查依赖加载状态...
✅ window.load 事件触发
React: ✅ 已加载
ReactDOM: ✅ 已加载
Babel: ✅ 已加载
antd: ✅ 已加载
mybricks: ✅ 已加载
```

#### ❌ 如果看到错误：

**情况 A：网络错误（最常见）**
```
Failed to load resource: net::ERR_FAILED
https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.development.js
```

**解决方案**：
- 检查网络连接
- 检查防火墙设置
- 可能需要 VPN
- 参考下面的"步骤 3：检查网络"

**情况 B：CSP（内容安全策略）错误**
```
Refused to load the script because it violates the following Content Security Policy directive
```

**解决方案**：
- CSP 配置可能有问题
- 查看 `src/main/resources/webview/index.html` 中的 CSP 设置

**情况 C：React 错误**
```
Uncaught Error: Target container is not a DOM element
```

**解决方案**：
- React 初始化问题
- 检查 `app.tsx` 是否正确加载

## 🌐 步骤 3：检查网络连接

测试 CDN 资源是否可访问：

```bash
# 测试 React CDN
curl -I https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.development.js

# 测试 MyBricks CDN
curl -I https://p4-ec.eckwai.com/kos/nlav12333/mybricks/designer-spa/3.9.836/index.min.js
```

如果返回 `200 OK`，说明网络正常。
如果超时或失败，说明网络有问题。

## 📋 步骤 4：查看 IDE 日志

在运行插件的 IDE 中：

1. 打开 **Help** → **Show Log in Finder/Explorer**
2. 查看日志文件中的错误信息
3. 搜索 "MyBricks" 或 "JCEF" 相关错误

应该能看到我们添加的调试信息：
```
✅ MyBricks: HTML 内容加载成功，长度: 12345
✅ MyBricks: 页面加载完成，状态码: 200
```

如果看到错误：
```
❌ MyBricks: 加载失败: ...
```

## 🔧 步骤 5：常见问题和解决方案

### 问题 1：JCEF 不可用

**症状**：工具窗口完全空白，没有任何内容

**检查**：
- IDE 版本是否 ≥ 2023.2
- JDK 版本是否 ≥ 17

**解决**：
```bash
# 检查 Java 版本
java -version

# 应该显示 17 或更高
```

### 问题 2：CDN 资源被阻止

**症状**：DevTools Console 显示大量 ERR_FAILED

**解决方案 A**：使用 VPN
- 某些 CDN 可能在特定地区受限

**解决方案 B**：使用本地资源（高级）
- 下载所有 CDN 资源到本地
- 修改 HTML 引用本地文件

### 问题 3：Babel 编译错误

**症状**：Console 显示 TypeScript 语法错误

**解决方案**：
- 检查 `app.tsx` 和 `config.tsx` 语法
- 确保 Babel Standalone 已正确加载

### 问题 4：React 未渲染

**症状**：依赖都加载了，但 `#root` 仍为空

**检查 Console**：
- 查看是否有 React 错误
- 检查是否有 `root.render` 调用

## 🧪 步骤 6：最小化测试

创建一个最简单的测试来验证 JCEF 是否工作：

### 临时修改 `loadHtmlContent()` 方法

在 `MyBricksToolWindowFactory.kt` 中：

```kotlin
private fun loadHtmlContent(): String {
    // 临时返回一个简单的 HTML 测试 JCEF
    return """
        <!DOCTYPE html>
        <html>
        <head>
            <title>Test</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    padding: 20px;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                }
                .test {
                    background: rgba(255,255,255,0.1);
                    padding: 20px;
                    border-radius: 10px;
                    margin: 10px 0;
                }
            </style>
        </head>
        <body>
            <h1>✅ JCEF 工作正常！</h1>
            <div class="test">
                <h2>如果您能看到这个页面：</h2>
                <ul>
                    <li>JCEF 浏览器正常工作</li>
                    <li>HTML 加载成功</li>
                    <li>CSS 样式正常</li>
                </ul>
            </div>
            <div class="test">
                <h2>下一步：</h2>
                <p>如果这个页面能显示，说明 JCEF 本身没问题。</p>
                <p>问题可能是：外部 CDN 资源加载失败。</p>
            </div>
            <script>
                console.log('✅ JavaScript 正常工作');
                alert('如果您看到这个弹窗，说明 JavaScript 正常！');
            </script>
        </body>
        </html>
    """.trimIndent()
}
```

**运行测试**：
```bash
./gradlew runIde
```

如果能看到彩色页面和弹窗，说明 JCEF 工作正常，问题在于 MyBricks 的资源加载。

## 📞 获取帮助

如果以上步骤都无法解决问题，请提供以下信息：

1. **IDE 版本**：Help → About
2. **Java 版本**：`java -version`
3. **操作系统**：macOS / Windows / Linux 及版本
4. **DevTools Console 的完整错误信息**
5. **IDE 日志中的相关错误**

发送到：support@mybricks.ai

## 🎯 快速检查清单

- [ ] IDE 版本 ≥ 2023.2
- [ ] JDK 版本 ≥ 17
- [ ] 网络连接正常
- [ ] 可以访问 CDN 资源
- [ ] DevTools 能正常打开
- [ ] Console 中没有红色错误
- [ ] 所有依赖都显示 "✅ 已加载"

---

**提示**：现在代码已经修改为自动打开 DevTools，您只需重新运行插件即可看到详细的调试信息！

```bash
cd demo-jetbrains
./gradlew runIde
```

