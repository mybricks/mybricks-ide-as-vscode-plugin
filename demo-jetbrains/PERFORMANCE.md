# MyBricks JetBrains 插件性能优化指南

## 🎯 问题描述

JCEF（Java Chromium Embedded Framework）默认配置相对保守，而 MyBricks 是一个复杂的可视化设计器，需要较多资源。这可能导致：
- 🐌 界面响应慢
- ⏳ 加载时间长
- 🔥 CPU 使用率高
- 💾 内存不足

## ✅ 已实施的优化

### 1. 增加 JVM 内存限制

在 `build.gradle.kts` 中：
- 最大堆内存：4GB（从默认的 ~1GB 提升）
- 初始堆内存：512MB
- 使用 G1 垃圾回收器

### 2. JCEF 性能优化

启用的优化项：
- ✅ 禁用 JCEF 沙箱（提升性能）
- ✅ 启用 GPU 硬件加速
- ✅ 优化垃圾回收策略
- ✅ 禁用不必要的调试跟踪

### 3. 前端优化

- ✅ 使用 React 生产版本（而非开发版）
- ✅ 压缩的库文件
- ✅ 优化资源加载顺序

## 📊 性能对比

| 配置项 | 优化前 | 优化后 |
|--------|--------|--------|
| 最大内存 | ~1GB | 4GB |
| GPU 加速 | 禁用 | 启用 |
| React 版本 | 开发版 | 生产版 |
| 沙箱 | 启用 | 禁用 |

## 🚀 进一步优化建议

### 如果仍然感觉卡顿：

#### 1. 增加更多内存

编辑 `build.gradle.kts`，找到 `runIde` 任务：

```kotlin
runIde {
    maxHeapSize = "6g"  // 改为 6GB 或 8GB
    
    jvmArgs = listOf(
        "-Xmx6144m",  // 改为 6GB
        "-Xms1024m",  // 改为 1GB
        // ... 其他参数
    )
}
```

#### 2. 优化系统资源

**macOS**:
```bash
# 检查可用内存
vm_stat

# 清理内存缓存
sudo purge
```

**关闭其他应用**：
- 关闭不必要的浏览器标签
- 关闭其他 IDE 实例
- 关闭大型应用

#### 3. 使用更快的 IDE 版本

如果使用 Community Edition（IC），可以尝试：
- IntelliJ IDEA Ultimate（更好的性能优化）
- 或升级到最新版本

#### 4. 调整 React 性能

在 `app.tsx` 中添加性能优化：

```typescript
import { memo, useMemo, useCallback } from 'react';

// 使用 memo 减少重渲染
const App = memo(() => {
    // ... 组件代码
});

// 使用 useMemo 缓存计算结果
const config = useMemo(() => configFn({ designerRef }), []);

// 使用 useCallback 缓存函数
const save = useCallback(() => { /* ... */ }, []);
```

#### 5. 监控性能

启用性能监控：

```bash
# 运行时添加性能分析
./gradlew runIde --profile

# 查看 CPU 和内存使用
# macOS: Activity Monitor
# Windows: Task Manager
# Linux: htop
```

## 🔍 性能诊断

### 检查内存使用

在 MyBricks 工具窗口中，打开浏览器控制台（右键 → Inspect），运行：

```javascript
// 查看当前内存使用
console.log('Memory:', performance.memory);

// 监控性能
performance.mark('start');
// ... 执行操作
performance.mark('end');
performance.measure('operation', 'start', 'end');
console.log(performance.getEntriesByType('measure'));
```

### 检查 JCEF 状态

在 IDE 日志中查找：

```
✅ MyBricks: HTML 内容加载成功
✅ MyBricks: 页面加载完成，状态码: 200
```

如果看到警告或错误，可能需要调整配置。

## 🛠️ 常见性能问题

### 问题 1：初始加载慢

**原因**：CDN 资源下载慢

**解决**：
1. 使用 VPN
2. 或本地化 CDN 资源（下载到项目中）

### 问题 2：操作卡顿

**原因**：
- JCEF 沙箱限制
- 内存不足
- GPU 加速未启用

**解决**：
1. 确认已禁用沙箱（见上文配置）
2. 增加内存限制
3. 确认 GPU 加速已启用

### 问题 3：内存泄漏

**症状**：使用一段时间后越来越慢

**解决**：
```javascript
// 在 app.tsx 中添加清理逻辑
useEffect(() => {
    return () => {
        // 清理逻辑
        designerRef.current?.destroy?.();
    };
}, []);
```

### 问题 4：CPU 占用高

**原因**：
- React 频繁重渲染
- 动画效果过多

**解决**：
- 使用 React.memo
- 减少 state 更新频率
- 使用 requestAnimationFrame

## 📈 性能指标

### 良好性能标准：

- **首次加载**：< 5 秒
- **页面切换**：< 500ms
- **组件拖拽**：60 FPS
- **内存使用**：< 1GB
- **CPU 使用**：< 50%（空闲时 < 10%）

### 测量方法：

```javascript
// 在浏览器控制台运行
performance.timing.loadEventEnd - performance.timing.navigationStart
// 结果单位：毫秒
```

## 🔧 配置文件参考

### build.gradle.kts（完整配置）

```kotlin
tasks {
    runIde {
        maxHeapSize = "4g"
        
        jvmArgs = listOf(
            "-Xmx4096m",
            "-Xms512m",
            "-Djcef.trace.cefbrowser=false",
            "-Dide.browser.jcef.gpu.disable=false",
            "-Dide.browser.jcef.sandbox.enable=false",
            "-XX:+UseG1GC",
            "-XX:MaxGCPauseMillis=200"
        )
    }
}
```

## 💡 最佳实践

1. **开发时**：使用开发版 React（便于调试）
2. **测试/生产**：使用生产版 React（更好性能）
3. **定期重启**：长时间运行后重启测试 IDE
4. **监控资源**：使用系统监控工具观察资源使用
5. **增量加载**：避免一次性加载所有组件

## 📞 需要帮助？

如果性能问题仍未解决：

1. 收集信息：
   - IDE 版本
   - 系统配置（CPU、内存）
   - 操作系统版本
   - 性能监控截图

2. 查看日志：
   - IDE 日志（Help → Show Log）
   - 浏览器控制台

3. 联系支持：support@mybricks.ai

---

**记住**：性能优化是一个持续的过程。根据实际使用情况调整配置！

