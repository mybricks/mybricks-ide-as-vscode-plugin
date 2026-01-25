package com.mybricks.jetbrains

import com.intellij.openapi.project.Project
import com.intellij.openapi.wm.ToolWindow
import com.intellij.openapi.wm.ToolWindowFactory
import com.intellij.ui.content.ContentFactory
import com.intellij.ui.jcef.JBCefBrowser
import org.cef.browser.CefBrowser
import org.cef.browser.CefFrame
import org.cef.handler.CefLoadHandlerAdapter
import javax.swing.JComponent

/**
 * MyBricks 工具窗口工厂
 * 负责创建 MyBricks 设计器的工具窗口
 */
class MyBricksToolWindowFactory : ToolWindowFactory {
    
    override fun createToolWindowContent(project: Project, toolWindow: ToolWindow) {
        val myBricksWindow = MyBricksToolWindow(project)
        val content = ContentFactory.getInstance().createContent(
            myBricksWindow.getContent(),
            "",
            false
        )
        toolWindow.contentManager.addContent(content)
        
        // 自动最大化工具窗口 - 设置为占据最大空间
        toolWindow.stripeTitle = "MyBricks"
        
        // 使用 invokeLater 确保 UI 已完全初始化
        com.intellij.openapi.application.ApplicationManager.getApplication().invokeLater {
            // 设置工具窗口类型为浮动窗口
            toolWindow.setType(com.intellij.openapi.wm.ToolWindowType.FLOATING, null)
            
            // 激活并显示
            toolWindow.activate(null)
            
            // 尝试最大化
            val windowManager = com.intellij.openapi.wm.WindowManager.getInstance()
            val ideFrame = windowManager.getFrame(project)
            
            ideFrame?.let { frame ->
                // 获取屏幕尺寸
                val screenSize = java.awt.Toolkit.getDefaultToolkit().screenSize
                
                // 设置浮动窗口大小（90% 屏幕大小）
                val width = (screenSize.width * 0.9).toInt()
                val height = (screenSize.height * 0.9).toInt()
                
                // 设置位置居中
                val x = (screenSize.width - width) / 2
                val y = (screenSize.height - height) / 2
                
                // 应用设置
                toolWindow.component.preferredSize = java.awt.Dimension(width, height)
                toolWindow.component.bounds = java.awt.Rectangle(x, y, width, height)
            }
        }
    }

    override fun shouldBeAvailable(project: Project): Boolean = true
}

/**
 * MyBricks 工具窗口
 */
class MyBricksToolWindow(private val project: Project) {
    
    private val browser: JBCefBrowser = JBCefBrowser().apply {
        // 性能优化：移除所有限制，最大化性能
        
        // 禁用安全限制以提升性能
        jbCefClient.setProperty("disable-web-security", "true")
        
        // GPU 和渲染优化
        jbCefClient.setProperty("disable-gpu", "false")        // 启用 GPU 加速
        jbCefClient.setProperty("enable-gpu-rasterization", "true")
        jbCefClient.setProperty("enable-zero-copy", "true")
        
        // 禁用不必要的功能
        jbCefClient.setProperty("disable-smooth-scrolling", "false")  // 保持平滑滚动
        jbCefClient.setProperty("disable-features", "")       // 不禁用任何功能
        
        // 启用性能相关特性
        jbCefClient.setProperty("enable-features", "VaapiVideoDecoder,VaapiVideoEncoder,CanvasOopRasterization,BackForwardCache")
        
        // 线程优化
        jbCefClient.setProperty("renderer-process-limit", "10")  // 增加渲染进程限制
        
        // 内存和缓存
        jbCefClient.setProperty("disk-cache-size", "268435456")  // 256MB 磁盘缓存
        jbCefClient.setProperty("media-cache-size", "134217728") // 128MB 媒体缓存
        
        // JavaScript 优化
        jbCefClient.setProperty("js-flags", "--expose-gc --max-old-space-size=4096")
    }
    
