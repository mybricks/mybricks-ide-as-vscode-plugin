# MyBricks 界面最大化指南

## 🎯 已实现的自动最大化

现在插件会自动将 MyBricks 工具窗口最大化显示！

### 实现的功能

1. **自动浮动窗口模式**
   - 工具窗口会自动变为浮动窗口
   - 占据屏幕 90% 的空间
   - 自动居中显示

2. **快捷操作**
   - 点击工具栏的 MyBricks 按钮 → 自动最大化
   - 点击侧边栏的 MyBricks 图标 → 自动最大化

3. **尺寸设置**
   - 宽度：屏幕的 90%
   - 高度：屏幕的 90%
   - 位置：自动居中

---

## 📐 手动调整大小

### 方式 1：拖拽窗口边缘

浮动窗口模式下，您可以：
- 拖拽窗口边缘调整大小
- 拖拽标题栏移动位置
- 双击标题栏最大化/还原

### 方式 2：修改代码调整比例

如果想要更大（或更小）的窗口，编辑文件：
`src/main/kotlin/com/mybricks/jetbrains/MyBricksToolWindowFactory.kt`

找到这些行：
```kotlin
val width = (screenSize.width * 0.9).toInt()   // 90% 宽度
val height = (screenSize.height * 0.9).toInt() // 90% 高度
```

修改比例：
- `0.9` = 90% 的屏幕大小
- `0.95` = 95% 的屏幕大小
- `1.0` = 100% 全屏（会覆盖菜单栏）

---

## 🖥️ 不同的显示模式

### 模式 1：浮动窗口（当前模式，推荐）

**优点**：
- ✅ 可以调整大小
- ✅ 可以移动位置
- ✅ 可以最小化
- ✅ 独立窗口，不受 IDE 布局影响

**当前设置**：占据 90% 屏幕

### 模式 2：停靠模式（传统工具窗口）

如果您更喜欢传统的停靠在IDE内部的模式，可以修改代码：

在 `MyBricksToolWindowFactory.kt` 中注释掉这一行：
```kotlin
// toolWindow.setType(com.intellij.openapi.wm.ToolWindowType.FLOATING, null)
```

然后工具窗口会停靠在右侧或底部，可以拖拽调整大小。

### 模式 3：编辑器标签模式（最大化）

如果想要像编辑文件一样打开 MyBricks，可以创建一个编辑器标签：

*这需要更多代码修改，如果需要请告诉我。*

---

## ⌨️ 快捷键

### 系统快捷键

- **最大化窗口**（macOS）：双击窗口标题栏
- **全屏**（macOS）：点击窗口左上角的绿色按钮
- **最小化**（macOS）：点击窗口左上角的黄色按钮

### 自定义快捷键

您可以在 IDE 中设置快捷键：
1. 打开 `Settings` → `Keymap`
2. 搜索 "MyBricks"
3. 为 "Open MyBricks IDE" 设置快捷键

推荐：`Cmd+Shift+M` 或 `Ctrl+Shift+M`

---

## 🔧 高级定制

### 完全全屏（100% 屏幕）

修改 `MyBricksToolWindowFactory.kt`：

```kotlin
// 改为 100%
val width = screenSize.width
val height = screenSize.height
val x = 0
val y = 0
```

### 固定大小

如果您的屏幕是固定尺寸（例如 1920x1080），可以直接设置：

```kotlin
val width = 1800  // 固定宽度
val height = 1000 // 固定高度
```

### 多显示器支持

如果使用多显示器，窗口会在主显示器上居中。

要指定显示器，可以使用：
```kotlin
val graphicsEnvironment = java.awt.GraphicsEnvironment.getLocalGraphicsEnvironment()
val screens = graphicsEnvironment.screenDevices
// 选择特定显示器
val targetScreen = screens[1] // 第二个显示器
```

---

## 💡 使用技巧

### 1. 快速切换大小

您可以：
- 双击标题栏 → 最大化
- 再次双击 → 恢复到 90%
- 拖拽边缘 → 自定义大小

### 2. 保持窗口始终在最前

如果需要窗口始终在最前面（覆盖其他应用），可以设置：

```kotlin
// 在创建窗口后添加
toolWindow.component.setAlwaysOnTop(true)
```

### 3. 记住窗口位置和大小

IDE 会自动记住浮动窗口的位置和大小。下次打开时会恢复到上次的状态。

### 4. 快速切换模式

如果您经常需要在浮动和停靠模式之间切换：
- 右键点击工具窗口标题栏
- 选择 "View Mode"
- 选择 "Float" 或 "Dock"

---

## 🎨 界面优化建议

### 去除工具栏（更多空间）

如果您想要最大化设计器空间，可以隐藏顶部工具栏。

编辑 `app.tsx`，注释掉 toolbar：

```typescript
return (
    <div className='ide'>
        {/* 注释掉工具栏 */}
        {/* <div className='toolbar'>...</div> */}
        
        <div className={'designer'} style={{height: '100%'}}>
            <SPADesigner ... />
        </div>
    </div>
)
```

### 全屏设计器模式

在 MyBricks 设计器内部，通常也有全屏按钮：
- 查找工具栏上的全屏图标
- 或按 `F11` 键（如果支持）

---

## 📊 当前配置总结

### 自动最大化设置

| 设置项 | 值 | 说明 |
|--------|-----|------|
| 窗口模式 | 浮动窗口 | 独立窗口 |
| 宽度 | 90% | 屏幕宽度的 90% |
| 高度 | 90% | 屏幕高度的 90% |
| 位置 | 居中 | 自动居中对齐 |
| 自动打开 | 是 | 启动时自动打开 |

### 性能配置

| 设置项 | 值 |
|--------|-----|
| 最大内存 | 8GB |
| GPU 加速 | 启用 |
| 渲染模式 | 硬件加速 |

---

## 🆘 常见问题

### Q: 窗口太大，挡住了菜单栏？

A: 修改比例从 `0.9` 改为 `0.85` 或 `0.8`

### Q: 想要窗口默认停靠，而不是浮动？

A: 注释掉 `setType(FLOATING)` 这行代码

### Q: 如何设置默认停靠位置（左/右/下）？

A: 在 `plugin.xml` 中设置 `anchor` 属性：
```xml
<toolWindow id="MyBricks" 
            anchor="right"  <!-- 或 "left", "bottom" -->
            .../>
```

### Q: 能否记住自定义的窗口大小？

A: IDE 会自动记住浮动窗口的大小和位置。下次打开会恢复。

---

## 🎯 快速参考

### 启动后自动最大化 ✅
已实现！打开工具窗口会自动最大化。

### 手动最大化
双击窗口标题栏

### 全屏模式
点击窗口左上角绿色按钮（macOS）

### 自定义大小
修改代码中的 `0.9` 比例值

---

**享受您的大屏幕 MyBricks 设计器！** 🎉

