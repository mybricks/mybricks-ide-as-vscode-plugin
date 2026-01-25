#!/bin/bash

# 自动下载并使用临时 Gradle 生成 Wrapper
# 这个脚本不需要系统安装 Gradle

set -e

echo "🚀 自动初始化 Gradle Wrapper"
echo "================================"
echo ""

# 检查 Java
if ! command -v java &> /dev/null; then
    echo "❌ 错误: 需要 Java 17+"
    exit 1
fi

echo "✅ Java 版本: $(java -version 2>&1 | head -n 1)"
echo ""

# 设置变量
GRADLE_VERSION="8.5"
GRADLE_ZIP="/tmp/gradle-${GRADLE_VERSION}.zip"
GRADLE_DIR="/tmp/gradle-${GRADLE_VERSION}"

# 下载 Gradle
if [ ! -f "$GRADLE_ZIP" ]; then
    echo "📥 下载 Gradle ${GRADLE_VERSION}..."
    curl -L "https://services.gradle.org/distributions/gradle-${GRADLE_VERSION}-bin.zip" -o "$GRADLE_ZIP"
    echo "✅ 下载完成"
else
    echo "✅ 使用已缓存的 Gradle"
fi

echo ""

# 解压
if [ ! -d "$GRADLE_DIR" ]; then
    echo "📦 解压 Gradle..."
    unzip -q "$GRADLE_ZIP" -d /tmp
    echo "✅ 解压完成"
else
    echo "✅ 使用已解压的 Gradle"
fi

echo ""

# 生成 wrapper
echo "🔧 生成 Gradle Wrapper..."
"$GRADLE_DIR/bin/gradle" wrapper --gradle-version ${GRADLE_VERSION}

if [ -f "gradle/wrapper/gradle-wrapper.jar" ]; then
    FILE_SIZE=$(wc -c < "gradle/wrapper/gradle-wrapper.jar")
    echo "✅ Wrapper 生成成功（$(($FILE_SIZE / 1024)) KB）"
else
    echo "❌ Wrapper 生成失败"
    exit 1
fi

echo ""

# 设置权限
chmod +x gradlew
echo "✅ 设置执行权限"

echo ""
echo "🎉 初始化完成！"
echo ""
echo "临时文件已保留在 /tmp，如需清理："
echo "  rm -rf $GRADLE_DIR $GRADLE_ZIP"
echo ""
echo "现在可以运行："
echo "  ./gradlew runIde"
echo ""

# 询问是否运行
read -p "是否现在运行开发 IDE？(y/n) " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo ""
    echo "🚀 正在启动开发 IDE..."
    echo "   首次运行会下载依赖，可能需要 5-10 分钟..."
    echo ""
    ./gradlew runIde
fi

