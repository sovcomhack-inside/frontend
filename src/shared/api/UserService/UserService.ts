import { fetchAPI } from 'shared/api'
import { BuyOrSellAccount, Operation } from './utils'

export interface UserAccountApi {
  account: {
    number: string
    user_id: string
    currency: string
    balance: number
    created_at: string
  }
}

export interface UserAccountsApi {
  accounts: UserAccountApi[] | null
}

export interface UserAccount {
  number: string
  userId: string
  currency: string
  balance: number
  createdAt: string
}

export interface CreateAccount {
  currency: string
}

export interface RefillAccount {
  account_number: string
  debit_amount_cents: number
}

interface AccountInfo {
  account_number: string
  old_balance: number
  new_balance: number
  purpose: string
}

interface WithDrawAccount {
  account_number: string
  credit_amount_cents: number
}

interface BuyAccontApi {
  account_number_from: string
  currency_from: string
  desired_amount_cents: number
  account_number_to: string
  currency_to: string
}

interface SellAccontApi {
  account_number_from: string
  currency_from: string
  desired_amount_cents: number
  account_number_to: string
  currency_to: string
}
interface ListOperationApi {
  account_numbers_in: string[]
  operation_types_in?: string[]
}

export interface OperationsApi {
  operations: Operation[]
}

export interface UserService {
  createAccount(data: CreateAccount): Promise<UserAccountApi>
  getAccounts(): Promise<UserAccountsApi>
  refillAccount(data: RefillAccount): Promise<AccountInfo>
  withdrawAccount(data: WithDrawAccount): Promise<AccountInfo>
  sellAccount(data: SellAccontApi): Promise<BuyOrSellAccount>
  buyAccount(data: BuyAccontApi): Promise<BuyOrSellAccount>
  operationList(data: ListOperationApi): Promise<OperationsApi>
}

export class _UserServiceImpl implements UserService {
  createAccount(data: CreateAccount): Promise<UserAccountApi> {
    return fetchAPI.post('/accounts/create', data)
  }

  getAccounts(): Promise<UserAccountsApi> {
    return fetchAPI.get('/accounts/list')
  }
  refillAccount(data: RefillAccount): Promise<AccountInfo> {
    return fetchAPI.post('/accounts/refill', data)
  }
  withdrawAccount(data: WithDrawAccount): Promise<AccountInfo> {
    return fetchAPI.post('/accounts/withdraw', data)
  }
  buyAccount(data: BuyAccontApi): Promise<BuyOrSellAccount> {
    return fetchAPI.post('/accounts/buy', data)
  }
  sellAccount(data: SellAccontApi): Promise<BuyOrSellAccount> {
    return fetchAPI.post('/accounts/sell', data)
  }

  operationList(data: ListOperationApi): Promise<OperationsApi> {
    return fetchAPI.post('/operations/list', data)
  }
}

export const UserService = new _UserServiceImpl()
