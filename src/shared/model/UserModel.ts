import { AuthModel } from 'features/auth/model'
import { computed, makeAutoObservable, action } from 'mobx'
import { AuthService, fetchAPI } from 'shared/api'
import {
  RefillAccount,
  UserAccount,
  UserAccountApi,
  UserService,
} from 'shared/api/UserService/UserService'
import { Operation } from 'shared/api/UserService/utils'
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
  mainAccountNumber: string | null = null
  operations: Operation[] | null = null

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

  getAccountByNumber = (number: string | undefined) => {
    if (!number) return undefined
    return this.accounts?.find((acc) => acc.number === number)
  }

  getAccountByCode = (code: string | undefined) => {
    if (!code) return undefined
    return this.accounts?.find((acc) => acc.currency === code)
  }

  createAccount = async (code: string | null) => {
    if (code == null) {
      throw new Error('Selected code is null')
    }
    UserService.createAccount({ currency: code })
    await this._fetchAccounts()
  }

  depositMoney = async (amount: number) => {
    if (this.mainAccountNumber == null) {
      throw new Error('Selected code is null')
    }
    const response = await UserService.refillAccount({
      account_number: this.mainAccountNumber,
      debit_amount_cents: amount,
    })
    const acc = this.getAccountByNumber(response.account_number)
    if (acc) {
      acc.balance = response.new_balance
    }
  }

  fetchHistory = async () => {
    if (this.mainAccountNumber == null) {
      AuthModel.getUser()
    }
    if (this.mainAccountNumber != null) {
      const response = await UserService.operationList({
        account_numbers_in: [this.mainAccountNumber],
      })
      this.operations = response.operations
    }
  }

  @computed
  get history() {
    if (!this.operations) {
      this.fetchHistory()
    }
    return this.operations
  }

  async buy() {
    await UserService.buyAccount({
      currency_from: 'RUB',
      currency_to: 'USD',
      account_number_from: 'USD',
      account_number_to: 'RUB',
      desired_amount_cents: 50,
    })
    NotificationService.success()
  }

  @computed get mainAccount() {
    return this.accounts?.find((acc) => acc.number === this.mainAccountNumber)
  }
}

export const UserModel = new _UserModel()
