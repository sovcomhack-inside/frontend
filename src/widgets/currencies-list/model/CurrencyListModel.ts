import { computed, makeAutoObservable } from 'mobx'
import { FetchStatuses } from 'shared/model'
import { NotificationService } from 'shared/model/NotificationService'
import {
  Currency,
  CurrencyApi,
  CurrencyData,
  CurrencyDataApi,
  CurrencyService,
} from '../api/CurrencyService'

class _CurrencyModel {
  status: FetchStatuses = FetchStatuses.idle
  _list: Currency[] | null = null
  _data: CurrencyData | null = null

  constructor() {
    makeAutoObservable(this)
  }

  _fetchList = async () => {
    this.status = FetchStatuses.fetch
    try {
      const data: CurrencyApi[] = (await CurrencyService.getList('RUB'))
        .currencies
      const formattedData: Currency[] = data.map((d) => ({
        price: d.current_price,
        code: d.code,
        name: d.name,
        percent: d.day_change_pct,
      }))
      this._list = formattedData
      this.status = FetchStatuses.idle
    } catch (err: any) {
      NotificationService.error(err?.message)
    }
  }

  _fetchData = async () => {
    this.status = FetchStatuses.fetch
    try {
      const data: CurrencyDataApi = await CurrencyService.getData('RUB', 15)

      const formattedData: CurrencyData = {
        code: data.code,
        priceData: data.price_data,
      }
      this._data = formattedData
      this.status = FetchStatuses.idle
    } catch (err: any) {
      NotificationService.error(err?.message)
    }
  }

  fetchList = () => {
    this._fetchList()
  }

  @computed get list() {
    if (this._list) {
      return this._list
    }
    this._fetchList()
    return this._list
  }

  @computed get data() {
    if (this._data) {
      return this._data
    }
    this._fetchData()
    return this._data
  }

  findByCode = (code: string | undefined): Currency | undefined => {
    return this.list?.find((curr) => curr.code === code)
  }

  getCurrencyData = () => {
    return this.data
  }
}

export const CurrencyModel = new _CurrencyModel()
