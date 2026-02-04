# MyBricks IDE - VSCode 插件版

<div align="center">

**将 MyBricks.ai 开发平台无缝集成到 VSCode 中**

[![VSCode](https://img.shields.io/badge/VSCode-1.60.0+-007ACC?logo=visual-studio-code)](https://code.visualstudio.com/)
[![MyBricks](https://img.shields.io/badge/MyBricks-3.9.836-4CAF50)](https://mybricks.world)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

</div>

## 📖 项目简介

MyBricks IDE VSCode 插件将强大的 MyBricks.ai 可视化搭建平台完整集成到 VSCode 开发环境中，让开发者无需离开 IDE 即可进行小程序、H5 页面的可视化开发。本插件基于 MyBricks SPA Designer 引擎，提供完整的组件化搭建、可视化编辑和项目管理能力。

## ✨ MyBricks.ai 平台先进性

### 🎯 核心优势

**1. 强大的AI+无代码能力**

- 图片直接生成应用、自然语言调整
- 强大的可视化能力、即时仿真
- 模块化设计，易于扩展和集成

**2. 多技术栈支持**

- **多渲染器支持**：React、Vue、小程序（Taro）等多种渲染方案
- **跨端开发**：一次搭建，多端运行（Web、H5、小程序、鸿蒙）
- **源码生成**：支持将可视化搭建的页面导出为源代码

**3. 组件化生态**

- 丰富的官方组件库（小程序、移动端、PC端）
- 支持自定义组件库接入
- 组件插件化机制，易于扩展

**4. 数据驱动**

- 基于 JSON Schema 的页面描述协议
- 完整的页面结构和交互逻辑描述
- 支持版本管理和协同开发

**5. 开发者友好**

- 可视化编辑器 + 源码开发无缝切换
- 完整的 TypeScript 类型支持
- 插件系统支持（服务连接器、数据源等）

## 🚀 功能特性

### 核心功能

- ✅ **IDE 原生集成**：在 VSCode 中直接打开 MyBricks 设计系统
- ✅ **小程序开发**：支持小程序标签页、普通页面、对话框、WebView 等场景
- ✅ **可视化搭建**：拖拽式组件搭建，所见即所得
- ✅ **实时预览**：移动端尺寸预览（375x667），实时查看效果
- ✅ **本地存储**：项目文件本地持久化，支持离线开发
- ✅ **服务连接器**：内置 HTTP 连接器插件，轻松对接后端接口
- ✅ **交互编排**：可视化的页面交互逻辑编排
- ✅ **项目管理**：多页面管理、页面复制、删除等操作

### 技术集成

- **MyBricks SPA Designer** (v3.9.836)：核心设计器引擎
- **Ant Design 5**：UI 组件库支持
- **React 18**：现代化前端技术栈
- **Taro 小程序组件库**：完整的小程序组件生态

## 📦 安装使用

### 前置要求

- VSCode 版本 ≥ 1.60.0
- Node.js (建议 v16+)

### 快速开始

1. **克隆项目**

   ```bash
   git clone <repository-url>
   cd mybricks-ide-as-vscode-plugin
   ```

2. **安装依赖**

   ```bash
   npm install
   ```

3. **构建 Webview**

   ```bash
   # 必须先构建 webview，否则插件启动后会找不到页面资源
   npm run build:webview
   ```

4. **调试运行**
   - 在 VSCode 中打开本项目
   - 按 `F5` 键启动 "Extension" 调试
   - 在弹出的新窗口中，点击左侧 MyBricks 图标即可使用

---

## 🛠️ 调试与打包

### 1. 本地调试

- **Webview 实时开发**：运行 `npm run watch:webview`，修改 `src/webview` 代码后，在调试窗口执行 `Developer: Reload Window`。
- **插件侧开发**：修改 `src/extension` 或 `extension.js` 后，需点击调试控制台的红色刷新按钮或执行 `Developer: Reload Window`。

### 2. 插件打包

- **第一步：构建资源**
  ```bash
  npm run build:webview
  ```
- **第二步：执行打包**
  ```bash
  # 如果没安装 vsce，先全局安装：npm install -g @vscode/vsce
  vsce package
  ```
  打包后会生成 `mybricks-webview-x.x.x.vsix` 文件，可在 VSCode 中通过 "Install from VSIX" 安装。

---

## 🏗️ 项目结构

```
mybricks-ide-as-vscode-plugin/
├── src/
│   ├── extension/              # 插件侧代码 (Node.js 环境)
│   │   ├── assets/             # 插件静态资源 (图标等)
│   │   ├── webview/            # Webview 管理类 (MainManager, SidebarManager)
│   │   ├── utils/              # 插件工具函数 (导出、保存逻辑)
│   │   └── ...                 # 消息分发与生命周期钩子
│   └── webview/                # Webview 侧代码 (浏览器环境)
│       ├── pages/              # 页面入口 (主编辑器、侧边栏)
│       ├── store/              # 状态管理
│       └── utils/              # 通信工具
├── dist/                       # Webview 构建产物 (Git 已忽略)
├── extension.js                # 插件入口文件
├── vite.config.ts              # Vite 构建配置
├── .vscodeignore               # 插件打包忽略配置
├── package.json                # 项目依赖与配置
└── README.md                   # 项目文档
```

## ⚙️ 配置说明

### MyBricks 配置项 (`src/webview/pages/main/config.tsx`)

```typescript
{
  type: 'mpa',                    // 应用类型：多页应用
  plugins: [],                    // 插件列表
  comLibLoader: () => {},         // 组件库加载器
  save: () => {},                 // 保存逻辑
  pageMetaLoader: () => {},       // 页面元数据加载
  pageContentLoader: () => {},    // 页面内容加载
  geoView: {                      // 画布配置
    type: "mobile",               // 移动端预览
    width: 375,                   // 宽度
    height: 667,                  // 高度
  },
  toplView: {},                   // 交互编排配置
  editView: {},                   // 编辑器配置
}
```

### 组件库配置

默认加载小程序组件库：

```typescript
comLibLoader() {
  return Promise.resolve([
    'https://p66-ec.becukwai.com/udata/pkg/eshop/fangzhou/mybricks.normal-miniapp.taro/0.5.11/edit.js'
  ])
}
```

## 🔧 开发指南

### 本地开发

1. **启动开发环境**

   ```bash
   # 在 VSCode 中打开项目
   code .

   # 按 F5 启动调试
   # 会打开一个新的 VSCode 窗口，插件已加载
   ```

2. **修改代码**
   - `extension.js`：扩展主逻辑
   - `src/extension/`：插件侧功能模块
   - `src/webview/pages/main/App.tsx`：IDE 界面
   - `src/webview/pages/main/config.tsx`：MyBricks 配置

3. **热重载**
   - 修改 Webview 代码后，Vite 会自动重新构建（如果运行了 `npm run watch:webview`）
   - 在调试窗口使用 `Developer: Reload Window` 命令

### 添加自定义组件库

在 `src/webview/pages/main/config.tsx` 中配置：

```typescript
comLibLoader(desc) {
  return Promise.resolve([
    // 添加你的组件库 URL
    'https://your-domain.com/your-component-lib/edit.js'
  ])
}
```

### 添加自定义插件

```typescript
// src/webview/pages/main/config.tsx
import customPlugin from './plugins/custom-plugin'

{
  plugins: [
    servicePlugin(), // 服务连接器
    customPlugin(), // 你的自定义插件
  ]
}
```

## 📊 数据存储

项目数据存储在浏览器 localStorage 中：

```javascript
{
  project: {
    projectContent: {},      // 项目配置
    pageAry: [],            // 页面列表
    openedPageAry: [],      // 打开的页面
    deletedPageAry: []      // 已删除的页面
  },
  pages: [                  // 页面内容数组
    {
      id: 'page-id',
      content: {}           // 页面具体内容
    }
  ]
}
```

## 🎨 界面说明

### 主界面布局

```
┌─────────────────────────────────────────────┐
│  MyBricks          [工具栏按钮]    [*]保存  │ ← 顶部工具栏
├─────────────────────────────────────────────┤
│                                             │
│                                             │
│          MyBricks Designer                  │
│         (可视化设计器区域)                    │
│                                             │
│                                             │
└─────────────────────────────────────────────┘
```

### 侧边栏

点击左侧活动栏的 MyBricks 图标，显示快捷入口：

- 欢迎信息
- 快速访问

## 🔌 插件扩展

### 内置插件

**服务连接器插件** (`@mybricks/plugins/service`)

- 提供 HTTP 接口调用能力
- 支持 RESTful API 对接
- 可视化接口配置

### 自定义插件开发

参考 MyBricks 插件开发文档：

```typescript
export default function customPlugin(options) {
  return {
    name: '@custom/plugin-name',
    install(context) {
      // 插件初始化逻辑
    },
    // 插件方法
  }
}
```

## 📚 相关资源

- [MyBricks 官方文档](https://docs.mybricks.world)
- [MyBricks 官网](https://mybricks.world)
- [组件库开发指南](https://docs.mybricks.world/docs/comlib-dev/)
- [插件开发指南](https://docs.mybricks.world/docs/plugin-dev/)
- [VSCode 扩展开发文档](https://code.visualstudio.com/api)

## 🤝 贡献指南

欢迎贡献代码、提出问题和建议！

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request

## 📄 开源协议

本项目采用 MIT 协议开源，详见 [LICENSE](LICENSE) 文件。

## 📮 联系方式

如有任何问题或建议，欢迎通过以下方式联系：

- 提交 Issue
- 发送邮件
- 加入社区讨论

---

<div align="center">

**用 MyBricks 提升开发效率，让创意快速落地！** 🚀

</div>
