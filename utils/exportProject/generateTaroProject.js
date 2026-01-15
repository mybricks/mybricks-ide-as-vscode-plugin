const fs = require('fs')
const path = require('path')
const { spawnSync } = require('child_process')

const ZIP_NAME = 'dist'

// 兼容凡泰的模板，强制先删除冲突的文件
const deleteConflictingFiles = (dir) => {
  const conflictingFiles = ['src', 'config']

  conflictingFiles.forEach((file) => {
    const filePath = path.join(dir, file)
    if (fs.existsSync(filePath)) {
      fs.rmSync(filePath, { recursive: true, force: true })
    }
  })
}

const generateTaroProject = (opts) => {
  const { projectJson, exportDir, toZip } = opts || {}

  const processNode = (node, baseDir) => {
    const nodePath = path.join(baseDir, node.path)

    if (node.content === null) {
      if (!fs.existsSync(nodePath)) {
        fs.mkdirSync(nodePath, { recursive: true })
      }

      if (node.children) {
        node.children.forEach((child) => {
          processNode(child, baseDir)
        })
      }
    } else {
      const fileDir = path.dirname(nodePath)

      if (!fs.existsSync(fileDir)) {
        fs.mkdirSync(fileDir, { recursive: true })
      }

      const isImageFile = /\.(png|jpg|jpeg|gif|webp|svg)$/i.test(nodePath)
      if (isImageFile && node.content && typeof node.content === 'string') {
        try {
          const buffer = Buffer.from(node.content, 'base64')
          if (buffer.length > 0) {
            fs.writeFileSync(nodePath, buffer)
            return
          }
        } catch (error) {}
      }

      fs.writeFileSync(nodePath, node.content, 'utf-8')
    }
  }

  return new Promise((resolve, reject) => {
    const handleReject = (error) => {
      reject(error)
      throw new Error(error)
    }

    try {
      if (!projectJson || !Array.isArray(projectJson)) {
        handleReject('projectJson 必须是数组')
      }
      const finalExportDir = exportDir
      const finalToZip = !!toZip
      if (!finalExportDir) {
        handleReject('exportDir 必填')
      }

      const tempDir = finalToZip
        ? path.join(finalExportDir, `.${ZIP_NAME}.tmp`)
        : finalExportDir

      if (!fs.existsSync(tempDir)) {
        fs.mkdirSync(tempDir, { recursive: true })
      }

      // 兼容凡泰的模板，强制先删除冲突的文件
      deleteConflictingFiles(tempDir)

      projectJson.forEach((node) => {
        processNode(node, tempDir)
      })

      if (!finalToZip) {
        resolve({ dir: tempDir })
        return
      }

      const zipPath = path.join(finalExportDir, `${ZIP_NAME}.zip`)
      if (fs.existsSync(zipPath)) {
        fs.rmSync(zipPath, { force: true })
      }

      if (process.platform === 'win32') {
        const result = spawnSync(
          'powershell.exe',
          [
            '-NoProfile',
            '-Command',
            `Compress-Archive -Path "${path.join(
              tempDir,
              '*'
            )}" -DestinationPath "${zipPath}" -Force`,
          ],
          { stdio: 'pipe' }
        )
        if (result.status !== 0) {
          handleReject(
            result.stderr ? Buffer.from(result.stderr).toString() : '压缩失败'
          )
        }
      } else {
        const result = spawnSync('zip', ['-r', zipPath, '.'], {
          cwd: tempDir,
          stdio: 'pipe',
        })
        if (result.status !== 0) {
          handleReject(
            result.stderr ? Buffer.from(result.stderr).toString() : '压缩失败'
          )
        }
      }

      fs.rmSync(tempDir, { recursive: true, force: true })
      resolve({ dir: zipPath })
    } catch (err) {
      handleReject(err)
    }
  })
}

module.exports = generateTaroProject
module.exports.default = generateTaroProject
