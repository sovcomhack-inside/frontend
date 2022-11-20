import {
  makeObservable,
  observable,
  computed,
  autorun,
  makeAutoObservable,
  action,
} from 'mobx'
import { fetchAPI } from 'shared/api'
import { NotificationService } from './NotificationService'
import { FetchStatuses } from './types'

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

export interface UserAccountApi {
  number: string
  user_id: string
  currency: string
  cents: number
  created_at: string
}

export interface IUserAccount {
  number: string
  userId: string
  currency: string
  cents: number
  createdAt: string
}

export interface IUserModel {
  firstName: string
  lastName: string
  email: string
  id: number
}

class _UserModel implements Omit<IUserModel, 'id'> {
  id: number | null = null
  firstName: string = ''
  lastName: string = ''
  email: string = ''
  status: FetchStatuses = FetchStatuses.idle
  _accounts: IUserAccount[] | null = null

  constructor() {
    makeAutoObservable(this)
  }

  private _fetchAccounts = async () => {
    this.status = FetchStatuses.fetch
    const data: UserAccountApi[] = await fetchAPI.get('/currencies/list')
    const formattedData: IUserAccount[] = data.map((d) => ({
      cents: d.cents,
      createdAt: d.created_at,
      currency: d.currency,
      number: d.number,
      userId: d.user_id,
    }))
    this._accounts = formattedData
    this.status = FetchStatuses.idle
  }

  @computed
  get accounts(): IUserAccount[] | null {
    if (this._accounts) {
      return this._accounts
    }
    this._fetchAccounts()
    return this._accounts
  }

  @action
  public remove = () => {}
}

export const UserModel = new _UserModel()
