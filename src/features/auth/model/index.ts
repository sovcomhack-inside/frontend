import { computed, makeAutoObservable, observable } from 'mobx'
import { AuthService, User } from 'shared/api/authorization-service'
import { UserModel } from 'shared/model'

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
      !!this.email &&
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
    this.name = value
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

  private fillData(data: User) {
    UserModel.email = data.email
    UserModel.id = data.id
    UserModel.firstName = data.firstName
    UserModel.lastName = data.lastName
    UserModel.mainAccountNumber = data.mainAccountNumber
  }

  private _signup = async () => {
    const response: User = await AuthService.signup({
      email: this.email,
      firstName: this.passport.fullName.split(' ')[0],
      lastName: this.passport.fullName.split(' ')[1],
      password: this.password,
    })

    this.fillData(response)
    this.status = 'idle'
  }
  public signup = () => {
    this._signup()
  }

  private _login = async () => {
    this.status = 'fetch'
    const response: User = await AuthService.login({
      email: this.email,
      password: this.password,
    })
    this.fillData(response)
    this.status = 'idle'
  }

  public login = () => {
    this._login()
  }

  private _logout = async () => {
    await AuthService.logout()
  }

  public logout = () => {
    this._logout()
  }

  private _getUser = async () => {
    const res = await AuthService.getUser()
    UserModel.mainAccountNumber = res.mainAccountNumber
  }

  public getUser = () => {
    this._getUser()
  }
}

export const AuthModel = new _AuthModel()
