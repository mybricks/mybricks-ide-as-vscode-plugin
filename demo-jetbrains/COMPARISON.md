# VS Code 版本 vs JetBrains 版本对比

本文档对比 MyBricks 插件的 VS Code 版本和 JetBrains 版本的技术实现和功能差异。

## 📊 技术栈对比

| 方面 | VS Code 版本 | JetBrains 版本 |
|------|-------------|----------------|
| **开发语言** | JavaScript/Node.js | Kotlin |
| **框架** | VS Code Extension API | IntelliJ Platform SDK |
| **Web 视图** | VS Code Webview API | JCEF (Java Chromium) |
| **构建工具** | npm | Gradle |
| **UI 框架** | React 18 | React 18 (在 JCEF 中) |
| **包管理** | package.json | build.gradle.kts |
| **最小版本** | VS Code 1.60.0+ | IDE 2023.2+ |
| **JDK 要求** | 不需要 | JDK 17+ |

## 🏗️ 架构对比

### VS Code 版本

```
┌─────────────────────────────────┐
│      VS Code Extension          │
│  (extension.js + webview.js)    │
├─────────────────────────────────┤
│     VS Code Webview API         │
│  (Electron Chromium Wrapper)    │
├─────────────────────────────────┤
│      React 18 Application       │
│  (app.tsx + config.tsx)         │
├─────────────────────────────────┤
│   MyBricks Designer Engine      │
│     (External CDN Scripts)      │
└─────────────────────────────────┘
```

### JetBrains 版本

```
┌─────────────────────────────────┐
│    JetBrains Plugin (Kotlin)    │
│  MyBricksToolWindowFactory.kt   │
├─────────────────────────────────┤
│  IntelliJ Platform Plugin API   │
├─────────────────────────────────┤
│   JCEF Browser Component        │
│  (Java Chromium Embedded)       │
├─────────────────────────────────┤
│      React 18 Application       │
│  (app.tsx + config.tsx)         │
├─────────────────────────────────┤
│   MyBricks Designer Engine      │
│     (External CDN Scripts)      │
└─────────────────────────────────┘
```

## 📁 项目结构对比

### VS Code 版本

```
mybricks-ide-as-vscode-plugin/
├── package.json              # 项目配置和依赖
├── extension.js              # 插件主入口 (Node.js)
├── webview.js                # Webview 内容生成器
├── webview.html              # HTML 模板
└── asserts/                  # 资源文件
    ├── app.tsx               # React 主应用
    ├── config.tsx            # 设计器配置
    ├── app.css               # 样式
    └── icon.svg              # 图标
```

### JetBrains 版本

```
demo-jetbrains/
├── build.gradle.kts                          # Gradle 构建配置
├── settings.gradle.kts                       # Gradle 设置
├── gradle.properties                         # 插件元数据
├── src/main/
│   ├── kotlin/                               # Kotlin 源代码
│   │   └── com/mybricks/jetbrains/
│   │       ├── MyBricksToolWindowFactory.kt  # 工具窗口
│   │       └── actions/
│   │           └── OpenMyBricksAction.kt     # 动作类
│   └── resources/                            # 资源文件
│       ├── META-INF/plugin.xml               # 插件配置
│       ├── webview/                          # Web 资源
│       │   ├── index.html
│       │   ├── app.tsx
│       │   ├── config.tsx
│       │   └── app.css
│       └── icons/pluginIcon.svg
└── gradle/wrapper/                           # Gradle Wrapper
```

## 🔌 插件注册和激活

### VS Code 版本

**package.json 配置：**
```json
{
  "activationEvents": ["onStartupFinished"],
  "contributes": {
    "commands": [{
      "command": "mybricks.openIDE",
      "title": "Open MyBricks IDE"
    }],
    "viewsContainers": {
      "activitybar": [{
        "id": "mybricks-sidebar",
        "title": "MyBricks"
      }]
    }
  }
}
```

**激活代码（extension.js）：**
```javascript
function activate(context) {
    // 注册命令
    const openWebCommand = vscode.commands.registerCommand(
        'mybricks.openIDE', 
        () => { /* ... */ }
    );
    
    // 注册 webview provider
    vscode.window.registerWebviewViewProvider(
        'mybricks.ide', 
        provider
    );
}
```

### JetBrains 版本

**plugin.xml 配置：**
```xml
<idea-plugin>
  <extensions defaultExtensionNs="com.intellij">
    <toolWindow 
        id="MyBricks" 
        factoryClass="com.mybricks.jetbrains.MyBricksToolWindowFactory"/>
  </extensions>
  
  <actions>
    <action id="MyBricks.OpenIDE"
            class="com.mybricks.jetbrains.actions.OpenMyBricksAction">
      <add-to-group group-id="MainToolBar" anchor="last"/>
    </action>
  </actions>
</idea-plugin>
```

