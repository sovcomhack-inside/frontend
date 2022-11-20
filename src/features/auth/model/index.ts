import { computed, makeAutoObservable, observable } from 'mobx'
import { AuthorizationService, fetchAPI } from 'shared/api'
import {
  AuthService,
  UserLoginApi,
  UserSignupApi,
} from 'shared/api/authorization-service'
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

  status: 'idle' | 'fetch' | 'failed' | 'done' = 'idle'
  passport

  @computed
  get phoneWithPlus(): string {
    return this.phone.startsWith('+') ? this.phone : `+${this.phone}`
  }

  @computed get isSignUpButtonDisabled(): boolean {
    return (
      this.password === this.confirmedPassword &&
      !this.email &&
      this.password.length >= 2 &&
      this.confirmedPassword.length >= 2
    )
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

  private _signup = async () => {
    const response = await AuthService.signup({
      email: this.email,
      firstName: this.name.split(' ')[0],
      lastName: this.name.split(' ')[1],
      password: this.password,
    })
    console.log(response)
    this.status = 'idle'
  }
  public signup = () => {
    this._signup()
  }

  private _login = async () => {
    this.status = 'fetch'
    const response = await AuthService.login({
      email: this.email,
      password: this.password,
    })
    console.log(response)
    this.status = 'idle'
  }
  public login = () => {
    this._login()
  }
}

export const AuthModel = new _AuthModel()
