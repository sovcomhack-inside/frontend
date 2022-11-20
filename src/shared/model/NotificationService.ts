import { makeAutoObservable } from 'mobx'

window.addEventListener('unhandledrejection', (e) => {
  console.log(e)
})

class _NotificationService {
  show: boolean = false
  message: string | null = ''
  description?: string | null = ''
  type: 'success' | 'error' | null = null

  constructor() {
    makeAutoObservable(this)
  }

  error = (message: string = 'Ошибка', description?: string) => {
    this.show = true
    this.message = message
    this.description = description
    const timer = setTimeout(() => {
      this.show = false
    }, 5000)
  }

  success = (message: string = 'Успешно', description?: string) => {
    this.show = true
    this.message = message
    this.description = description
    const timer = setTimeout(() => {
      this.show = false
    }, 5000)
  }
}

export const NotificationService = new _NotificationService()
