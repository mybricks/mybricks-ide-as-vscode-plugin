# MyBricks JetBrains 插件 - 项目概览

## 📋 项目信息

- **项目名称**: MyBricks.ai JetBrains Plugin
- **版本**: 0.0.1
- **类型**: JetBrains IDE 插件
- **开发语言**: Kotlin
- **构建工具**: Gradle 8.5
- **基于**: MyBricks VS Code 插件项目

## 🎯 项目目标

将 MyBricks.ai 可视化开发平台集成到 JetBrains 系列 IDE 中（IntelliJ IDEA、WebStorm、PyCharm 等），为使用 JetBrains IDE 的开发者提供与 VS Code 版本相同的可视化小程序/H5 页面开发能力。

## 📂 完整项目结构

```
demo-jetbrains/
│
├── 📝 文档文件
│   ├── README.md                 # 详细项目说明（英文）
│   ├── 快速启动.md               # 快速启动指南（中文）
│   ├── QUICK_START.md            # 快速启动指南（英文）
│   ├── COMPARISON.md             # VS Code 版本对比
│   ├── PROJECT_OVERVIEW.md       # 本文件 - 项目概览
│   └── LICENSE                   # MIT 许可证
│
├── 🔧 构建配置
│   ├── build.gradle.kts          # Gradle 构建脚本
│   ├── settings.gradle.kts       # Gradle 设置
│   ├── gradle.properties         # 插件元数据和配置
│   └── .gitignore                # Git 忽略文件
│
├── 🚀 启动脚本
│   ├── gradlew                   # Gradle Wrapper (Unix/Mac)
│   ├── gradlew.bat               # Gradle Wrapper (Windows)
│   ├── setup.sh                  # 初始化脚本 (Unix/Mac)
│   └── setup.bat                 # 初始化脚本 (Windows)
│
├── 📦 Gradle Wrapper
│   └── gradle/wrapper/
│       └── gradle-wrapper.properties  # Wrapper 配置
│
└── 💻 源代码
    └── src/main/
        ├── kotlin/                                  # Kotlin 源代码
        │   └── com/mybricks/jetbrains/
        │       ├── MyBricksToolWindowFactory.kt     # 工具窗口工厂类
        │       └── actions/
        │           └── OpenMyBricksAction.kt        # 打开设计器动作
        │
        └── resources/                               # 资源文件
            ├── META-INF/
            │   └── plugin.xml                       # 插件配置文件
            │
            ├── icons/
            │   └── pluginIcon.svg                   # 插件图标 (16x16)
            │
            └── webview/                             # Web 视图资源
                ├── index.html                       # HTML 模板
                ├── app.tsx                          # React 主应用
                ├── config.tsx                       # MyBricks 设计器配置
                └── app.css                          # 样式文件
```

## 🔑 核心文件说明

### 1. Kotlin 源代码

#### `MyBricksToolWindowFactory.kt`
- **作用**: 工具窗口工厂类，负责创建和初始化 MyBricks 工具窗口
- **关键功能**:
  - 创建 JCEF 浏览器实例
  - 加载并内联 HTML、CSS、JavaScript 资源
  - 管理工具窗口生命周期

#### `OpenMyBricksAction.kt`
- **作用**: 主工具栏按钮动作类
- **关键功能**:
  - 响应工具栏按钮点击
  - 显示/激活 MyBricks 工具窗口
  - 提供快捷访问入口

### 2. 配置文件

#### `plugin.xml`
- **作用**: 插件配置清单
- **定义**:
  - 插件元信息（ID、名称、描述、供应商）
  - 工具窗口注册
  - 动作（Action）注册
  - 依赖关系
  - 版本兼容性

#### `build.gradle.kts`
- **作用**: Gradle 构建脚本
- **配置**:
  - Kotlin 插件
  - IntelliJ Platform 插件
  - 依赖管理
  - 构建任务
  - 发布配置

#### `gradle.properties`
- **作用**: 插件元数据
- **定义**:
  - 插件组、名称、版本
  - 平台类型和版本
  - 兼容性范围
  - Gradle 配置选项

