import React, { useCallback } from 'react'
import { View as App } from '@mybricks/sdk-for-app/ui'
import MyDesigner from './modules/designer'
import logger from '@/utils/logger'

export default function () {
  const handler = useCallback((data) => {
    /**
     * data
     *  - fileId 文件ID
     *  - user 登录用户信息
     *  - config 配置信息
     *  - defaultComlibs 默认组件库
     *  - fileContent
     *    - name 文件名
     *    - version 当前版本号
     *    - content
     *      - dumpJson 页面协议
     *      - appConfig 应用级配置
     *      - debug 应用级调试配置
     *      - comlibs 组件库配置
     *      - tabbar 底部导航栏
     *      - wxConfig 微信配置
     */
    logger('launch').log(data)
  }, [])
  return (
    <MyDesigner appData={null} />
    // <App
    //   onLoad={() => {
    //     return <MyDesigner appData={null} />
    //   }}
    // />
  )
}