    init {
        // 添加加载监听器用于调试
        browser.jbCefClient.addLoadHandler(object : CefLoadHandlerAdapter() {
            override fun onLoadEnd(cefBrowser: CefBrowser?, frame: CefFrame?, httpStatusCode: Int) {
                if (frame?.isMain == true) {
                    println("✅ MyBricks: 页面加载完成，状态码: $httpStatusCode")
                }
            }
        }, browser.cefBrowser)
        
        // 加载 HTML 内容
        try {
            val htmlContent = loadHtmlContent()
            println("✅ MyBricks: HTML 内容加载成功，长度: ${htmlContent.length}")
            println("💡 提示: 页面加载后右键点击可打开 DevTools 调试")
            browser.loadHTML(htmlContent)
        } catch (e: Exception) {
            println("❌ MyBricks: 加载失败: ${e.message}")
            e.printStackTrace()
        }
    }
    
    fun getContent(): JComponent {
        return browser.component
    }
    
    /**
     * 加载 HTML 内容
     * 从资源文件中读取并处理
     */
    private fun loadHtmlContent(): String {
        // 临时使用简单的测试 HTML 来验证 JCEF 是否工作
        val useTestMode = false  // 改为 true 可以切换回测试模式
        
        if (useTestMode) {
            println("⚠️  MyBricks: 使用测试模式，显示简单页面")
            return """
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="UTF-8">
                    <title>MyBricks Test</title>
                    <style>
                        * { margin: 0; padding: 0; box-sizing: border-box; }
                        body {
                            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
                            padding: 30px;
                            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                            color: white;
                            min-height: 100vh;
                        }
                        .container {
                            max-width: 800px;
                            margin: 0 auto;
                        }
                        .card {
                            background: rgba(255, 255, 255, 0.15);
                            backdrop-filter: blur(10px);
                            border-radius: 15px;
                            padding: 30px;
                            margin: 20px 0;
                            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
                        }
                        h1 { 
                            font-size: 2.5em; 
                            margin-bottom: 20px;
                            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
                        }
                        h2 { 
                            font-size: 1.5em; 
                            margin: 15px 0 10px 0;
                            color: #ffd700;
                        }
                        ul { 
                            list-style: none; 
                            padding-left: 0;
                        }
                        li {
                            padding: 8px 0;
                            padding-left: 25px;
                            position: relative;
                        }
                        li:before {
                            content: "✓";
                            position: absolute;
                            left: 0;
                            color: #4ade80;
                            font-weight: bold;
                        }
                        .button {
                            background: #4ade80;
                            color: #1a1a1a;
                            border: none;
                            padding: 12px 24px;
                            border-radius: 8px;
                            font-size: 16px;
                            font-weight: bold;
                            cursor: pointer;
                            margin: 10px 5px;
                            transition: all 0.3s;
                        }
                        .button:hover {
                            background: #22c55e;
                            transform: translateY(-2px);
                            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
                        }
                        .status {
                            font-family: monospace;
                            background: rgba(0,0,0,0.3);
                            padding: 15px;
                            border-radius: 8px;
                            margin: 15px 0;
                        }
                        .error { color: #ff6b6b; }
                        .success { color: #4ade80; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <h1>🎉 JCEF 浏览器测试成功！</h1>
                        
                        <div class="card">
                            <h2>✅ 如果您能看到这个彩色页面：</h2>
                            <ul>
                                <li>JCEF 浏览器组件正常工作</li>
                                <li>HTML 渲染成功</li>
                                <li>CSS 样式正常显示</li>
                                <li>工具窗口正确加载</li>
                            </ul>
                        </div>
                        
                        <div class="card">
                            <h2>🧪 测试 JavaScript：</h2>
                            <button class="button" onclick="testJS()">点击测试 JS</button>
                            <button class="button" onclick="testConsole()">测试 Console</button>
                            <button class="button" onclick="location.reload()">重新加载</button>
                            <div id="jsStatus" class="status">
                                等待测试...
                            </div>
                        </div>
                        
                        <div class="card">
                            <h2>📋 下一步：</h2>
                            <p style="margin: 10px 0;">
                                如果这个页面能正常显示和交互，说明 JCEF 本身没问题。
                            </p>
                            <p style="margin: 10px 0;">
                                问题可能是 MyBricks 需要的外部资源（CDN）无法加载。
                            </p>
                            <p style="margin: 10px 0; font-weight: bold; color: #ffd700;">
                                请右键点击此页面，看是否有 "Inspect" 或 "Open DevTools" 选项。
                            </p>
                        </div>
                        
                        <div class="card">
                            <h2>🔧 切换到完整版本：</h2>
                            <p style="margin: 10px 0;">
                                编辑文件：<br>
                                <code style="background: rgba(0,0,0,0.3); padding: 5px 10px; border-radius: 4px; display: inline-block; margin: 5px 0;">
                                    MyBricksToolWindowFactory.kt
                                </code>
                            </p>
                            <p style="margin: 10px 0;">
                                将 <code style="background: rgba(0,0,0,0.3); padding: 2px 8px; border-radius: 4px;">useTestMode = true</code> 
                                改为 <code style="background: rgba(0,0,0,0.3); padding: 2px 8px; border-radius: 4px;">useTestMode = false</code>
                            </p>
                        </div>
                    </div>
                    
                    <script>
                        console.log('✅ JavaScript 正常工作！');
                        console.log('📊 这是 Console 输出');
                        console.log('💡 右键点击页面可查看更多选项');
                        
                        function testJS() {
                            const status = document.getElementById('jsStatus');
                            status.innerHTML = '<span class="success">✅ JavaScript 正常运行！</span><br>' +
                                               '时间: ' + new Date().toLocaleString();
                            console.log('✅ 点击测试成功');
                        }
                        
                        function testConsole() {
                            console.log('🎯 这是一条测试日志');
                            console.warn('⚠️  这是一条警告');
                            console.error('❌ 这是一条错误（测试用）');
                            console.table({
                                'JCEF': '正常',
                                'HTML': '正常',
                                'CSS': '正常',
                                'JavaScript': '正常'
                            });
                            const status = document.getElementById('jsStatus');
                            status.innerHTML = '<span class="success">✅ 已在 Console 中输出测试信息<br>请右键打开 DevTools 查看</span>';
                        }
                        
                        // 页面加载完成
                        window.addEventListener('load', function() {
                            console.log('✅ 页面加载完成');
                            console.log('%c🎉 JCEF 工作正常！', 'color: #4ade80; font-size: 20px; font-weight: bold;');
                        });
                        
                        // 捕获错误
                        window.addEventListener('error', function(e) {
                            console.error('❌ 错误:', e.message);
                            const status = document.getElementById('jsStatus');
                            status.innerHTML = '<span class="error">❌ 错误: ' + e.message + '</span>';
                        });
                    </script>
                </body>
                </html>
            """.trimIndent()
        }
        
        // 完整版本（加载 MyBricks）
        val htmlTemplate = javaClass.getResourceAsStream("/webview/index.html")?.bufferedReader()?.readText()
            ?: throw RuntimeException("无法加载 webview/index.html")
        
        val cssContent = javaClass.getResourceAsStream("/webview/app.css")?.bufferedReader()?.readText() ?: ""
        val configContent = javaClass.getResourceAsStream("/webview/config.tsx")?.bufferedReader()?.readText() ?: ""
        val appContent = javaClass.getResourceAsStream("/webview/app.tsx")?.bufferedReader()?.readText() ?: ""
        
        // 将 CSS 和 JS 内联到 HTML 中
        return htmlTemplate
            .replace("<!-- INLINE_CSS -->", "<style>$cssContent</style>")
            .replace("<!-- INLINE_CONFIG -->", "<script type=\"text/babel\" data-type=\"module\" data-presets=\"react,typescript\">$configContent</script>")
            .replace("<!-- INLINE_APP -->", "<script type=\"text/babel\" data-type=\"module\" data-presets=\"react,typescript\">$appContent</script>")
    }
}

