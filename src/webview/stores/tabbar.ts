/**
 * Tabbar Store
 */

export class TabbarModel {
  private tabbar: any[] = []
  private handlers: { key: string; handler: Function }[] = []

  initFromFileContent = (fileContent: any) => {
    this.tabbar =
      (fileContent && fileContent.extra && fileContent.extra.tabbar) || []
    console.log('tabbar初始化', this.tabbar)
    this.notify()
  }

  get = () => {
    return this.tabbar
  }

  set = (value: any[]) => {
    this.tabbar = value
    this.notify()
  }

  remove = (id: string | number) => {
    this.tabbar = this.tabbar.filter((item) => item.scene.id !== id)
    this.notify()
  }

  on = (key: string, handler: Function) => {
    this.handlers.push({
      key,
      handler,
    })
  }

  off = (key: string) => {
    this.handlers = this.handlers.filter((item) => item.key !== key)
  }

  private notify = () => {
    this.handlers.forEach((item) => {
      item.handler(this.tabbar)
    })
  }
}

export const tabbarModel = new TabbarModel()
