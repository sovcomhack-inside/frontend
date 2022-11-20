import { computed, makeAutoObservable } from 'mobx'
import { fetchAPI } from 'shared/api'
import { FetchStatuses } from 'shared/model'
import { NotificationService } from 'shared/model/NotificationService'

export interface Currency {
  name: string
  code: string
  price: number
  percent: number
}

export interface CurrencyApi {
  code: string
  name: string
  current_price: number
  day_change_pct: number
}

class _CurrencyListModel {
  status: FetchStatuses = FetchStatuses.idle
  _data: Currency[] | null = null

  constructor() {
    makeAutoObservable(this)
  }

  _fetchData = async () => {
    this.status = FetchStatuses.fetch
    try {
      const data: CurrencyApi[] = await fetchAPI.get('/currencies/list')
      const formattedData: Currency[] = data.map((d) => ({
        price: d.current_price,
        code: d.code,
        name: d.name,
        percent: d.day_change_pct,
      }))
      this._data = formattedData
      this.status = FetchStatuses.idle
    } catch (err: any) {
      NotificationService.error(err?.message)
    }
  }

  fetchData = () => {
    this._fetchData()
  }

  @computed get data() {
    if (this._data) {
      console.log(this.status)
      return this._data
    }
    this.fetchData()
    console.log(this._data)
    return this._data
  }

  findByCode = (code: string): Currency | undefined => {
    return this.data?.find((curr) => curr.code === code)
  }
}

export const CurrencyListModel = new _CurrencyListModel()
