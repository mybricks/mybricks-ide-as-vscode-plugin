import React, { useEffect, useRef } from 'react'
import { View as App } from '@mybricks/sdk-for-app/ui'
import MyDesigner from './modules/designer'
import logger from '@/utils/logger'

export default function () {
  const appData = useRef<any>({})
  return appData.current && <MyDesigner appData={appData.current} />
}
