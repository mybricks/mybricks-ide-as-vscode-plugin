#!/bin/bash

# MyBricks JetBrains 插件 - 初始化脚本
# 用于快速设置开发环境

set -e

echo "🚀 MyBricks JetBrains 插件初始化脚本"
echo "======================================"
echo ""

# 检查 Java 版本
echo "📋 检查 Java 环境..."
if command -v java &> /dev/null; then
    JAVA_VERSION=$(java -version 2>&1 | awk -F '"' '/version/ {print $2}' | cut -d'.' -f1)
    echo "✅ 检测到 Java 版本: $(java -version 2>&1 | head -n 1)"
    
    if [ "$JAVA_VERSION" -lt 17 ]; then
        echo "⚠️  警告: 需要 Java 17 或更高版本"
        echo "   当前版本过低，请升级 Java"
        echo "   下载地址: https://adoptium.net/"
        exit 1
    fi
else
    echo "❌ 错误: 未检测到 Java"
    echo "   请先安装 JDK 17 或更高版本"
    echo "   下载地址: https://adoptium.net/"
    exit 1
fi

echo ""

# 检查 gradle-wrapper.jar 是否存在
echo "📦 检查 Gradle Wrapper..."
if [ ! -f "gradle/wrapper/gradle-wrapper.jar" ]; then
    echo "⚠️  gradle-wrapper.jar 不存在"
    echo ""
    echo "正在尝试使用 Gradle 生成 Wrapper..."
    echo ""
    
    # 检查是否安装了系统 Gradle
    if command -v gradle &> /dev/null; then
        echo "✅ 检测到系统 Gradle，正在生成 Wrapper..."
        gradle wrapper --gradle-version 8.5
        
        if [ -f "gradle/wrapper/gradle-wrapper.jar" ]; then
            echo "✅ Gradle Wrapper 生成成功"
        else
            echo "❌ 生成失败"
            exit 1
        fi
    else
        echo "❌ 错误: 未检测到系统 Gradle"
        echo ""
        echo "请选择以下方式之一："
        echo ""
        echo "方式 1: 安装 Gradle 后运行此脚本"
        echo "  brew install gradle     # macOS"
        echo "  sudo apt install gradle # Ubuntu/Debian"
        echo ""
        echo "方式 2: 手动下载 Gradle 并生成 Wrapper"
        echo "  访问: https://gradle.org/releases/"
        echo "  下载 Gradle 8.5"
        echo "  解压后运行: /path/to/gradle-8.5/bin/gradle wrapper"
        echo ""
        echo "方式 3: 使用 SDKMAN"
        echo "  curl -s https://get.sdkman.io | bash"
        echo "  sdk install gradle 8.5"
        echo "  ./setup.sh"
        echo ""
        exit 1
    fi
else
    # 检查文件大小，确保不是错误文件
    FILE_SIZE=$(wc -c < "gradle/wrapper/gradle-wrapper.jar")
    if [ "$FILE_SIZE" -lt 10000 ]; then
        echo "⚠️  检测到 gradle-wrapper.jar 文件异常（太小）"
        echo "   删除并重新生成..."
        rm -f gradle/wrapper/gradle-wrapper.jar
        
        if command -v gradle &> /dev/null; then
            gradle wrapper --gradle-version 8.5
            echo "✅ Gradle Wrapper 重新生成成功"
        else
            echo "❌ 需要系统 Gradle 来生成 Wrapper"
            echo "   请安装 Gradle: brew install gradle (macOS)"
            exit 1
        fi
    else
        echo "✅ Gradle Wrapper 已存在（$(($FILE_SIZE / 1024)) KB）"
    fi
fi

echo ""

# 确保 gradlew 有执行权限
echo "🔧 设置执行权限..."
chmod +x gradlew
echo "✅ gradlew 已设置为可执行"

echo ""

# 询问是否立即运行
echo "✨ 初始化完成！"
echo ""
echo "接下来您可以："
echo "  1. 运行开发 IDE:   ./gradlew runIde"
echo "  2. 构建插件:       ./gradlew buildPlugin"
echo "  3. 查看所有任务:   ./gradlew tasks"
echo ""

read -p "是否现在运行开发 IDE？(y/n) " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo ""
    echo "🚀 正在启动开发 IDE..."
    echo "   首次运行会下载依赖，可能需要 5-10 分钟，请耐心等待..."
    echo ""
    ./gradlew runIde
else
    echo ""
    echo "👋 初始化完成！要运行插件，请执行："
    echo "   ./gradlew runIde"
    echo ""
fi
