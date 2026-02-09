import React from 'react'
import * as ReactDOM from 'react-dom'
import * as ReactDOMClient from 'react-dom/client'
import * as antd from 'antd'
import { getWebViewMessageAPI } from '@/utils/message'

// 1. 挂载全局变量。必须在加载 CDN 脚本之前完成，因为它们依赖这些全局变量。
window.React = React
// 设计器引擎需要 ReactDOM.createRoot (React 18)
const mergedReactDOM = {
  ...ReactDOM,
  ...ReactDOMClient,
}
window.ReactDOM = mergedReactDOM
;(window as any)['react-dom'] = mergedReactDOM

// 2. 挂载 antd，供插件使用
window.antd = antd

// 3. 初始化 VSCode API 和消息桥
const vscode = acquireVsCodeApi()
getWebViewMessageAPI(vscode)

// 3. 动态加载 CDN 脚本，确保它们在全局变量准备好后运行
const loadScript = (src: string) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = src
    script.onload = resolve
    script.onerror = reject
    document.head.appendChild(script)
  })
}

const render = async () => {
  try {
    // 按顺序加载依赖
    await loadScript(
      'https://cdnjs.cloudflare.com/ajax/libs/tinymce/6.8.2/tinymce.min.js',
    )
    await loadScript(
      'https://p4-ec.eckwai.com/kos/nlav12333/mybricks/designer-spa/3.9.894/index.min.js',
    )
    await loadScript(
      'https://p66-ec.becukwai.com/udata/pkg/eshop/myk-dev/plugin2.js',
    )
    await loadScript(
      'https://my.mybricks.world/mybricks-app-mpsite/public/ai-utils/1.0.3/index.umd.js',
    )

    // 加载并渲染业务代码
    const { default: App } = await import('./App')
    const rootEl = document.getElementById('root')
    if (rootEl) {
      const root = ReactDOMClient.createRoot(rootEl)
      root.render(React.createElement(App))
    }
  } catch (err) {
    console.error('Failed to load scripts or render app:', err)
  }
}

render()
