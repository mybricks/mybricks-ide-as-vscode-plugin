# MyBricks.ai JetBrains Plugin

MyBricks.ai 可视化开发平台的 JetBrains IDE 插件版本，支持 IntelliJ IDEA、WebStorm、PyCharm 等全系列 JetBrains IDE。

## 功能特性

- 🎨 **可视化页面设计器** - 在 IDE 中直接使用强大的可视化设计工具
- 📱 **小程序开发** - 支持微信小程序、支付宝小程序等多平台开发
- 🌐 **H5 页面搭建** - 快速创建响应式 H5 页面
- 🧩 **丰富组件库** - 内置 Taro 组件库，支持扩展
- ⚡ **实时预览** - 所见即所得的开发体验
- 💾 **本地存储** - 项目数据自动保存到浏览器本地存储
- 🔌 **接口连接器** - 支持 HTTP 接口调用和数据绑定

## 系统要求

- IntelliJ IDEA 2023.2 或更高版本
- JDK 17 或更高版本
- 网络连接（用于加载外部资源和组件库）

## 构建插件

### 前置要求

- JDK 17+
- Gradle 8.5+

### 构建步骤

```bash
# 1. 进入项目目录
cd demo-jetbrains

# 2. 构建插件
./gradlew buildPlugin

# 3. 插件将生成在 build/distributions/ 目录下
```

### 在 IDE 中运行/调试

```bash
# 在调试模式下运行插件
./gradlew runIde
```

这将启动一个包含插件的新 IDE 实例，用于测试。

## 安装插件

### 方法 1：从本地安装

1. 构建插件（见上方构建步骤）
2. 打开 JetBrains IDE
3. 进入 `Settings/Preferences` → `Plugins` → `⚙️` → `Install Plugin from Disk...`
4. 选择 `build/distributions/*.zip` 文件
5. 重启 IDE

### 方法 2：从源码运行

```bash
./gradlew runIde
```

## 使用方法

### 打开设计器

有两种方式打开 MyBricks 设计器：

1. **工具栏按钮**
   - 点击主工具栏右侧的 MyBricks 图标

2. **工具窗口**
   - 点击右侧边栏的 "MyBricks" 标签
   - 或使用菜单 `View` → `Tool Windows` → `MyBricks`

### 基本操作

1. **创建页面**
   - 在设计器中点击 "+" 按钮
   - 选择页面类型（小程序标签页、普通页面、对话框等）

2. **添加组件**
   - 从左侧组件面板拖拽组件到画布
   - 在右侧属性面板配置组件

3. **保存项目**
   - 点击顶部工具栏的 "保存" 按钮
   - 数据将自动保存到浏览器的 localStorage

4. **导出代码**
   - 点击 "导出源码.." 按钮
   - 查看或下载生成的代码

## 项目结构

```
demo-jetbrains/
├── build.gradle.kts                    # Gradle 构建配置
├── settings.gradle.kts                 # Gradle 设置
├── gradle.properties                   # 插件元数据
├── src/main/
│   ├── kotlin/com/mybricks/jetbrains/
│   │   ├── MyBricksToolWindowFactory.kt   # 工具窗口工厂
│   │   └── actions/
│   │       └── OpenMyBricksAction.kt      # 打开设计器的动作
│   └── resources/
│       ├── META-INF/plugin.xml            # 插件配置
│       ├── webview/                       # Web 视图资源
│       │   ├── index.html                 # HTML 模板
│       │   ├── app.tsx                    # React 主应用
│       │   ├── config.tsx                 # 设计器配置
│       │   └── app.css                    # 样式文件
│       └── icons/
│           └── pluginIcon.svg             # 插件图标
└── README.md                              # 本文件
```

## 技术栈

- **JetBrains Platform SDK** - 插件开发框架
- **Kotlin** - 主要编程语言
- **JCEF (Java Chromium Embedded Framework)** - 嵌入式浏览器
- **Gradle** - 构建工具
- **React 18** - UI 框架
- **Ant Design 5** - UI 组件库
- **MyBricks Designer SDK** - 可视化设计器引擎
- **Babel Standalone** - 浏览器内 TSX 编译

## 开发说明

### 添加新功能

1. **扩展工具窗口功能**
   - 编辑 `MyBricksToolWindowFactory.kt`
   - 添加新的 UI 组件或交互

2. **添加菜单项或工具栏按钮**
   - 在 `plugin.xml` 中注册新的 action
   - 创建对应的 Action 类

3. **修改设计器配置**
   - 编辑 `resources/webview/config.tsx`
   - 配置组件库、存储等

### 调试技巧

1. **查看日志**
   - 在调试 IDE 实例中，使用 `Help` → `Show Log in Finder/Explorer`

2. **调试 Web 视图**
   - JCEF 浏览器支持远程调试
   - 在代码中启用 DevTools：
     ```kotlin
     browser.jbCefClient.addLoadHandler(...)
     ```

3. **重新加载插件**
   - 在测试 IDE 中，使用 `Ctrl+Alt+Shift+/` → `Registry`
   - 修改相关配置后重启

## 常见问题

### Q: 插件无法加载外部资源？

A: 检查网络连接和防火墙设置，确保可以访问 CDN 资源。

### Q: JCEF 浏览器显示空白？

A: 确保：
1. IDE 版本支持 JCEF（2020.2+）
2. JDK 版本正确（17+）
3. 查看控制台是否有错误信息

### Q: 如何清除保存的数据？

A: 在浏览器控制台中执行：
```javascript
localStorage.removeItem('--mybricks-file-content-')
```

## 与 VS Code 版本的差异

- **架构**：使用 Kotlin 和 JetBrains Platform SDK，而非 Node.js
- **Web 视图**：使用 JCEF 而非 VS Code Webview API
- **构建系统**：使用 Gradle 而非 npm
- **功能**：核心功能保持一致，UI 适配 JetBrains IDE 风格

## 许可证

请参考主项目的许可证。

## 相关链接

- [MyBricks 官网](https://mybricks.ai)
- [JetBrains Platform SDK 文档](https://plugins.jetbrains.com/docs/intellij/)
- [Gradle IntelliJ Plugin](https://github.com/JetBrains/gradle-intellij-plugin)

## 贡献

欢迎提交 Issue 和 Pull Request！

## 联系方式

- 邮箱: support@mybricks.ai
- 官网: https://mybricks.ai

