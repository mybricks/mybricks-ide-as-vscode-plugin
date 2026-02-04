const vscode = acquireVsCodeApi()

document.getElementById('openIDE')?.addEventListener('click', () => {
  vscode.postMessage({
    command: 'openIDE',
  })
})
