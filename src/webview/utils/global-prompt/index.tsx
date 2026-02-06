import { Modal, Input, message } from 'antd'
import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'

function PromptContent({
  defaultValue,
  onChange,
}: {
  defaultValue: string
  onChange: (value: string) => void
}) {
  const [inputValue, setInputValue] = useState(defaultValue)
  return (
    <div>
      <Input
        placeholder='请输入'
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value)
          onChange(e.target.value)
        }}
      />
    </div>
  )
}

export default function globalPrompt({
  title,
  content = '',
  okText = '确定',
  cancelText = '取消',
  validate,
}: {
  title: string
  content?: string
  okText?: string
  cancelText?: string
  validate?: (value: string) => string
}): Promise<string> {
  return new Promise((resolve, reject) => {
    let currentValue = content
    const div = document.createElement('div')
    document.body.appendChild(div)
    const root = createRoot(div)

    function destroy() {
      root.unmount()
      if (div.parentNode) {
        div.parentNode.removeChild(div)
      }
    }

    Modal.confirm({
      title,
      content: (
        <PromptContent
          defaultValue={content}
          onChange={(val) => {
            currentValue = val
          }}
        />
      ),
      okText,
      cancelText,
      onOk: () => {
        return new Promise((okResolve, okReject) => {
          const error = validate?.(currentValue)
          if (error) {
            message.error(error)
            return okReject(error)
          }
          okResolve(currentValue)
          resolve(currentValue)
          destroy()
        })
      },
      onCancel: () => {
        reject('')
        destroy()
      },
      afterClose: () => {
        destroy()
      },
    })
  })
}
