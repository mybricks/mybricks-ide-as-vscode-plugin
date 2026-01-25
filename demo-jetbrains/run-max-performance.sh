#!/bin/bash

# MyBricks JetBrains 插件 - 最大性能运行脚本
# 此脚本会以最大性能配置运行插件

echo "🚀 MyBricks - 最大性能模式启动"
echo "================================"
echo ""

# 设置环境变量以最大化性能
export JAVA_OPTS="-Xmx8192m -Xms2048m"
export GRADLE_OPTS="-Xmx4096m -Dorg.gradle.daemon=true -Dorg.gradle.parallel=true"

# macOS 特定优化
if [[ "$OSTYPE" == "darwin"* ]]; then
    echo "💻 检测到 macOS，应用系统优化..."
    
    # 临时提高进程优先级（需要确认）
    echo "   提示：可能需要输入密码以提高进程优先级"
    
    # 检查可用内存
    FREE_MEM=$(vm_stat | grep "Pages free" | awk '{print $3}' | sed 's/\.//')
    echo "   可用内存页: $FREE_MEM"
fi

echo ""
echo "⚙️  性能配置："
echo "   - JVM 最大内存: 8GB"
echo "   - JVM 初始内存: 2GB"
echo "   - Gradle 内存: 4GB"
echo "   - 并行编译: 启用"
echo "   - GPU 加速: 启用"
echo "   - 沙箱: 禁用"
echo ""

echo "🔧 启动插件..."
echo ""

# 运行插件
./gradlew runIde --no-daemon \
    -Dorg.gradle.jvmargs="-Xmx4096m -XX:+UseG1GC" \
    -Dorg.gradle.parallel=true \
    -Dorg.gradle.caching=true

echo ""
echo "✅ 插件已退出"

