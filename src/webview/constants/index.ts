export const DEFAULT_API_HOST = 'https://my.mybricks.world'
export const DEFAULT_AI_API_HOST = 'https://ai.mybricks.world'

export const COMPONENT_NAMESPACE = {
  get systemPage() {
    return 'mybricks.taro.systemPage'
  },
  get systemWebview() {
    return 'mybricks.taro.systemWebview'
  },
  get popup() {
    return 'mybricks.taro.popup'
  },
}

export const SCENE_TEMPLATES = {
  page: ({ title }) => {
    return {
      type: 'normal',
      title: title,
      template: {
        namespace: COMPONENT_NAMESPACE.systemPage,
        deletable: false,
        asRoot: true,
        data: {
          useTabBar: false,
        },
      },
      inputs: [
        {
          id: 'open',
          title: '打开',
          schema: {
            type: 'object',
          },
        },
      ],
    }
  },
  tabbarPage: ({ title }) => {
    return {
      type: 'normal',
      title: title,
      template: {
        namespace: COMPONENT_NAMESPACE.systemPage,
        deletable: false,
        asRoot: true,
      },
      inputs: [
        {
          id: 'open',
          title: '打开',
          schema: {
            type: 'object',
          },
        },
      ],
    }
  },
}

export const DEFAULT_USER = {
  name: '用户',
  avatar:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABElJREFUaEPNWr1u1EAQ3lGuoKBMT9LxFknegg7yEF4pBUpSRdpr6Cm4PAnHW9BhOh6A8pxFY+1a4/GsZ8c2iJNOIMXene+bb3529sBt9Hl6errY7XbvY4wXzjn6bdMW+G//fwB4bprmuMXWsHQRYvC1cw6/1g+CQRDfvPcH68v5+UUA9vv9fYzxYemmwnstAByapnm0rmkCoBjeGxFj/AkA7el0au/u7lr0FBq12+0uUF4A8CbGWPKaGUgVADTi7OzsiyAV84aZ4bQmArlPMUPJb7uuu0ECNI+oANJGP9hCiw3nBs0AqQIxC2C/31/HGL/STQHgYYlWNSZJUqCxpRJVBCAYj4vdbpX+SoCSR5C0PnZS2i2SJgKQjK/VpMZ0zd8FEEXyJgCkl733lzUbb/mMkDjEmJgACCGg+4bC1HXdZU024MYnL/ZpE4tVTqsWkDVkjgCEED445zBdZu3dWDUfQsD3cZ3JBxPA6XR6thAiyPmWVm4OANNlHzzWbJM2QuOH4CuwbU4GjNiWSnoAMPeQ5vZCrcA+B41tpcprkaYgpcELFEAkho7cpAFgcSMyLHjo6L2/0dbOfy8R3ANYwz7vj+aYnWNSA8KzUpZ4BkADz8Q+BVATNwzwwXt/qxlf8ELvwQxgkI9Fm8l7Q9oFADVrsaxikhGLtT6YgadO773a4FHGQghD5qoFH0IYCFuw34gwBEDlY3Jp8oAJgMRirYTwOS5ZDsCk/wRgIMAaAzXPFyp87pCPCMCkYb4gl2BFFhrOFlsBMElAcjeNg1S8Jm332jqQ9+USRA8sDii26KiHd859xy8AnMcY3zrnzin42oDnhP0VACm43jnnPscYX88FJQD8ds59bJrmkyV4WeYbSEcPrJKQoYnj9pqbOlxA8sDiIJ4Zs+A0AeXzCicqLy8vv1BKW0w1eCFcnIX4wScF7+xwqnBwR2Kr6w/Legew9jI89yddmFuCNEelE4gqELzwIgA6OhkdFgopc3Rqs7AnFKXRiLKmLtCYxd4L+GFEa8ho2l1jfAbD4kgdZvG0n7tRGsjFGQxzn0k2pZQpTB+KUuL6x1bcdKCh6DVPWXJ8bYPHEkfft/UAak5KDP0m7LPiRMc5k6ay1PZXH+qZfMxdq+YRFgsTgli/NT3Ucy/wjLC2YlcAKGbDuUPX3GBrVOqp/qynKM14QcZDIJsGW3PzyDzH77ruaJms1RjPutrrPHkT5k0Taf23w91U8Wlgi0VWPMALyNUCY2Fae1a60iql7eIEggdOuuN9XHMlqhkutMv9K3M1R7ti4tep6pVPjZGlZ6T2XCuY6gxIuvKpaZ0tQJK3+W1l1YFHBUDcWrxmxQsM6z0CORtgd8tH8tWVvgpABpF6eGlDfGT46QC96CbvZiOv/vlFN5WDwpxFOfTZxbFV7QFuGbmgvipdKSlo+l+vAMBxzb3zYgCCV1AiKI/Zn9ugvJbETImMPx7WoOVJT98YAAAAAElFTkSuQmCC',
}
