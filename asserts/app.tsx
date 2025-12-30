/**
 * MyBricks 主应用入口
 */
declare const React: any
declare const ReactDOM: any

const { useState, useRef, useMemo, useCallback } = React
const rootEl = document.getElementById('root')

const STORAGE_KEY_EXPORT = '--mybricks-export-config-'
type ExportConfig = {
  projectName: string
  exportDir?: string
}

// MyBricks SPA Designer 引擎
const { SPADesigner } = (window as any).mybricks

// 获取配置函数（由 config.tsx 挂载）
const configFn = (window as any).config

const { Popover, Form, Input, Button, message } = (window as any).antd
const { VerticalAlignBottomOutlined } = (window as any).icons

const vsCodeMessage = (window as any).webViewMessageApi

// 渲染应用
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl)
  root.render(<App />)
}

/**
 * 主应用组件
 */
function App() {
  // 内容变更计数
  const [changed, setChanged] = useState(0)

  // 下载弹出层显隐
  const [exportPopoverVisible, setExportPopoverVisible] = useState(false)

  // 消息提示处理
  const onMessage = useCallback((type, msg, duration = 3) => {
    message.destroy()
    message[type](msg, duration)
  }, [])

  // 设计器实例引用
  const designerRef = useRef(null)

  // 初始化配置
  const config = useMemo(() => {
    return configFn({
      designerRef,
    })
  }, [])

  // 保存到 localStorage
  const save = useCallback((all?) => {
    console.log('>>>>保存')
    setChanged(0)
    config.save(all)
  }, [])

  // 导出
  const handleExport = useCallback((toZip: boolean, values: ExportConfig) => {
    setExportPopoverVisible(false)
    onMessage('loading', '导出中...', 0)
    const configJson = designerRef.current.toJSON({
      withDiagrams: true,
      withIOSchema: true,
    })
    vsCodeMessage
      .call('export', {
        configJson,
        ...values,
        toZip,
      })
      .then((res) => {
        console.log('>>>>>下载完成', res)
        if (res.success) {
          onMessage('success', res.message)
        } else {
          onMessage('error', res.message)
        }
      })
  }, [])

  return (
    <div className='ide'>
      {/* 顶部工具栏 */}
      <div className='toolbar'>
        <div className={'logo'}>MyBricks</div>
        <div className={'btns'} id={'toolbarBtns'} />
        <div>
          <button className={'primary'} onClick={save}>
            {changed ? '*' : ''}保存
          </button>
          <Popover
            title='导出应用的源代码'
            open={exportPopoverVisible}
            onOpenChange={setExportPopoverVisible}
            trigger='click'
            placement='bottomRight'
            arrow={false}
            content={
              <ExportContent
                onExport={handleExport}
                onClose={() => setExportPopoverVisible(false)}
              />
            }
          >
            <VerticalAlignBottomOutlined />
          </Popover>
        </div>
      </div>

      {/* 设计器主区域 */}
      <div className={'designer'}>
        <SPADesigner
          config={config}
          ref={designerRef}
          onLoad={(e) => console.log('loaded')}
          onMessage={onMessage}
          onEdit={() => setChanged(changed + 1)}
        />
      </div>
    </div>
  )
}

function ExportContent(Iprops: {
  onClose: () => void
  onExport: (toZip: boolean, values: ExportConfig) => void
}) {
  const { onClose, onExport } = Iprops
  const defaultValues = Object.assign(
    {
      projectName: 'my_project',
    },
    JSON.parse(localStorage.getItem(STORAGE_KEY_EXPORT) || '{}')
  ) as ExportConfig

  const [form] = Form.useForm()
  const [formValues, setFormValues] = useState(defaultValues)

  const onSelectDir = () => {
    vsCodeMessage.call('selectExportDir').then((res) => {
      if (res?.path) {
        const dir = res.path
        form.setFieldValue('exportDir', dir)
        save('exportDir', dir)
      }
    })
  }

  const onClearDir = () => {
    form.setFieldValue('exportDir', '')
    save('exportDir', '')
  }

  const handleExport = useCallback(
    (toZip: boolean) => {
      onExport(toZip, formValues)
    },
    [onExport, formValues]
  )

  const save = useCallback(
    (key: keyof ExportConfig, value: ExportConfig[keyof ExportConfig]) => {
      console.log(value)
      const exportConfig = { ...formValues, [key]: value }
      setFormValues(exportConfig)
      localStorage.setItem(STORAGE_KEY_EXPORT, JSON.stringify(exportConfig))
    },
    [formValues]
  )

  return (
    <div>
      <Form
        form={form}
        layout='vertical'
        size='small'
        initialValues={defaultValues}
      >
        <Form.Item
          label='应用名称'
          name='projectName'
          rules={[
            {
              validator: (_, value: string) =>
                /^[a-zA-Z][a-zA-Z0-9_]*$/.test(value)
                  ? Promise.resolve()
                  : Promise.reject(
                      new Error('以字母开头，仅支持字母、数字以及下划线')
                    ),
            },
          ]}
        >
          <Input
            placeholder='请输入应用名称'
            onBlur={() => {
              form
                .validateFields(['projectName'])
                .then((values: ExportConfig) => {
                  save('projectName', values.projectName)
                })
            }}
          />
        </Form.Item>
        <Form.Item label='应用导出目录' name='exportDir'>
          {form.getFieldValue('exportDir') ? (
            <div>
              <span>{form.getFieldValue('exportDir')}</span>
              <Button onClick={onClearDir}>重置</Button>
            </div>
          ) : (
            <Button type='primary' onClick={onSelectDir}>
              配置目录
            </Button>
          )}
        </Form.Item>

        <Form.Item shouldUpdate>
          {() => (
            <div>
              <Button onClick={onClose}>取消</Button>
              {!!form.getFieldValue('exportDir') && (
                <Button
                  type='primary'
                  disabled={
                    form.getFieldsError().filter(({ errors }) => errors.length)
                      .length
                  }
                  onClick={() => handleExport(false)}
                >
                  同步应用
                </Button>
              )}
              <Button
                type='primary'
                disabled={
                  form.getFieldsError().filter(({ errors }) => errors.length)
                    .length
                }
                onClick={() => handleExport(true)}
              >
                导出应用
              </Button>
            </div>
          )}
        </Form.Item>
      </Form>
    </div>
  )
}