**工厂类（Kotlin）：**
```kotlin
class MyBricksToolWindowFactory : ToolWindowFactory {
    override fun createToolWindowContent(
        project: Project, 
        toolWindow: ToolWindow
    ) {
        val browser = JBCefBrowser()
        browser.loadHTML(htmlContent)
        // ...
    }
}
```

## 🌐 Webview 实现对比

### VS Code 版本

- **API**: VS Code Webview API
- **沙箱**: 严格的内容安全策略 (CSP)
- **资源加载**: 通过 `webview.asWebviewUri()` 转换路径
- **消息通信**: `webview.postMessage()` / `window.addEventListener('message')`
- **生命周期**: `retainContextWhenHidden: true` 保持状态

```javascript
// 创建 webview panel
currentPanel = vscode.window.createWebviewPanel(
    'mybricksWeb',
    'MyBricks',
    vscode.ViewColumn.One,
    {
        enableScripts: true,
        retainContextWhenHidden: true,
        localResourceRoots: [extensionUri]
    }
);

// 设置 HTML
currentPanel.webview.html = getWebviewContent(
    currentPanel.webview, 
    extensionUri
);

// 消息通信
currentPanel.webview.onDidReceiveMessage(message => {
    // 处理消息
});
```

### JetBrains 版本

- **API**: JCEF (Java Chromium Embedded Framework)
- **沙箱**: CSP 由 HTML 内部定义
- **资源加载**: 直接内联或使用 CDN
- **消息通信**: JavaScript Bridge（可选）
- **生命周期**: 由 Tool Window 管理

```kotlin
// 创建 JCEF 浏览器
val browser = JBCefBrowser()

// 加载 HTML（内联方式）
val htmlContent = loadHtmlContent()
browser.loadHTML(htmlContent)

// 获取组件
val component = browser.component

// 添加到工具窗口
val content = ContentFactory.getInstance()
    .createContent(component, "", false)
toolWindow.contentManager.addContent(content)
```

## 💾 数据存储对比

### VS Code 版本

**存储位置：**
- Webview 的 localStorage（浏览器存储）
- 可选：工作区状态或全局状态

**优点：**
- 简单直接
- 前端代码可直接访问

**缺点：**
- 受浏览器存储限制
- 清除缓存会丢失数据

### JetBrains 版本

**存储位置：**
- JCEF 的 localStorage
- 可选：使用 PersistentStateComponent 存储到文件

**优点：**
- 与 VS Code 版本保持一致的体验
- 可扩展到文件系统存储

**缺点：**
- JCEF localStorage 位置不太透明

**改进方向：**
```kotlin
// 可以实现文件系统存储
class MyBricksDataService : PersistentStateComponent<MyBricksState> {
    override fun getState(): MyBricksState {
        // 读取项目数据
    }
    
    override fun loadState(state: MyBricksState) {
        // 保存项目数据
    }
}
```

## 🎨 UI 集成对比

### VS Code 版本

**集成点：**
1. 活动栏（Activity Bar）侧边图标
2. 侧边栏（Sidebar）webview
3. 编辑器区域（Editor）webview panel
4. 命令面板命令

**UI 特点：**
- 采用 VS Code 主题颜色变量
- 自动适配明暗主题
- 无缝集成到 VS Code UI

### JetBrains 版本

**集成点：**
1. 工具窗口（Tool Window）
2. 主工具栏（Main Toolbar）按钮
3. 菜单系统（可扩展）
4. 动作系统（Action System）

**UI 特点：**
- 遵循 JetBrains UI 设计规范
- 支持主题切换
- 可拖拽到不同位置

## ⚙️ 构建和发布对比

### VS Code 版本

**构建：**
```bash
# 打包插件
vsce package

# 生成 .vsix 文件
mybricks-webview-0.0.1.vsix
```

**发布：**
- VS Code Marketplace
- 或企业内部市场
- 手动安装 .vsix 文件

**依赖：**
- 需要 `vsce` (Visual Studio Code Extensions) CLI

### JetBrains 版本

**构建：**
```bash
# 构建插件
./gradlew buildPlugin

# 生成 .zip 文件
build/distributions/mybricks-jetbrains-plugin-0.0.1.zip
```

**发布：**
- JetBrains Marketplace
- 或企业内部市场
- 手动安装 .zip 文件

**依赖：**
- Gradle 8.5+
- JDK 17+
- IntelliJ Platform Plugin SDK

## 📦 依赖管理对比

### VS Code 版本

**package.json：**
```json
{
  "engines": {
    "vscode": "^1.60.0"
  },
  "devDependencies": {
    "@types/vscode": "^1.60.0"
  }
}
```

