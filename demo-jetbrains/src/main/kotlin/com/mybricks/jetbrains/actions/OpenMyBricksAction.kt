package com.mybricks.jetbrains.actions

import com.intellij.openapi.actionSystem.AnAction
import com.intellij.openapi.actionSystem.AnActionEvent
import com.intellij.openapi.wm.ToolWindowManager

/**
 * 打开 MyBricks IDE 的操作
 * 在工具栏点击时触发
 */
class OpenMyBricksAction : AnAction() {
    
    override fun actionPerformed(e: AnActionEvent) {
        val project = e.project ?: return
        
        // 获取工具窗口管理器
        val toolWindowManager = ToolWindowManager.getInstance(project)
        
        // 获取 MyBricks 工具窗口
        val toolWindow = toolWindowManager.getToolWindow("MyBricks")
        
        toolWindow?.let { window ->
            // 显示并最大化工具窗口
            window.show {
                // 设置为浮动模式以获得更大空间
                window.setType(com.intellij.openapi.wm.ToolWindowType.FLOATING, null)
                
                // 获取屏幕尺寸并设置窗口大小
                val screenSize = java.awt.Toolkit.getDefaultToolkit().screenSize
                val width = (screenSize.width * 0.9).toInt()
                val height = (screenSize.height * 0.9).toInt()
                val x = (screenSize.width - width) / 2
                val y = (screenSize.height - height) / 2
                
                window.component.preferredSize = java.awt.Dimension(width, height)
                window.component.bounds = java.awt.Rectangle(x, y, width, height)
            }
        }
    }
    
    override fun update(e: AnActionEvent) {
        // 只有在项目打开时才启用此操作
        e.presentation.isEnabledAndVisible = e.project != null
    }
}

