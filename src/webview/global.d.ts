/**
 * VSCode Webview API 类型声明
 */
declare function acquireVsCodeApi<T = any>(): {
  getState(): T
  setState(data: T): void
  postMessage(msg: any): void
}

interface Window {
  React: typeof import('react')
  ReactDOM: any
  antd: typeof import('antd')
  mybricks: any
  tinymce: any
}

declare module '*.less' {
  const classes: { [key: string]: string }
  export default classes
}

declare module '*.css' {
  const classes: { [key: string]: string }
  export default classes
}
