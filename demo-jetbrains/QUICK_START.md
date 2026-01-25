# MyBricks JetBrains 插件 - 快速启动指南

## 🚀 快速开始

### 第一步：安装依赖

确保您的系统已安装：

- **JDK 17 或更高版本**
  ```bash
  java -version
  # 应该显示版本 17 或更高
  ```

- **Gradle 8.5 或更高版本**（可选，项目自带 Gradle Wrapper）
  ```bash
  gradle -version
  ```

### 第二步：初始化 Gradle Wrapper（首次运行）

如果 `gradle/wrapper/gradle-wrapper.jar` 不存在，需要先生成：

```bash
cd demo-jetbrains

# 使用系统 Gradle 初始化 wrapper
gradle wrapper --gradle-version 8.5
```

**或者**，如果您已经有 Gradle Wrapper，可以直接使用：

```bash
./gradlew wrapper
```

### 第三步：运行插件（开发模式）

在包含插件的新 IDE 实例中运行插件：

```bash
./gradlew runIde
```

这将：
1. 下载必要的依赖
2. 编译 Kotlin 代码
3. 启动一个包含插件的 IntelliJ IDEA 实例

### 第四步：使用插件

在启动的 IDE 中：

1. **打开工具窗口**
   - 点击右侧边栏的 "MyBricks" 图标
   - 或使用菜单：`View` → `Tool Windows` → `MyBricks`

2. **使用工具栏按钮**
   - 点击主工具栏右侧的 MyBricks 图标

3. **开始设计**
   - 在设计器中创建页面
   - 拖拽组件到画布
   - 配置组件属性
   - 保存项目

## 🔨 构建插件

构建可分发的插件包：

```bash
./gradlew buildPlugin
```

生成的插件 ZIP 文件位于：`build/distributions/mybricks-jetbrains-plugin-0.0.1.zip`

## 📦 安装到 IDE

### 方法 1：从本地安装构建的插件

1. 构建插件（见上方）
2. 打开 IntelliJ IDEA / WebStorm / PyCharm 等
3. 进入 `Settings/Preferences` → `Plugins`
4. 点击 `⚙️` → `Install Plugin from Disk...`
5. 选择 `build/distributions/*.zip`
6. 重启 IDE

### 方法 2：在开发模式下运行（推荐用于测试）

```bash
./gradlew runIde
```

## 🧪 测试和调试

### 运行测试

```bash
./gradlew test
```

### 调试插件

1. 在 IntelliJ IDEA 中打开项目
2. 创建一个新的 Gradle Run Configuration
3. 任务选择：`runIde`
4. 以调试模式运行

### 查看日志

在测试 IDE 实例中：
- macOS: `Help` → `Show Log in Finder`
- Windows: `Help` → `Show Log in Explorer`
- Linux: `Help` → `Show Log in Files`

## 🛠️ 常用 Gradle 任务

```bash
# 清理构建
./gradlew clean

# 编译代码
./gradlew build

# 运行 IDE（开发模式）
./gradlew runIde

# 构建插件包
./gradlew buildPlugin

# 发布插件（需要配置 token）
./gradlew publishPlugin

# 验证插件
./gradlew verifyPlugin

# 查看所有任务
./gradlew tasks
```

## 📁 项目结构

```
demo-jetbrains/
├── src/main/
│   ├── kotlin/               # Kotlin 源代码
│   │   └── com/mybricks/jetbrains/
│   │       ├── MyBricksToolWindowFactory.kt
│   │       └── actions/
│   │           └── OpenMyBricksAction.kt
│   └── resources/            # 资源文件
│       ├── META-INF/
│       │   └── plugin.xml    # 插件配置
│       ├── webview/          # Web 视图
│       │   ├── index.html
│       │   ├── app.tsx
│       │   ├── config.tsx
│       │   └── app.css
│       └── icons/
│           └── pluginIcon.svg
├── build.gradle.kts          # Gradle 构建脚本
├── settings.gradle.kts       # Gradle 设置
└── gradle.properties         # 插件元数据
```

## ⚠️ 常见问题

### 问题 1：`gradle-wrapper.jar` 不存在

**解决方案：**
```bash
gradle wrapper --gradle-version 8.5
```

### 问题 2：JCEF 浏览器显示空白

**可能原因：**
- IDE 版本过低（需要 2020.2+）
- JDK 版本不兼容（需要 17+）

**解决方案：**
- 升级 IDE 到最新版本
- 确保使用 JDK 17 或更高版本

### 问题 3：无法加载外部资源

**可能原因：**
- 网络连接问题
- Content Security Policy 限制

**解决方案：**
- 检查网络连接
- 查看浏览器控制台错误信息

### 问题 4：插件无法加载

**解决方案：**
1. 检查 `plugin.xml` 配置
2. 确保 `sinceBuild` 和 `untilBuild` 版本正确
3. 查看 IDE 日志文件

## 🎯 下一步

- 阅读 [README.md](./README.md) 了解详细功能
- 查看 [JetBrains Platform SDK 文档](https://plugins.jetbrains.com/docs/intellij/)
- 探索 [MyBricks 官网](https://mybricks.ai)

## 💡 提示

- 首次运行 `./gradlew runIde` 会下载大量依赖，可能需要几分钟
- 开发过程中，建议使用 `./gradlew runIde --offline` 加快启动速度
- 修改代码后，需要重新运行 `./gradlew runIde` 才能看到效果

## 📞 需要帮助？

- 📧 邮箱: support@mybricks.ai
- 🌐 官网: https://mybricks.ai
- 📚 文档: [JetBrains Plugin Development](https://plugins.jetbrains.com/docs/intellij/)

祝您使用愉快！🎉

