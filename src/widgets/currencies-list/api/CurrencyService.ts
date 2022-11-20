import { fetchAPI } from 'shared/api'

export interface CurrencyApi {
  code: string
  name: string
  current_price: number
  day_change_pct: number
  day_change: number
  month_change_pct: number
  month_change: number
}

export interface CurrencyList {
  currencies: CurrencyApi[]
}

export interface Currency {
  name: string
  code: string
  currentPrice: number
  dayChange: number
  dayChangePct: number
  monthChangePct: number
  monthChange: number
}

export interface CurrencyDataApi {
  code: string
  price_data: {
    date: string
    price: number
  }[]
}

export interface CurrencyData {
  code: string
  priceData: {
    date: string
    price: number
  }[]
}

export interface CurrencyService {
  getList(code: string): Promise<CurrencyList>
  getData(code: string, days: number, base: string): Promise<CurrencyDataApi>
}

export class _CurrencyServiceImpl implements CurrencyService {
  getList(code: string): Promise<CurrencyList> {
    return fetchAPI.get(`/currencies/list?code=${code}`)
  }
  getData(code: string, ndays: number, base: string): Promise<CurrencyDataApi> {
    return fetchAPI.get(
      `/currencies/data?code=${code}&ndays=${ndays}&base=${base}`
    )
  }
}

export const CurrencyService = new _CurrencyServiceImpl()
