import { action, computed, makeAutoObservable, reaction } from 'mobx'
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
  selected: string | null = null
  days: number = 15
  constructor() {
    makeAutoObservable(this)
  }

  @action
  setSelected(code: string) {
    this.selected = code
  }

  @action
  setDay(n: number) {
    this.days = n
  }

  @action
  private apiToData(api: CurrencyApi): Currency {
    return {
      code: api.code,
      currentPrice: Math.ceil(api.current_price),
      dayChange: Math.ceil(api.day_change),
      dayChangePct: Math.ceil(api.day_change),
      monthChange: Math.ceil(api.month_change),
      monthChangePct: Math.ceil(api.month_change_pct),
      name: api.name,
    }
  }

  @action
  _fetchList = async () => {
    this.status = FetchStatuses.fetch
    try {
      const data: CurrencyApi[] = (await CurrencyService.getList('RUB'))
        .currencies
      const formattedData: Currency[] = data.map(this.apiToData)
      this._list = formattedData
      this.status = FetchStatuses.idle
    } catch (err: any) {
      NotificationService.error(err?.message)
    }
  }

  @action
  _fetchData = async () => {
    this.status = FetchStatuses.fetch
    if (this.selected == null) {
      throw new Error('Selected string is null')
    }
    try {
      const data: CurrencyDataApi = await CurrencyService.getData(
        this.selected,
        this.days,
        'RUB'
      )

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

  @action
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
    if (this.selected == null) {
      throw new Error('Selected string is null')
    }
    if (this._data && this._data.code === this.selected) {
      return this._data
    }
    this._fetchData()
    return this._data
  }

  @computed
  findByCode = (code: string | undefined | null): Currency | undefined => {
    return this.list?.find((curr) => curr.code === code)
  }

  @computed
  get getPoints() {
    const res = this.data?.priceData.map(({ date, price }) => {
      return {
        date,
        uv: price,
      }
    })
    return res
  }
}

export const CurrencyModel = new _CurrencyModel()
reaction(
  () => CurrencyModel.days,
  () => CurrencyModel._fetchData()
)
