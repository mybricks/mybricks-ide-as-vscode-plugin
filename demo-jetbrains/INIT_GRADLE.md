# Gradle Wrapper 初始化指南

## 问题说明

JetBrains 插件项目需要 Gradle Wrapper 才能运行。由于 `gradle-wrapper.jar` 是二进制文件，需要单独生成。

## 🚀 快速解决方案

### 方案 1：使用临时 Gradle（推荐）

```bash
cd demo-jetbrains

# 1. 下载 Gradle 8.5（仅用于生成 wrapper）
curl -L https://services.gradle.org/distributions/gradle-8.5-bin.zip -o /tmp/gradle-8.5.zip

# 2. 解压
unzip -q /tmp/gradle-8.5.zip -d /tmp

# 3. 使用临时 Gradle 生成 wrapper
/tmp/gradle-8.5/bin/gradle wrapper --gradle-version 8.5

# 4. 清理（可选）
rm -rf /tmp/gradle-8.5 /tmp/gradle-8.5.zip

# 5. 现在可以运行了
./gradlew runIde
```

### 方案 2：使用 SDKMAN（适合长期开发）

```bash
# 1. 安装 SDKMAN
curl -s "https://get.sdkman.io" | bash
source "$HOME/.sdkman/bin/sdkman-init.sh"

# 2. 安装 Gradle
sdk install gradle 8.5

# 3. 生成 wrapper
cd demo-jetbrains
gradle wrapper --gradle-version 8.5

# 4. 运行
./gradlew runIde
```

### 方案 3：从已有项目复制（如果有其他 Gradle 项目）

```bash
# 如果您的其他项目已经有 gradle-wrapper.jar
cp /path/to/other-gradle-project/gradle/wrapper/gradle-wrapper.jar \
   demo-jetbrains/gradle/wrapper/

cd demo-jetbrains
./gradlew runIde
```

## 📝 执行步骤（推荐方案 1）

我为您准备了一个自动化脚本：

