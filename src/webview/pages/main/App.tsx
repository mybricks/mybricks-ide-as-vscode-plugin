import React, { useState, useRef, useCallback, useEffect } from 'react'
import { ConfigProvider, message, Space } from 'antd'
import type { NoticeType } from 'antd/es/message/interface'
import { config as configFn } from './modules/designer/config'
import { getWebViewMessageAPI } from '@/utils/message'

import './App.less'

const ANTD_CONFIG = {
  theme: {
    token: {
      colorPrimary: '#fa6400',
    },
  },
}

const vsCodeMessage = getWebViewMessageAPI()!

/**
 * MyBricks 主应用入口
 */
export default function App() {
  // 动态获取设计器组件，确保渲染时引擎已就绪
  const { SPADesigner } = (window.mybricks || {}) as any
  // 内容变更计数
  const [changed, setChanged] = useState(0)

  // 导出加载中
  const [exportLoading, setExportLoading] = useState(false)

  // 消息提示处理
  const onMessage = useCallback(
    (type: NoticeType, msg: string, duration = 3) => {
      message.destroy()
      message[type](msg, duration)
    },
    [],
  )

  // 设计器实例引用
  const designerRef = useRef<any>(null)

  // 初始化配置
  const [initSuccess, setInitSuccess] = useState(false)
  const config = useRef<any>(null)
  useEffect(() => {
    configFn({
      designerRef,
    }).then((_config: any) => {
      setInitSuccess(true)
      config.current = _config
    })
  }, [designerRef])

  // 保存
  const save = useCallback((all?: any) => {
    setChanged(0)
    config.current?.save(all)
  }, [])

  // 导出
  const handleExport = useCallback(() => {
    // setExportPopoverVisible(false)
    setExportLoading(true)
    onMessage('loading', '导出中...', 0)
    const configJson = designerRef.current?.toJSON({
      withDiagrams: true,
      withIOSchema: true,
    })
    console.log('configJson', configJson)
    vsCodeMessage
      .call('exportProject', {
        configJson,
      })
      .then((res: { success: boolean; message: string }) => {
        console.log('>>>>>导出结果', res)
        if (res.success) {
          onMessage('success', res.message)
        } else {
          onMessage(
            'error',
            typeof res.message === 'string' ? res.message : '导出失败',
          )
        }
      })
      .finally(() => {
        setExportLoading(false)
      })
  }, [])

  return (
    <ConfigProvider {...ANTD_CONFIG}>
      <div className='ide'>
        {/* 顶部工具栏 */}
        <div className='toolbar'>
          <div className={'logo'}>MyBricks</div>
          <div className={'btns'} id={'toolbarBtns'} />
          <Space>
            <button className={'button primary'} onClick={save}>
              {changed ? '*' : ''}保存
            </button>
            <button
              className={'button '}
              disabled={exportLoading}
              onClick={handleExport}
            >
              导出
            </button>
          </Space>
        </div>

        {/* 设计器主区域 */}
        <div className={'designer'}>
          {!SPADesigner && (
            <div style={{ padding: 20, textAlign: 'center' }}>
              设计器引擎加载中...
            </div>
          )}
          {initSuccess && SPADesigner && (
            <SPADesigner
              config={config.current}
              ref={designerRef}
              onLoad={() => console.log('loaded')}
              onMessage={onMessage}
              onEdit={() => setChanged(changed + 1)}
            />
          )}
        </div>
      </div>
    </ConfigProvider>
  )
}
