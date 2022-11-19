import { computed, makeAutoObservable } from 'mobx'
import { fetchAPI } from 'shared/api'
import { FetchStatuses } from 'shared/model'

export interface Currency {
  price: string
  name: string
  code: string
  percent: string
}

class _CurrencyListModel {
  status: FetchStatuses = FetchStatuses.idle
  _data: Currency[] | null = null

  constructor() {
    makeAutoObservable(this)
  }

  _fetchData = async () => {
    console.log('implement fetchData')

    this.status = FetchStatuses.fetch
    console.log(1)
    await new Promise((resolve, reject) => setTimeout(() => resolve(1), 3000))
    console.log(2)
    this._data = [
      {
        percent: '-11',
        code: 'USD',
        name: 'Доллар США',
        price: '63.3',
      },
      {
        percent: '-213',
        code: 'USD',
        name: 'Доллар США',
        price: '63.3',
      },
      {
        percent: '-9',
        code: 'USD',
        name: 'Доллар США',
        price: '63.3',
      },
    ]
    this.status = FetchStatuses.idle
    // return await fetchAPI.get('/currency/list')
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
}

export const CurrencyListModel = new _CurrencyListModel()
