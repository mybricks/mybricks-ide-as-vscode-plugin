declare const React: any;
declare const ReactDOM: any;

const { useState, useRef, useMemo, useCallback, useEffect } = React;
const rootEl = document.getElementById('root');

const { SPADesigner } = (window as any).mybricks//MyBricks SDA引擎

// 从全局变量获取 config 函数（appConfig.tsx 会将其挂载到 window 上）
const configFn = (window as any).config;

if (rootEl) {
    const root = ReactDOM.createRoot(rootEl);
    root.render(<App />);
}

function App() {
    const [changed, setChanged] = useState(0)

    const onMessage = useCallback((type, msg) => {
        message.destroy()
        message[type](msg)
    }, [])

    const designerRef = useRef(null)

    //MyBricks 配置
    const config = useMemo(() => {
        return configFn({
            designerRef
        })
    }, [])

    //保存文件,目前是暂存在localstorage
    const save = useCallback((all?) => {
        setChanged(0)
        config.save(all)
    }, [])

    return (
        <div className='ide'>
            <div className='toolbar'>
                <div className={'logo'}>MyBricks</div>
                <div className={'btns'} id={'toolbarBtns'} />
                <button className={'primary'} onClick={save}>{changed ? '*' : ''}保存</button>
                {/* <button onClick={preview}>预览</button>
                <button onClick={publish}>发布</button> */}
            </div>
            <div className={'designer'}>
                <SPADesigner config={config}
                    ref={designerRef}
                    onLoad={e => {
                        console.log('loaded')
                    }}
                    onMessage={onMessage}
                    onEdit={(...args) => {
                        setChanged(changed + 1)
                    }}
                />
            </div>
        </div>
    )
}

