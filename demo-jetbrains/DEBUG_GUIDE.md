# JetBrains 插件调试指南

本指南介绍如何在 MyBricks JetBrains 插件中查看 Chrome 控制台（JCEF DevTools）和调试技巧。

## 🔍 方法 1：右键菜单打开 DevTools（最简单）

### 步骤：

1. **运行插件**
   ```bash
   cd demo-jetbrains
   ./gradlew runIde
   ```

2. **打开 MyBricks 工具窗口**
   - 点击右侧边栏的 "MyBricks" 图标
   - 或点击主工具栏的 MyBricks 按钮

3. **右键点击设计器界面**
   - 在 MyBricks 设计器的任意空白处右键点击
   - 在弹出菜单中选择 **"Open DevTools"** 或 **"Inspect"**

4. **DevTools 窗口打开**
   - 开发者工具窗口将以独立窗口形式打开
   - 您可以查看：
     - Console（控制台日志）
     - Network（网络请求）
     - Elements（HTML 结构）
     - Sources（源代码）

### 截图示例：

```
┌─────────────────────────────────────┐
│   MyBricks 设计器界面               │
│                                     │
│   [右键点击此处] ─────┐             │
│                       │             │
│                       ▼             │
│   ┌──────────────────────────┐     │
│   │ 右键菜单                 │     │
│   ├──────────────────────────┤     │
│   │ Cut                      │     │
│   │ Copy                     │     │
│   │ Paste                    │     │
│   ├──────────────────────────┤     │
│   │ ✅ Open DevTools  ◀────  │     │
│   │ Inspect                  │     │
│   └──────────────────────────┘     │
└─────────────────────────────────────┘
```

---

## 🔧 方法 2：代码自动打开 DevTools

如果右键菜单不可用，或想要每次自动打开 DevTools，可以修改代码：

### 步骤：

1. **编辑 Kotlin 代码**
   
   打开文件：`src/main/kotlin/com/mybricks/jetbrains/MyBricksToolWindowFactory.kt`

2. **取消注释自动打开代码**

   找到这段代码（约第 40 行）：

   ```kotlin
   // 可选：自动打开 DevTools（取消注释下面的代码）
   // browser.jbCefClient.addLoadHandler(object : CefLoadHandlerAdapter() {
   //     override fun onLoadEnd(cefBrowser: CefBrowser?, frame: CefFrame?, httpStatusCode: Int) {
   //         if (frame?.isMain == true) {
   //             // 页面加载完成后自动打开 DevTools
   //             cefBrowser?.devTools?.show()
   //         }
   //     }
   // }, browser.cefBrowser)
   ```

   修改为（删除注释符号 `//`）：

   ```kotlin
   // 自动打开 DevTools
   browser.jbCefClient.addLoadHandler(object : CefLoadHandlerAdapter() {
       override fun onLoadEnd(cefBrowser: CefBrowser?, frame: CefFrame?, httpStatusCode: Int) {
           if (frame?.isMain == true) {
               // 页面加载完成后自动打开 DevTools
               cefBrowser?.devTools?.show()
           }
       }
   }, browser.cefBrowser)
   ```

3. **重新运行插件**
   ```bash
   ./gradlew runIde
   ```

4. **DevTools 自动打开**
   - 现在每次打开工具窗口，DevTools 会自动显示

---

## 🌐 方法 3：使用远程调试端口（高级）

如果前两种方法都不可用，可以使用 Chrome 远程调试：

### 步骤：

1. **启用远程调试**（需要修改代码）

   在 `init` 块中添加：

   ```kotlin
   init {
       // 启用远程调试端口
       System.setProperty("jcef.debug.port", "9222")
       
       // ... 其他代码
   }
   ```

2. **重新运行插件**
   ```bash
   ./gradlew runIde
   ```

3. **在 Chrome 浏览器中访问**
   - 打开 Chrome 浏览器
   - 访问：`chrome://inspect`
   - 或访问：`http://localhost:9222`
   - 点击 "inspect" 即可调试

---

## 🐛 常见调试场景

### 场景 1：查看 JavaScript 错误

1. 打开 DevTools（方法 1 或 2）
2. 切换到 **Console** 标签
3. 查看红色错误信息
4. 点击错误可跳转到源代码位置

### 场景 2：查看网络请求

1. 打开 DevTools
2. 切换到 **Network** 标签
3. 刷新页面或触发操作
4. 查看所有 HTTP 请求
5. 点击请求可查看详细信息（Headers、Response 等）

**常见检查项：**
- ✅ React、Ant Design 等 CDN 资源是否成功加载
- ✅ MyBricks SDK 是否加载成功
- ✅ 接口连接器请求是否正常

### 场景 3：调试 React 组件

1. 打开 DevTools
2. 切换到 **Console** 标签
3. 使用 React DevTools（如果已安装）
4. 或使用 `console.log()` 输出调试信息

**在代码中添加调试日志：**

编辑 `src/main/resources/webview/app.tsx`：

```typescript
function App() {
    console.log('🚀 App 组件加载');
    
    const [changed, setChanged] = useState(0)
    
    console.log('📊 当前 changed 值:', changed);
    
    // ... 其他代码
}
```

### 场景 4：查看 localStorage 数据

