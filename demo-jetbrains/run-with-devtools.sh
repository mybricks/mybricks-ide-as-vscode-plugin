#!/bin/bash

# 启用 JCEF DevTools 的运行脚本

echo "🚀 启动 MyBricks 插件（DevTools 已启用）"
echo ""

# 设置 JCEF 调试标志
export JAVA_TOOL_OPTIONS="-Djcef.debug.output=true -Dide.browser.jcef.debug.port=9222"

# 运行插件
./gradlew runIde

echo ""
echo "💡 如果插件正在运行："
echo "   1. 打开 MyBricks 工具窗口"
echo "   2. 右键点击界面"
echo "   3. 选择 'Open DevTools'"
echo ""
echo "   或者在 Chrome 中访问: chrome://inspect"

