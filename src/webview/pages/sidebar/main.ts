const vscode = (window as any).acquireVsCodeApi()

document.getElementById('openIDE')?.addEventListener('click', () => {
  vscode.postMessage({
    command: 'openIDE',
  })
})