### 3. Web 资源

#### `index.html`
- **作用**: HTML 模板
- **包含**:
  - React 18 和 ReactDOM
  - Babel Standalone (TSX 编译)
  - Ant Design 5
  - MyBricks Designer SDK
  - 内联占位符（CSS、JS）

#### `app.tsx`
- **作用**: React 主应用组件
- **功能**:
  - 渲染 MyBricks 设计器
  - 管理设计器状态
  - 处理保存/导出操作
  - 响应用户交互

#### `config.tsx`
- **作用**: MyBricks 设计器配置
- **配置**:
  - 组件库加载器
  - 存储（localStorage）
  - 页面元数据和内容加载器
  - 画布配置（移动端视图）
  - 交互编排配置
  - 编辑器面板配置

#### `app.css`
- **作用**: 样式文件
- **定义**:
  - IDE 布局样式
  - 工具栏样式
  - 设计器容器样式
  - 响应式布局

### 4. 图标资源

#### `pluginIcon.svg`
- **作用**: 插件图标
- **规格**: 16x16 像素 SVG
- **用途**:
  - 工具窗口标签图标
  - 工具栏按钮图标
  - 插件管理器图标

## 🛠️ 技术架构

### 分层架构

```
┌─────────────────────────────────────────────┐
│         用户界面 (JetBrains IDE)            │
├─────────────────────────────────────────────┤
│         插件层 (Kotlin)                      │
│  - MyBricksToolWindowFactory                │
│  - OpenMyBricksAction                       │
├─────────────────────────────────────────────┤
│    IntelliJ Platform Plugin API             │
│  - Tool Window API                          │
│  - Action System                            │
│  - UI Components                            │
├─────────────────────────────────────────────┤
│    JCEF (Java Chromium Embedded)            │
│  - Browser Component                        │
│  - JavaScript Bridge (可选)                 │
├─────────────────────────────────────────────┤
│         Web 应用层 (React)                   │
│  - app.tsx (主应用)                         │
│  - config.tsx (配置)                        │
├─────────────────────────────────────────────┤
│      MyBricks Designer Engine               │
│  - SPA Designer                             │
│  - Component System                         │
│  - Plugin System                            │
├─────────────────────────────────────────────┤
│         外部依赖 (CDN)                       │
│  - React 18                                 │
│  - Ant Design 5                             │
│  - Taro Component Library                   │
└─────────────────────────────────────────────┘
```

### 核心技术栈

1. **后端 (Kotlin)**
   - Kotlin 1.9.21
   - IntelliJ Platform SDK
   - JCEF (Java Chromium Embedded Framework)

2. **前端 (Web)**
   - React 18
   - TypeScript (通过 Babel)
   - Ant Design 5

3. **构建工具**
   - Gradle 8.5
   - Gradle IntelliJ Plugin 1.16.1

4. **MyBricks 相关**
   - MyBricks Designer SPA SDK
   - MyBricks HTTP Connector Plugin
   - Taro 组件库

## 🚀 快速开始

### 最快 3 步启动

```bash
# 1. 进入项目目录
cd demo-jetbrains

# 2. 运行初始化脚本（自动设置环境）
./setup.sh         # macOS/Linux
setup.bat          # Windows

# 3. 启动开发 IDE（自动完成）
# 脚本会询问是否立即运行，选择 y
```

### 手动启动步骤

```bash
# 1. 确保有 JDK 17+
java -version

# 2. 下载 Gradle Wrapper JAR（如果不存在）
curl -L https://repo1.maven.org/maven2/org/gradle/gradle-wrapper/8.5/gradle-wrapper-8.5.jar \
  -o gradle/wrapper/gradle-wrapper.jar

# 3. 赋予执行权限
chmod +x gradlew

# 4. 运行开发 IDE
./gradlew runIde
```

## 📚 文档导航

根据您的需求，选择合适的文档：