1. 打开 DevTools
2. 切换到 **Application** 标签（或 **Storage** 标签）
3. 展开 **Local Storage**
4. 查看保存的项目数据

**手动操作：**

在 Console 中执行：

```javascript
// 查看保存的数据
localStorage.getItem('--mybricks-file-content-')

// 清除数据
localStorage.removeItem('--mybricks-file-content-')

// 查看所有 localStorage
console.table(localStorage)
```

### 场景 5：断点调试

1. 打开 DevTools
2. 切换到 **Sources** 标签
3. 找到 `app.tsx` 或 `config.tsx`（可能在 inline script 中）
4. 点击行号设置断点
5. 触发相关操作，代码会在断点处暂停
6. 使用 Step Over、Step Into 等按钮调试

---

## 📊 DevTools 各标签功能说明

| 标签 | 功能 | 常用场景 |
|------|------|---------|
| **Console** | JavaScript 控制台 | 查看日志、错误、执行命令 |
| **Elements** | HTML/CSS 查看器 | 检查 DOM 结构、调整样式 |
| **Sources** | 源代码调试器 | 设置断点、单步调试 |
| **Network** | 网络监控 | 查看 HTTP 请求、资源加载 |
| **Application** | 存储查看器 | 查看 localStorage、cookies |
| **Performance** | 性能分析 | 分析页面性能瓶颈 |
| **Memory** | 内存分析 | 检测内存泄漏 |

---

## 🎯 快速调试技巧

### 技巧 1：快速查看变量

在 Console 中：

```javascript
// 查看全局变量
window.mybricks     // MyBricks SDK
window.React        // React
window.ReactDOM     // ReactDOM
window.antd         // Ant Design

// 查看配置
window.config       // 设计器配置函数
```

### 技巧 2：重新加载页面

如果修改了 `webview/` 下的文件：

1. 在 DevTools Console 中执行：
   ```javascript
   location.reload()
   ```

2. 或关闭工具窗口后重新打开

⚠️ **注意**：修改 Kotlin 代码需要重新运行 `./gradlew runIde`

### 技巧 3：捕获所有错误

在 Console 中运行：

```javascript
window.addEventListener('error', function(e) {
    console.error('❌ 捕获到错误:', e.error);
});

window.addEventListener('unhandledrejection', function(e) {
    console.error('❌ 未处理的 Promise 拒绝:', e.reason);
});
```

### 技巧 4：性能监控

```javascript
// 监控渲染性能
console.time('render');
// ... 执行操作
console.timeEnd('render');

// 查看内存使用
console.log('内存:', performance.memory);
```

---

## ⚠️ 常见问题

### Q: 右键菜单中没有 "Open DevTools"？

**A**: 尝试以下方法：
1. 确保使用的是最新版本的 IntelliJ Platform
2. 检查 JCEF 是否正确初始化
3. 使用方法 2（代码自动打开）
4. 使用方法 3（远程调试）

### Q: DevTools 窗口无法打开？

**A**: 可能原因：
1. IDE 版本过低（需要 2020.2+）
2. JCEF 组件未正确加载
3. 权限问题

**解决方案**：
- 升级 IDE 到最新版本
- 检查 IDE 日志：`Help` → `Show Log in Finder/Explorer`
- 查看是否有 JCEF 相关错误

### Q: Console 中看到跨域错误？

**A**: 这是正常的。JCEF 的安全策略与浏览器类似。

**解决方案**：
- 在 `index.html` 中正确配置 CSP（Content Security Policy）
- 已在项目中配置，如需调整请查看 `webview/index.html`

### Q: 如何保留 Console 日志？

**A**: 在 DevTools 设置中：
1. 点击 DevTools 右上角的 ⚙️（设置图标）
2. 勾选 **"Preserve log"**
3. 现在即使页面刷新，日志也会保留

---

## 📝 调试 Checklist

在开发过程中，建议按以下顺序检查：

- [ ] ✅ DevTools 是否能正常打开
- [ ] ✅ Console 中是否有错误信息
- [ ] ✅ CDN 资源是否全部加载成功（Network 标签）
- [ ] ✅ React、MyBricks SDK 是否正确初始化
- [ ] ✅ localStorage 中是否有保存的数据
- [ ] ✅ HTTP 请求是否正常（接口连接器）
- [ ] ✅ 是否有未处理的 Promise 拒绝

---

## 🎓 学习资源

- [Chrome DevTools 官方文档](https://developer.chrome.com/docs/devtools/)
- [JCEF GitHub 仓库](https://github.com/chromiumembedded/java-cef)
- [JetBrains Platform SDK - JCEF](https://plugins.jetbrains.com/docs/intellij/jcef.html)

---

## 💡 最佳实践

1. **开发时始终打开 DevTools**
   - 及时发现和解决问题
   - 监控性能

2. **使用 console.log 输出关键信息**
   - 组件渲染状态
   - 用户操作
   - 数据变化

3. **利用 React DevTools**
   - 如果可用，安装 React DevTools 扩展
   - 更方便地调试 React 组件

4. **定期清理 localStorage**
   - 避免旧数据干扰测试
   - 使用 DevTools 或代码清理

5. **记录调试信息**
   - 记录发现的问题和解决方案
   - 便于团队协作

---

**祝您调试顺利！** 🎉

如有任何问题，请查看其他文档或联系 support@mybricks.ai

