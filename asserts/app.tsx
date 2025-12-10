/**
 * MyBricks 主应用入口
 */
declare const React: any;
declare const ReactDOM: any;

const { useState, useRef, useMemo, useCallback, useEffect } = React;
const rootEl = document.getElementById('root');

// MyBricks SPA Designer 引擎
const { SPADesigner } = (window as any).mybricks

// 获取配置函数（由 config.tsx 挂载）
const configFn = (window as any).config;

// 渲染应用
if (rootEl) {
    const root = ReactDOM.createRoot(rootEl);
    root.render(<App />);
}

/**
 * 主应用组件
 */
function App() {
    // 内容变更计数
    const [changed, setChanged] = useState(0)

    // 消息提示处理
    const onMessage = useCallback((type, msg) => {
        message.destroy()
        message[type](msg)
    }, [])

    // 设计器实例引用
    const designerRef = useRef(null)

    // 初始化配置
    const config = useMemo(() => {
        return configFn({
            designerRef
        })
    }, [])

    // 保存到 localStorage
    const save = useCallback((all?) => {
        setChanged(0)
        config.save(all)
    }, [])

    return (
        <div className='ide'>
            {/* 顶部工具栏 */}
            <div className='toolbar'>
                <div className={'logo'}>MyBricks</div>
                <div className={'btns'} id={'toolbarBtns'} />
                <button className={'primary'} onClick={save}>
                    {changed ? '*' : ''}保存
                </button>
            </div>
            
            {/* 设计器主区域 */}
            <div className={'designer'}>
                <SPADesigner 
                    config={config}
                    ref={designerRef}
                    onLoad={e => console.log('loaded')}
                    onMessage={onMessage}
                    onEdit={() => setChanged(changed + 1)}
                />
            </div>
        </div>
    )
}

