/**
 * MyBricks 主应用入口
 */
declare const React: any
declare const ReactDOM: any

const { useState, useRef, useMemo, useCallback, useEffect } = React
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

const ANTD_CONFIG = {
  theme: {
    token: {
      colorPrimary: '#fa6400',
    },
  },
}
const {
  ConfigProvider,
  Popover,
  Form,
  Input,
  Button,
  message,
  Space,
  Tooltip,
  Flex,
  Alert,
} = (window as any).antd
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
  const [exportLoading, setExportLoading] = useState(false)

  // 消息提示处理
  const onMessage = useCallback((type, msg, duration = 3) => {
    message.destroy()
    message[type](msg, duration)
  }, [])

  // 设计器实例引用
  const designerRef = useRef(null)

  // 初始化配置
  const [initSuccess, setInitSuccess] = useState(false)
  const config = useRef(null)
  useEffect(() => {
    configFn({
      designerRef,
    }).then((_config) => {
      setInitSuccess(true)
      config.current = _config
    })
  }, [designerRef])

  // 保存
  const save = useCallback((all?) => {
    setChanged(0)
    config.current.save(all)
  }, [])

  // 导出
  const handleExport = useCallback(() => {
    // setExportPopoverVisible(false)
    setExportLoading(true)
    onMessage('loading', '导出中...', 0)
    const configJson = designerRef.current.toJSON({
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
            typeof res.message === 'string' ? res.message : '导出失败'
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
            {/* <Popover
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
              <Tooltip title={'导出应用的源代码'}>
                <Button type='text' icon={<VerticalAlignBottomOutlined />} />
              </Tooltip>
            </Popover> */}
          </Space>
        </div>

        {/* 设计器主区域 */}
        <div className={'designer'}>
          {initSuccess && (
            <SPADesigner
              config={config.current}
              ref={designerRef}
              onLoad={(e) => console.log('loaded')}
              onMessage={onMessage}
              onEdit={() => setChanged(changed + 1)}
            />
          )}
        </div>
      </div>
    </ConfigProvider>
  )
}

// function ExportContent(Iprops: {
//   onClose: () => void
//   onExport: (toZip: boolean, values: ExportConfig) => void
// }) {
//   const { onClose, onExport } = Iprops
//   const defaultValues = Object.assign(
//     {
//       projectName: 'my_project',
//     },
//     JSON.parse(localStorage.getItem(STORAGE_KEY_EXPORT) || '{}')
//   ) as ExportConfig

//   const [form] = Form.useForm()
//   const [formValues, setFormValues] = useState(defaultValues)
//   const exportDir = Form.useWatch('exportDir', form)

//   const onSelectDir = () => {
//     vsCodeMessage.call('selectExportDir').then((res) => {
//       if (res?.path) {
//         const dir = res.path
//         form.setFieldValue('exportDir', dir)
//         save('exportDir', dir)
//       }
//     })
//   }

//   const onClearDir = () => {
//     form.setFieldValue('exportDir', '')
//     save('exportDir', '')
//   }

//   const handleExport = useCallback(
//     (toZip: boolean) => {
//       onExport(toZip, formValues)
//     },
//     [onExport, formValues]
//   )

//   const save = useCallback(
//     (key: keyof ExportConfig, value: ExportConfig[keyof ExportConfig]) => {
//       console.log(value)
//       const exportConfig = { ...formValues, [key]: value }
//       setFormValues(exportConfig)
//       localStorage.setItem(STORAGE_KEY_EXPORT, JSON.stringify(exportConfig))
//     },
//     [formValues]
//   )

//   return (
//     <Form
//       className={'export-form'}
//       form={form}
//       layout='vertical'
//       size='small'
//       initialValues={defaultValues}
//     >
//       <Form.Item
//         label='应用名称'
//         name='projectName'
//         rules={[
//           {
//             validator: (_, value: string) =>
//               /^[a-zA-Z][a-zA-Z0-9_]*$/.test(value)
//                 ? Promise.resolve()
//                 : Promise.reject(
//                     new Error('以字母开头，仅支持字母、数字以及下划线')
//                   ),
//           },
//         ]}
//       >
//         <Input
//           placeholder='请输入应用名称'
//           onBlur={() => {
//             form
//               .validateFields(['projectName'])
//               .then((values: ExportConfig) => {
//                 save('projectName', values.projectName)
//               })
//           }}
//         />
//       </Form.Item>
//       <Form.Item label='应用导出目录' name='exportDir' shouldUpdate>
//         {exportDir ? (
//           <div>
//             <span title={exportDir} style={{ marginRight: 8 }}>
//               {exportDir.split(/[\\/]/).pop()}
//             </span>
//             <Button onClick={onClearDir}>重置</Button>
//           </div>
//         ) : (
//           <Button type='primary' onClick={onSelectDir}>
//             配置目录
//           </Button>
//         )}
//       </Form.Item>

//       <Form.Item>
//         <Alert
//           message={
//             <Space direction='vertical' size='small'>
//               <h3 className={'export-alert-txt'}>注意事项</h3>
//               <p className={'export-alert-txt'}>导出当前应用的Taro源代码；</p>
//               <p className={'export-alert-txt'}>
//                 【同步应用】以写文件覆盖的形式直接同步至目标目录下
//               </p>
//               <p className={'export-alert-txt'}>
//                 【导出应用】打包成zip文件导出至目标目录下
//               </p>
//             </Space>
//           }
//           type='warning'
//         />
//       </Form.Item>

//       <Form.Item shouldUpdate style={{ marginBottom: 0 }}>
//         {() => (
//           <Flex gap='small' justify='flex-end'>
//             <Button onClick={onClose}>取消</Button>
//             <Button
//               type='primary'
//               disabled={
//                 !exportDir ||
//                 form.getFieldsError().filter(({ errors }) => errors.length)
//                   .length
//               }
//               onClick={() => handleExport(true)}
//             >
//               导出应用
//             </Button>
//             <Button
//               type='primary'
//               disabled={
//                 !exportDir ||
//                 form.getFieldsError().filter(({ errors }) => errors.length)
//                   .length
//               }
//               onClick={() => handleExport(false)}
//             >
//               同步应用
//             </Button>
//           </Flex>
//         )}
//       </Form.Item>
//     </Form>
//   )
// }
