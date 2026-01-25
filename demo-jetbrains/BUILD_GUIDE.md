# MyBricks JetBrains 插件构建指南

本文档将指导您如何构建 MyBricks JetBrains 插件并生成可分发的插件包。

## 构建问题修复

### 问题：插件描述验证失败

如果遇到以下错误：
```
[gradle-intellij-plugin :verifyPlugin] Invalid plugin descriptor 'description'. 
The plugin description is shorter than 40 characters and/or the plugin description contains non-Latin characters.
```

**原因**：JetBrains 插件市场要求：
- 描述必须至少 40 个字符
- 描述必须使用拉丁字符（英文），不能包含中文等非拉丁字符

**解决方案**：已在 `src/main/resources/META-INF/plugin.xml` 中将描述改为纯英文版本。

## 构建方法

### 方法 1：使用构建脚本（推荐）

```bash
cd demo-jetbrains
./build-plugin.sh
```

这个脚本会自动执行以下步骤：
1. 清理旧的构建产物
2. 编译 Kotlin 代码
3. 构建插件包
4. 验证插件
5. 显示构建产物的位置

### 方法 2：使用 Gradle 命令

```bash
cd demo-jetbrains
./gradlew buildPlugin
```

如果只想验证而不构建完整插件：
```bash
./gradlew verifyPlugin
```

### 方法 3：在 IDE 中构建

1. 在 IDEA 中打开 `demo-jetbrains` 项目
2. 打开 Gradle 工具窗口（View → Tool Windows → Gradle）
3. 展开 `mybricks-jetbrains-plugin → Tasks → intellij`
4. 双击 `buildPlugin` 任务

## 构建产物

构建成功后，插件包会生成在以下位置：

```
demo-jetbrains/build/distributions/mybricks-jetbrains-plugin-0.0.1.zip
```

这个 ZIP 文件就是可以分发和安装的插件包。

## 安装构建的插件

### 方法 1：从本地文件安装

1. 打开 IDEA
2. 进入 `Settings/Preferences → Plugins`
3. 点击齿轮图标 ⚙️
4. 选择 `Install Plugin from Disk...`
5. 选择生成的 ZIP 文件
6. 重启 IDE

### 方法 2：拖放安装

直接将生成的 ZIP 文件拖放到 IDEA 窗口中，然后按提示重启。

## 发布到 JetBrains Marketplace

如果要发布到官方插件市场：

1. **准备账号**
   - 在 https://plugins.jetbrains.com/ 注册账号
   - 创建插件仓库

2. **配置发布令牌**
   
   在 `gradle.properties` 或环境变量中设置：
   ```properties
   publishToken=YOUR_TOKEN_HERE
   ```

3. **发布插件**
   ```bash
   ./gradlew publishPlugin
   ```

## 版本更新

### 更新插件版本号

要更新插件版本，修改 `build.gradle.kts` 中的版本号：

```kotlin
version = "0.0.2"  // 更新版本号
```

### 更新 IDE 兼容性版本

如果遇到版本不兼容错误，修改 `build.gradle.kts` 中的版本范围：

```kotlin
patchPluginXml {
    sinceBuild.set("232")      // 最低支持版本（2023.2）
    untilBuild.set("261.*")    // 最高支持版本（2026.1）
}
```

版本号对应关系：
- `232` = 2023.2
- `233` = 2023.3
- `241` = 2024.1
- `242` = 2024.2
- `243` = 2024.3
- `251` = 2025.1
- `252` = 2025.2
- `253` = 2025.3
- `261` = 2026.1

然后重新构建。

## 常见构建错误

### 1. Java 环境未配置

**错误**：`Unable to locate a Java Runtime`

**解决方案**：
```bash
# 设置 JAVA_HOME
export JAVA_HOME=$(/usr/libexec/java_home -v 17)

# 或者安装 JDK 17
brew install openjdk@17
```

### 2. Gradle Wrapper 不可执行

**错误**：`Permission denied: ./gradlew`

**解决方案**：
```bash
chmod +x gradlew
```

### 3. 网络问题导致依赖下载失败

**解决方案**：
- 检查网络连接
- 配置代理（如果需要）
- 在 `gradle.properties` 中添加：
  ```properties
  systemProp.http.proxyHost=your.proxy.host
  systemProp.http.proxyPort=8080
  systemProp.https.proxyHost=your.proxy.host
  systemProp.https.proxyPort=8080
  ```

### 4. 内存不足

**错误**：`OutOfMemoryError`

**解决方案**：在 `gradle.properties` 中增加内存：
```properties
org.gradle.jvmargs=-Xmx4096m -XX:MaxMetaspaceSize=1024m
```

## 构建优化

### 使用配置缓存

已在 `build.gradle.kts` 中启用：
```kotlin
tasks.withType<Task> {
    outputs.cacheIf { true }
}
```

### 并行构建

在 `gradle.properties` 中添加：
```properties
org.gradle.parallel=true
org.gradle.workers.max=4
```

### 清理构建缓存

如果遇到奇怪的构建问题：
```bash
./gradlew clean
rm -rf .gradle
./gradlew buildPlugin
```

## 验证插件质量

### 运行插件验证器

```bash
./gradlew verifyPlugin
```

这会检查：
- 插件描述格式
- 兼容性配置
- 依赖项声明
- XML 配置文件语法

### 运行插件测试

```bash
./gradlew test
```

## 调试构建过程

### 查看详细日志

```bash
./gradlew buildPlugin --info
```

### 查看调试日志

```bash
./gradlew buildPlugin --debug
```

### 查看构建扫描

```bash
./gradlew buildPlugin --scan
```

这会生成一个详细的构建报告 URL。

## 自动化构建

### CI/CD 集成示例（GitHub Actions）

```yaml
name: Build Plugin

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Set up JDK 17
      uses: actions/setup-java@v3
      with:
        java-version: '17'
        distribution: 'temurin'
        
    - name: Grant execute permission for gradlew
      run: chmod +x demo-jetbrains/gradlew
      
    - name: Build plugin
      run: |
        cd demo-jetbrains
        ./gradlew buildPlugin
        
    - name: Upload artifact
      uses: actions/upload-artifact@v3
      with:
        name: plugin-artifact
        path: demo-jetbrains/build/distributions/*.zip
```

## 参考资料

- [JetBrains Plugin Development - Building Plugins](https://plugins.jetbrains.com/docs/intellij/publishing-plugin.html)
- [Gradle IntelliJ Plugin Documentation](https://github.com/JetBrains/gradle-intellij-plugin)
- [Plugin Structure](https://plugins.jetbrains.com/docs/intellij/plugin-structure.html)
- [Plugin Compatibility](https://plugins.jetbrains.com/docs/intellij/plugin-compatibility.html)

---

构建愉快！如有问题，请查看 [DEBUG_GUIDE.md](DEBUG_GUIDE.md)。
