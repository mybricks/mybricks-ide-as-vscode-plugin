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
