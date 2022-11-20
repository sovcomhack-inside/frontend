import { computed, makeAutoObservable, observable } from 'mobx'
import { AuthorizationService, fetchAPI } from 'shared/api'
import { AuthService, UserSignupApi } from 'shared/api/authorization-service'
import { IUserModel, UserModel } from 'shared/model'

class PassportModel {
  fullName: string = ''
  seriaAndNumber: string = ''
  date: string = ''
  givenBy: string = ''
  code: string = ''
  constructor() {
    makeAutoObservable(this)
  }

  setName = (value: string) => {
    this.fullName = value
  }

  setSeriaAndNumber = (value: string) => {
    this.seriaAndNumber = value
  }

  setDate = (value: string) => {
    this.date = value
  }
  setGivenBy = (value: string) => {
    this.givenBy = value
  }

  setCode = (value: string) => {
    this.code = value
  }
}

const PassportInstance = new PassportModel()

export class _AuthModel {
  name: string = ''
  email: string = ''
  password: string = ''
  confirmedPassword: string = ''
  phone: string = ''

  passport

  @computed
  get phoneWithPlus(): string {
    return this.phone.startsWith('+') ? this.phone : `+${this.phone}`
  }

  @computed get isConfirmed(): boolean {
    return this.password === this.confirmedPassword
  }

  constructor() {
    makeAutoObservable(this, {
      passport: observable,
    })
    this.passport = PassportInstance
  }

  setName = (value: string) => {
    this.name = value.split(',')[0]
  }

  setEmail = (value: string) => {
    this.email = value
  }

  setPassword = (value: string) => {
    this.password = value
  }

  setConfirmedPassword = (value: string) => {
    this.confirmedPassword = value
  }

  setPhone = (value: string) => {
    this.phone = value
  }
}

export const AuthModel = new _AuthModel()