| 文档 | 适用场景 | 语言 |
|------|---------|------|
| [快速启动.md](./快速启动.md) | 快速上手，详细步骤 | 🇨🇳 中文 |
| [QUICK_START.md](./QUICK_START.md) | 快速上手，详细步骤 | 🇬🇧 English |
| [README.md](./README.md) | 完整功能说明，开发指南 | 🇬🇧 English |
| [COMPARISON.md](./COMPARISON.md) | VS Code 版本对比 | 🇬🇧 English |
| [PROJECT_OVERVIEW.md](./PROJECT_OVERVIEW.md) | 项目概览（本文件） | 🇨🇳 中文 |

## 🎯 功能特性

### 已实现功能 ✅

1. **工具窗口**
   - 右侧边栏 MyBricks 图标
   - 可拖拽位置（左/右/下）
   - 支持浮动窗口

2. **工具栏按钮**
   - 主工具栏快捷入口
   - 一键打开设计器

3. **可视化设计器**
   - 完整的 MyBricks Designer 功能
   - 拖拽式组件设计
   - 实时预览

4. **数据存储**
   - localStorage 持久化
   - 项目自动保存

5. **组件库**
   - Taro 小程序组件
   - 支持自定义组件库

### 待扩展功能 🔄

1. **文件系统集成**
   - 保存为 .json 文件
   - Git 版本控制
   - 项目树视图

2. **IDE 深度集成**
   - 代码导航
   - 语法高亮
   - 智能提示

3. **主题适配**
   - 读取 IDE 主题
   - 动态颜色应用

4. **性能优化**
   - 延迟加载
   - 资源缓存
   - 内存优化

## 🔧 构建和发布

### 开发模式

```bash
# 运行开发 IDE（热重载）
./gradlew runIde

# 编译代码
./gradlew build

# 清理构建
./gradlew clean
```

### 生产构建

```bash
# 构建插件包
./gradlew buildPlugin

# 输出位置
build/distributions/mybricks-jetbrains-plugin-0.0.1.zip

# 验证插件
./gradlew verifyPlugin
```

### 发布流程

1. **构建插件**
   ```bash
   ./gradlew buildPlugin
   ```

2. **测试插件**
   - 在多个 JetBrains IDE 中测试
   - 验证功能完整性

3. **发布到 Marketplace**
   ```bash
   # 配置环境变量
   export PUBLISH_TOKEN=your_token
   
   # 发布
   ./gradlew publishPlugin
   ```

4. **手动分发**
   - 将 .zip 文件分发给用户
   - 提供安装说明

## 🧪 测试策略

### 单元测试

```bash
# 运行测试
./gradlew test

# 测试覆盖率报告
./gradlew jacocoTestReport
```

### 集成测试

```bash
# 运行 UI 测试
./gradlew test --tests '*IntegrationTest'
```

### 手动测试

1. 启动开发 IDE
2. 测试工具窗口打开/关闭
3. 测试设计器功能
4. 测试保存/加载
5. 测试不同主题

## 📊 项目统计

- **Kotlin 代码**: 约 150 行
- **TypeScript/TSX 代码**: 约 400 行
- **配置文件**: 6 个
- **文档文件**: 6 个
- **总文件数**: 约 20 个
- **预估开发时间**: 2-3 天

## 🤝 贡献指南

### 代码规范

- Kotlin: 遵循 Kotlin 官方编码规范
- TypeScript: 使用 2 空格缩进
- 注释: 中英文混合，关键部分需要注释

### 提交规范

```
feat: 添加新功能
fix: 修复 bug
docs: 更新文档
style: 代码格式调整
refactor: 重构
test: 添加测试
chore: 构建/工具链更新
```

### 开发流程

1. Fork 项目
2. 创建功能分支
3. 提交代码
4. 创建 Pull Request
5. 代码审查
6. 合并到主分支

## 📞 联系方式

- **邮箱**: support@mybricks.ai
- **官网**: https://mybricks.ai
- **GitHub**: https://github.com/mybricks
- **文档**: https://mybricks.ai/docs

## 📄 许可证

本项目采用 MIT 许可证。详见 [LICENSE](./LICENSE) 文件。

---

**最后更新**: 2024-12
**维护者**: MyBricks Team
**版本**: 0.0.1

