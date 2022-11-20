import {
  makeObservable,
  observable,
  computed,
  autorun,
  makeAutoObservable,
  action,
} from 'mobx'
import {
  AuthService,
  UserLoginApi,
  UserSignupApi,
} from 'shared/api/authorization-service'

type RequestStatus = 'Заявка создана' | 'В обработке'

type RetailType = 'Покупка' | 'Продажа'

export interface CurrencyRequest {
  code: string
  name: string
  retail: {
    price: string
    total: string
    type: RetailType
  }
  status: RequestStatus
}

export interface IUserModel {
  firstName: string
  lastName: string
  email: string
  requests: CurrencyRequest[]
}

class _UserModel implements IUserModel {
  firstName: string = ''
  lastName: string = ''
  email: string = ''
  requests: CurrencyRequest[] = [
    {
      code: 'USD',
      name: 'Доллар США',
      retail: {
        price: '59.03 ₽',
        total: '+42.00 $',
        type: 'Покупка',
      },
      status: 'В обработке',
    },
    {
      code: 'USD',
      name: 'Доллар США',
      retail: {
        price: '59.03 ₽',
        total: '+42.00 $',
        type: 'Продажа',
      },
      status: 'Заявка создана',
    },
  ]

  status: 'idle' | 'fetch' | 'failed' | 'done' = 'idle'

  constructor() {
    makeAutoObservable(this)
  }

  @action
  public remove = () => {
    this.requests.splice(0, 1)
  }

  private _signup = async (data: UserSignupApi) => {
    this.status = 'idle'
    this.status = 'fetch'
    const response = await AuthService.signup(data)
    this.status = 'done'
    this.email = data.email
  }
  public signup = (data: UserSignupApi) => {
    this._signup(data)
  }

  private _login = async (data: UserLoginApi) => {
    this.status = 'idle'
    this.status = 'fetch'
    console.log("Xxxx")
    const response = await AuthService.login(data)
    this.status = 'done'
    this.email = data.email
  }
  public login = (data: UserLoginApi) => {
    this._login(data)
  }
}

export const UserModel = new _UserModel()
