const fs = require('fs')
const path = require('path')

const generateTaroProject = (
  projectJson,
  outputDir = path.join(__dirname, '../_output/project')
) => {
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

  if (fs.existsSync(outputDir)) {
    fs.rmSync(outputDir, { recursive: true, force: true })
  }

  fs.mkdirSync(outputDir, { recursive: true })

  projectJson.forEach((node) => {
    processNode(node, outputDir)
  })
}

module.exports = generateTaroProject
module.exports.default = generateTaroProject
