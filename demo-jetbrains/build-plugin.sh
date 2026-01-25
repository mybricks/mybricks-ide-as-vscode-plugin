#!/bin/bash

# MyBricks JetBrains 插件构建脚本

set -e

echo "🔨 MyBricks JetBrains 插件构建脚本"
echo "===================================="
echo ""

# 获取项目根目录
PROJECT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$PROJECT_DIR"

echo "📂 项目目录: $PROJECT_DIR"
echo ""

# 步骤 1: 清理旧的构建
echo "🧹 步骤 1/4: 清理旧的构建产物..."
./gradlew clean
echo "✅ 清理完成"
echo ""

# 步骤 2: 编译项目
echo "🔧 步骤 2/4: 编译项目..."
./gradlew compileKotlin
echo "✅ 编译完成"
echo ""

# 步骤 3: 构建插件
echo "📦 步骤 3/4: 构建插件包..."
./gradlew buildPlugin
echo "✅ 构建完成"
echo ""

# 步骤 4: 验证插件
echo "🔍 步骤 4/4: 验证插件..."
./gradlew verifyPlugin
echo "✅ 验证完成"
echo ""

# 显示结果
echo "======================================"
echo "🎉 构建成功！"
echo ""
echo "📦 插件文件位置："
echo "   $(pwd)/build/distributions/"
echo ""

# 列出生成的文件
if [ -d "build/distributions" ]; then
    echo "生成的文件："
    ls -lh build/distributions/
    echo ""
    
    # 获取文件大小
    PLUGIN_FILE=$(find build/distributions -name "*.zip" | head -1)
    if [ -n "$PLUGIN_FILE" ]; then
        FILE_SIZE=$(ls -lh "$PLUGIN_FILE" | awk '{print $5}')
        echo "✅ 插件大小: $FILE_SIZE"
        echo "✅ 文件名: $(basename $PLUGIN_FILE)"
        echo ""
    fi
fi

echo "📋 下一步："
echo "   1. 安装测试："
echo "      - 打开 IntelliJ IDEA"
echo "      - Settings → Plugins → ⚙️ → Install Plugin from Disk..."
echo "      - 选择: build/distributions/mybricks-jetbrains-plugin-0.0.1.zip"
echo ""
echo "   2. 分发："
echo "      - 将 ZIP 文件分享给用户"
echo "      - 或发布到 JetBrains Marketplace"
echo ""
echo "   3. 运行测试："
echo "      ./gradlew runIde"
echo ""

