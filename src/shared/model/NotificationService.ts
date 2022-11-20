import { action, makeAutoObservable } from 'mobx'

window.addEventListener('unhandledrejection', (e) => {
  NotificationService.error(e.reason.message)
})

class _NotificationService {
  show: boolean = false
  message: string | null = ''
  description?: string | null = ''
  type: 'success' | 'error' | null = null

  constructor() {
    makeAutoObservable(this)
  }

  @action
  private clear() {
    this.show = false
    this.type = null
    this.description = null
    this.message = null
  }

  error = (message: string = 'Ошибка', description?: string) => {
    // this.show = true
    // this.message = message
    // this.description = description
    // this.type = 'error'
    // const timer = setTimeout(() => {
    //   this.clear()
    // }, 5000)
  }

  success = (message: string = 'Успешно', description?: string) => {
// this.show = true
// this.message = message
// this.description = description
// this.type = 'success'
// const timer = setTimeout(() => {
//   this.clear()
// }, 5000)
  }
}

export const NotificationService = new _NotificationService()
