# MyBricks JetBrains 插件说明

## 📁 项目位置

JetBrains 插件项目位于：`demo-jetbrains/` 目录

## 📖 项目简介

这是根据当前 VS Code 插件项目转换而来的 JetBrains IDE 插件版本，支持 IntelliJ IDEA、WebStorm、PyCharm 等全系列 JetBrains IDE。

## 🚀 快速开始

```bash
# 1. 进入项目目录
cd demo-jetbrains

# 2. 运行初始化脚本（推荐）
./setup.sh         # macOS/Linux
setup.bat          # Windows

# 3. 或直接运行
./gradlew runIde   # macOS/Linux
gradlew.bat runIde # Windows
```

## 📚 文档导航

进入 `demo-jetbrains/` 目录后，可以查看以下文档：

| 文档 | 说明 |
|------|------|
| [快速启动.md](./demo-jetbrains/快速启动.md) | 中文快速上手指南 |
| [QUICK_START.md](./demo-jetbrains/QUICK_START.md) | English Quick Start Guide |
| [README.md](./demo-jetbrains/README.md) | 完整项目说明 |
| [COMPARISON.md](./demo-jetbrains/COMPARISON.md) | VS Code vs JetBrains 版本对比 |
| [PROJECT_OVERVIEW.md](./demo-jetbrains/PROJECT_OVERVIEW.md) | 项目概览和架构 |

## 🎯 主要特性

- ✅ 完整的 MyBricks 可视化设计器
- ✅ 支持小程序和 H5 页面开发
- ✅ 工具窗口和工具栏集成
- ✅ 丰富的组件库
- ✅ 本地数据存储
- ✅ 实时预览

## 🔧 系统要求

- **JDK**: 17 或更高版本
- **IDE**: JetBrains IDE 2023.2 或更高版本
- **网络**: 需要访问 CDN 资源

## 🆚 与 VS Code 版本对比

| 方面 | VS Code | JetBrains |
|------|---------|-----------|
| 开发语言 | JavaScript | Kotlin |
| 构建工具 | npm | Gradle |
| Web 视图 | VS Code Webview | JCEF |
| 核心功能 | ✅ 相同 | ✅ 相同 |

详细对比请查看 [COMPARISON.md](./demo-jetbrains/COMPARISON.md)

## 📦 项目结构

```
demo-jetbrains/
├── src/main/
│   ├── kotlin/               # Kotlin 源代码
│   │   └── com/mybricks/jetbrains/
│   │       ├── MyBricksToolWindowFactory.kt
│   │       └── actions/OpenMyBricksAction.kt
│   └── resources/            # 资源文件
│       ├── META-INF/plugin.xml
│       ├── webview/          # Web 视图（与 VS Code 版本相同）
│       │   ├── index.html
│       │   ├── app.tsx
│       │   ├── config.tsx
│       │   └── app.css
│       └── icons/
├── build.gradle.kts          # 构建配置
├── setup.sh / setup.bat      # 初始化脚本
└── 文档文件...
```

## 🛠️ 常用命令

```bash
# 进入项目目录
cd demo-jetbrains

# 运行开发 IDE
./gradlew runIde

# 构建插件包
./gradlew buildPlugin

# 清理构建
./gradlew clean

# 查看所有任务
./gradlew tasks
```

## 🎓 学习资源

- [JetBrains 插件开发文档](https://plugins.jetbrains.com/docs/intellij/)
- [MyBricks 官网](https://mybricks.ai)
- [Kotlin 官方文档](https://kotlinlang.org/)

## ⚠️ 注意事项

1. **Gradle Wrapper JAR**: 首次使用需要下载或生成 `gradle-wrapper.jar`，建议使用提供的 `setup.sh` 或 `setup.bat` 脚本自动完成。

2. **首次启动**: 第一次运行 `./gradlew runIde` 会下载大量依赖（约 500MB），需要 5-10 分钟，请耐心等待。

3. **网络要求**: 设计器需要加载外部 CDN 资源（React、Ant Design、MyBricks SDK 等），请确保网络畅通。

4. **JDK 版本**: 必须使用 JDK 17 或更高版本，低版本会导致插件无法运行。

## 🐛 常见问题

### Q: 提示找不到 gradle-wrapper.jar？

**A**: 运行初始化脚本：
```bash
./setup.sh         # macOS/Linux
setup.bat          # Windows
```

或手动下载：
```bash
curl -L https://repo1.maven.org/maven2/org/gradle/gradle-wrapper/8.5/gradle-wrapper-8.5.jar \
  -o demo-jetbrains/gradle/wrapper/gradle-wrapper.jar
```

### Q: JCEF 浏览器显示空白？

**A**: 
1. 确保 IDE 版本 ≥ 2023.2
2. 确保 JDK 版本 ≥ 17
3. 查看 IDE 日志文件排查错误

### Q: 首次启动很慢？

**A**: 正常现象。首次运行需要下载 IntelliJ Platform SDK 和其他依赖，大约需要 5-10 分钟。后续启动会快很多。

## 📞 获取帮助

遇到问题？查看详细文档或联系我们：

- 📧 **邮箱**: support@mybricks.ai
- 🌐 **官网**: https://mybricks.ai
- 📚 **文档**: 查看 `demo-jetbrains/` 目录下的详细文档

## 📄 许可证

MIT License - 详见 [LICENSE](./demo-jetbrains/LICENSE)

---

**祝您使用愉快！** 🎉