**外部依赖：**
- React、Ant Design 等通过 CDN 加载
- 无需打包到插件中

### JetBrains 版本

**build.gradle.kts：**
```kotlin
dependencies {
    implementation("org.jetbrains.kotlin:kotlin-stdlib")
}

intellij {
    version.set("2023.2")
    type.set("IC")
}
```

**外部依赖：**
- React、Ant Design 等通过 CDN 加载
- Web 资源嵌入到插件中

## 🧪 测试和调试对比

### VS Code 版本

**运行调试：**
1. 按 F5 启动扩展开发主机
2. 在新窗口中测试插件
3. 使用 Chrome DevTools 调试 webview

**日志：**
- 开发者工具控制台
- 输出面板（Output Panel）

### JetBrains 版本

**运行调试：**
1. `./gradlew runIde` 启动测试 IDE
2. 在 IntelliJ IDEA 中设置断点
3. 使用 JCEF DevTools 调试网页

**日志：**
- IDE 日志文件
- Run 工具窗口输出

## 🌍 跨平台支持

### VS Code 版本

**支持平台：**
- ✅ Windows
- ✅ macOS
- ✅ Linux

**限制：**
- 依赖 Electron 和 Node.js

### JetBrains 版本

**支持平台：**
- ✅ Windows
- ✅ macOS
- ✅ Linux

**限制：**
- 需要 JDK 17+
- JCEF 在某些 Linux 环境可能有兼容性问题

## 📊 功能对比矩阵

| 功能 | VS Code | JetBrains | 说明 |
|------|---------|-----------|------|
| 可视化设计器 | ✅ | ✅ | 完全相同 |
| 小程序开发 | ✅ | ✅ | 完全相同 |
| 组件库 | ✅ | ✅ | 完全相同 |
| 本地存储 | ✅ | ✅ | 都使用 localStorage |
| 侧边栏集成 | ✅ | ✅ | UI 位置略有不同 |
| 工具栏按钮 | ✅ | ✅ | 实现方式不同 |
| 文件打开 | ✅ | 🔄 | VS Code 已实现，JetBrains 待实现 |
| 主题适配 | ✅ | 🔄 | 基本支持，可优化 |
| 性能 | ⚡ | ⚡ | 相当 |
| 启动速度 | 快 | 中等 | JetBrains 插件启动稍慢 |

图例：
- ✅ 已实现
- 🔄 部分实现或可改进
- ❌ 未实现
- ⚡ 性能指标

## 🔮 未来改进方向

### VS Code 版本

1. **文件系统集成**
   - 将项目保存为 .json 文件
   - 支持 Git 版本控制

2. **调试集成**
   - 连接到真实设备调试
   - 小程序开发者工具集成

3. **代码生成**
   - 直接生成 Taro 项目文件
   - 支持自定义模板

### JetBrains 版本

1. **文件系统集成**
   - 使用 VirtualFileSystem API
   - 支持项目树视图

2. **IDE 功能集成**
   - 代码导航
   - 重构支持
   - 语法高亮

3. **更好的主题适配**
   - 读取 IDE 主题颜色
   - 动态应用到设计器

4. **性能优化**
   - 延迟加载
   - 资源缓存

## 💡 开发建议

### 选择 VS Code 版本，如果：
- 您的团队主要使用 VS Code
- 需要快速原型开发
- 偏好 JavaScript/Node.js 生态

### 选择 JetBrains 版本，如果：
- 您的团队使用 JetBrains IDE
- 需要与 Java/Kotlin 项目集成
- 需要 IntelliJ Platform 的高级功能

### 同时维护两个版本：
- 核心 Web 代码（React 应用）保持一致
- 分别适配各自的插件 API
- 共享配置和组件库

## 📈 性能对比

| 指标 | VS Code | JetBrains | 备注 |
|------|---------|-----------|------|
| 插件大小 | ~50 KB | ~200 KB | 不含 node_modules/依赖 |
| 首次启动 | 1-2 秒 | 2-3 秒 | 包括加载 CDN 资源 |
| 内存占用 | 50-100 MB | 100-150 MB | 取决于项目大小 |
| CPU 使用 | 低 | 低 | 空闲时 |
| 响应速度 | 快 | 快 | UI 操作 |

## 🎯 总结

两个版本的核心功能完全相同，主要差异在于：

1. **技术栈**: JavaScript vs Kotlin
2. **插件 API**: VS Code Extension API vs IntelliJ Platform SDK
3. **Webview**: VS Code Webview vs JCEF
4. **构建系统**: npm vs Gradle

选择哪个版本取决于您的开发环境和团队偏好。两个版本都提供了完整的 MyBricks 可视化设计体验，可以根据实际需求进行选择和定制。

