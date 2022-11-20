import { fetchAPI } from 'shared/api'

export interface CurrencyApi {
  code: string
  name: string
  current_price: number
  day_change_pct: number
}

export interface CurrencyList {
  currencies: CurrencyApi[]
}

export interface Currency {
  name: string
  code: string
  price: number
  percent: number
}

export interface CurrencyDataApi {
  code: string
  price_data: number[]
}

export interface CurrencyData {
  code: string
  priceData: number[]
}

export interface CurrencyService {
  getList(code: string): Promise<CurrencyList>
  getData(code: string, days: number): Promise<CurrencyDataApi>
}

export class _CurrencyServiceImpl implements CurrencyService {
  getList(code: string): Promise<CurrencyList> {
    return fetchAPI.get(`/currencies/list?code=${code}`)
  }
  getData(code: string, daysNumber: number): Promise<CurrencyDataApi> {
    return fetchAPI.get(
      `/currencies/data?code=${code}&daysNumber=${daysNumber}`
    )
  }
}

export const CurrencyService = new _CurrencyServiceImpl()
