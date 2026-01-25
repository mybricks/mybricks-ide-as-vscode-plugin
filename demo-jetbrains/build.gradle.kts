plugins {
    id("java")
    id("org.jetbrains.kotlin.jvm") version "1.9.21"
    id("org.jetbrains.intellij") version "1.16.1"
}

group = "com.mybricks"
version = "0.0.1"

repositories {
    mavenCentral()
}

dependencies {
    implementation("org.jetbrains.kotlin:kotlin-stdlib")
}

// 配置 IntelliJ Platform 插件
intellij {
    version.set("2023.2")
    type.set("IC") // IntelliJ IDEA Community Edition
    
    plugins.set(listOf(
        // 如果需要，可以添加其他插件依赖
    ))
}

tasks {
    // 设置 JVM 兼容性
    withType<JavaCompile> {
        sourceCompatibility = "17"
        targetCompatibility = "17"
    }
    
    withType<org.jetbrains.kotlin.gradle.tasks.KotlinCompile> {
        kotlinOptions.jvmTarget = "17"
    }

    // 性能优化：最大化 CPU 和内存
    runIde {
        // 增加 IDE 的最大内存到 8GB
        maxHeapSize = "8g"
        
        // JVM 参数 - 激进的性能优化
        jvmArgs = listOf(
            // 内存配置 - 大幅增加
            "-Xmx8192m",           // 最大堆 8GB
            "-Xms2048m",           // 初始堆 2GB
            "-XX:MetaspaceSize=512m",
            "-XX:MaxMetaspaceSize=1024m",
            "-XX:ReservedCodeCacheSize=512m",
            
            // 垃圾回收优化 - 最小化暂停时间
            "-XX:+UseG1GC",
            "-XX:MaxGCPauseMillis=50",        // 降低到 50ms
            "-XX:InitiatingHeapOccupancyPercent=30",
            "-XX:G1ReservePercent=15",
            "-XX:+UnlockExperimentalVMOptions",
            "-XX:G1NewSizePercent=30",
            "-XX:G1MaxNewSizePercent=60",
            "-XX:ConcGCThreads=4",            // 并发GC线程数
            "-XX:ParallelGCThreads=8",        // 并行GC线程数
            
            // CPU 优化 - 移除所有限制
            "-XX:+UseStringDeduplication",
            "-XX:+OptimizeStringConcat",
            "-XX:+UseFastAccessorMethods",
            "-XX:+AggressiveOpts",            // 激进优化
            "-XX:+UseBiasedLocking",
            "-XX:+AlwaysPreTouch",            // 预分配内存
            
            // JCEF 性能最大化
            "-Djcef.trace.cefbrowser=false",
            "-Djcef.trace.cefbrowser.n=false",
            "-Dide.browser.jcef.gpu.disable=false",  // GPU 加速
            "-Dide.browser.jcef.sandbox.enable=false", // 禁用沙箱
            "-Dide.browser.jcef.osr.enabled=true",   // 离屏渲染
            
            // Chromium 性能标志
            "-Dide.browser.jcef.contextMenu.enabled=true",
            
            // 线程优化
            "-Djava.util.concurrent.ForkJoinPool.common.parallelism=8",
            
            // 其他性能优化
            "-XX:+HeapDumpOnOutOfMemoryError",
            "-XX:-OmitStackTraceInFastThrow",
            "-Djava.awt.headless=false",
            "-Dsun.io.useCanonCaches=false",
            
            // 启用性能监控（可选，用于诊断）
            // "-XX:+PrintGCDetails",
            // "-XX:+PrintGCTimeStamps",
            // "-Xloggc:gc.log"
        )
        
        // 自动重启配置
        autoReloadPlugins.set(false)  // 禁用自动重载以提升性能
    }

    patchPluginXml {
        sinceBuild.set("232")
        untilBuild.set("261.*")  // 支持到 2026.1 版本
    }

    signPlugin {
        certificateChain.set(System.getenv("CERTIFICATE_CHAIN"))
        privateKey.set(System.getenv("PRIVATE_KEY"))
        password.set(System.getenv("PRIVATE_KEY_PASSWORD"))
    }

    publishPlugin {
        token.set(System.getenv("PUBLISH_TOKEN"))
    }
}

