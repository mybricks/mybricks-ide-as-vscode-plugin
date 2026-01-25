# JCEF 可用性检查

## 问题：工具窗口显示空白

如果测试页面仍然是空白，说明 JCEF 本身可能有问题。

## 检查步骤：

### 1️⃣ 检查 IDE 版本

在运行的测试 IDE 中：
- 菜单：**Help** → **About**
- 确认版本信息：应该是 **2023.2** 或更高

如果版本过低，JCEF 可能不可用。

### 2️⃣ 检查 Java 版本

```bash
java -version
```

应该显示：
```
openjdk version "17.0.x" 或更高
```

### 3️⃣ 查看构建日志

在运行 `./gradlew runIde` 的终端中，搜索：

**成功的标志**：
```
✅ MyBricks: HTML 内容加载成功，长度: 12345
✅ MyBricks: 页面加载完成，状态码: 200
⚠️  MyBricks: 使用测试模式，显示简单页面
```

**失败的标志**：
```
❌ MyBricks: 加载失败: ...
```

### 4️⃣ 检查 JCEF 是否在 IDE 中启用

某些 JetBrains IDE 版本可能默认禁用 JCEF。

在测试 IDE 中：
1. 打开 **Help** → **Find Action** (Cmd+Shift+A / Ctrl+Shift+A)
2. 搜索 "Registry"
3. 查找并确保以下项为 **true**：
   - `ide.browser.jcef.enabled` = true
   - `ide.browser.jcef.sandbox.enable` = false (某些情况下需要)

### 5️⃣ macOS 特定问题

如果您使用的是 macOS，可能需要：

1. **允许开发者工具**：
   ```bash
   # 在终端运行
   defaults write com.apple.security.authorization ignoreArd -bool YES
   ```

2. **检查 Gatekeeper**：
   ```bash
   # 检查是否有阻止
   spctl --status
   
   # 如果需要，临时禁用（测试用）
   sudo spctl --master-disable
   ```

### 6️⃣ 尝试最小化测试

修改 `build.gradle.kts`，添加更多调试信息：

```kotlin
tasks {
    runIde {
        jvmArgs = listOf(
            "-Djcef.debug.output=true",
            "-Dide.browser.jcef.debug.port=9222",
            "-Djb.privacy.policy.text=<!--999.999-->",
            "-Djb.consents.confirmation.enabled=false"
        )
    }
}
```

然后重新运行：
```bash
./gradlew runIde
```

### 7️⃣ 替代方案：使用 Swing 组件

如果 JCEF 确实不可用，可以临时使用 Swing 的 JEditorPane：

```kotlin
// 在 MyBricksToolWindow 类中
private val browser = JEditorPane().apply {
    contentType = "text/html"
    isEditable = false
}

init {
    browser.text = "<html><body><h1>Hello from Swing!</h1></body></html>"
}

fun getContent(): JComponent = browser
```

这至少能验证插件框架本身是否工作。

## 🆘 获取更多帮助

如果以上步骤都无法解决，请提供：

1. **IDE 版本**（Help → About 截图）
2. **Java 版本**（`java -version` 输出）
3. **macOS 版本**（如适用）
4. **运行日志**（终端输出）
5. **IDE 日志**（Help → Show Log in Finder）

发送到：support@mybricks.ai

