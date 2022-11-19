import {
  makeObservable,
  observable,
  computed,
  autorun,
  makeAutoObservable,
} from 'mobx'

interface Curriency {
  code: string
  price: string
}

class _UserModel {
  price = 0
  amount = 1

  constructor() {
    makeAutoObservable<this, any>(this, {
      firstname: observable,
      lastname: observable,
      email: observable,
    })
  }
}

export const UserModel = new _UserModel()
