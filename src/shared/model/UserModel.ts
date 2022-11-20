import { computed, makeAutoObservable, action } from 'mobx'
import {
  UserAccount,
  UserAccountApi,
  UserService,
} from 'shared/api/UserService/UserService'
import { CurrencyModel } from 'widgets'
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

class _UserModel {
  id: number | null = null
  firstName: string = ''
  lastName: string = ''
  email: string = ''
  status: FetchStatuses = FetchStatuses.idle
  _accounts: UserAccount[] | null = null

  constructor() {
    makeAutoObservable(this)
  }

  private fromApiToNormal(data: any): UserAccount {
    const account: UserAccountApi['account'] = data.account
      ? data.account
      : data
    return {
      balance: account.balance,
      createdAt: account.created_at,
      currency: account.currency,
      number: account.number,
      userId: account.user_id,
    }
  }

  private _fetchAccounts = async () => {
    this.status = FetchStatuses.fetch
    const data: UserAccountApi[] | null = (await UserService.getAccounts())
      .accounts
    const formattedData: UserAccount[] =
      data?.map((d) => this.fromApiToNormal(d)) ?? []
    this._accounts = formattedData
    this.status = FetchStatuses.idle
  }

  @computed
  get accounts(): UserAccount[] | null {
    if (this._accounts) {
      return this._accounts
    }
    this._fetchAccounts()
    return this._accounts
  }

  getAccountByCode = (code: string | undefined) => {
    if (!code) return undefined
    return this.accounts?.find((acc) => acc.currency === code)
  }

  public createAccount = async (code: string | null) => {
    if (code == null) {
      throw new Error('Selected code is null')
    }
    const newAcc: UserAccountApi = await UserService.createAccount({
      currency: code,
    })
    this._fetchAccounts()
    NotificationService.success('Успешно')
  }
}

export const UserModel = new _UserModel()
