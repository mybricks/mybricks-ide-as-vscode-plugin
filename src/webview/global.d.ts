/**
 * VSCode Webview API 类型声明
 */
declare function acquireVsCodeApi<T = any>(): {
  getState(): T;
  setState(data: T): void;
  postMessage(msg: any): void;
};

interface Window {
  React: typeof import('react');
  ReactDOM: any;
  antd: typeof import('antd');
  mybricks: any;
  tinymce: any;
}
