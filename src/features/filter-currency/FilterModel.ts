import { makeAutoObservable } from 'mobx'

export enum SortType {
  asc = 'asc',
  desc = 'desc',
}

export enum SortField {
  price = 'По цене',
  desc = 'Название',
  byDay = 'Изменение за день',
  byHalfYear = 'Изменение за полгода',
}

export const sortTranslate = {
  [SortType.asc]: 'по возрастанию',
  [SortType.desc]: 'по убыванию',
}

class _FilterModel {
  type: SortType | null = null
  field: SortField | null = null

  constructor() {
    makeAutoObservable(this)
  }

  setType(type: SortType) {
    this.type = type
  }
  setField(field: SortField) {
    this.field = field
  }
}

export const FilterModel = new _FilterModel()
