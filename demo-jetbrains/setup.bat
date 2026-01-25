@echo off
REM MyBricks JetBrains 插件 - Windows 初始化脚本

echo ========================================
echo 🚀 MyBricks JetBrains 插件初始化脚本
echo ========================================
echo.

REM 检查 Java 版本
echo 📋 检查 Java 环境...
java -version >nul 2>&1
if errorlevel 1 (
    echo ❌ 错误: 未检测到 Java
    echo    请先安装 JDK 17 或更高版本
    echo    下载地址: https://adoptium.net/
    pause
    exit /b 1
)

echo ✅ 检测到 Java:
java -version 2>&1 | findstr /C:"version"
echo.

REM 检查 gradle-wrapper.jar
echo 📦 检查 Gradle Wrapper...
if not exist "gradle\wrapper\gradle-wrapper.jar" (
    echo ⚠️  gradle-wrapper.jar 不存在
    echo    需要手动下载或使用系统 Gradle 生成
    echo.
    echo    方式 1: 手动下载
    echo    访问: https://repo1.maven.org/maven2/org/gradle/gradle-wrapper/8.5/gradle-wrapper-8.5.jar
    echo    保存到: gradle\wrapper\gradle-wrapper.jar
    echo.
    echo    方式 2: 使用系统 Gradle
    echo    gradle wrapper --gradle-version 8.5
    echo.
    pause
    exit /b 1
) else (
    echo ✅ Gradle Wrapper 已存在
)

echo.
echo ✨ 初始化完成！
echo.
echo 接下来您可以：
echo   1. 运行开发 IDE:   gradlew.bat runIde
echo   2. 构建插件:       gradlew.bat buildPlugin
echo   3. 查看所有任务:   gradlew.bat tasks
echo.

set /p RUN="是否现在运行开发 IDE？(y/n): "
if /i "%RUN%"=="y" (
    echo.
    echo 🚀 正在启动开发 IDE...
    echo    首次运行会下载依赖，可能需要 5-10 分钟，请耐心等待...
    echo.
    gradlew.bat runIde
) else (
    echo.
    echo 👋 初始化完成！要运行插件，请执行：
    echo    gradlew.bat runIde
    echo.
    pause
)

