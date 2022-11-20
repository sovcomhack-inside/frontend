import { Currency } from 'entities/currency'
import { FilterCurrency } from 'features/filter-currency'
import { SearchCurrency } from 'features/search-currency'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { FetchStatuses } from 'shared/model'

import s from './currencies-list.scss'
import { CurrencyListModel } from './model/CurrencyListModel'

export const CurrenciesList = observer(() => {
  return (
    <div className={s.ListWithFilters}>
      <div className={s.Filters}>
        <SearchCurrency placeholder={'Поиск'} />
        <FilterCurrency popupClass={s.FilterPopup} />
      </div>
      <div className={s.List}>
        {CurrencyListModel.data &&
          CurrencyListModel.data.map((curr) => <Currency currency={curr} />)}
        {CurrencyListModel.data &&
          CurrencyListModel.status === FetchStatuses.fetch && (
            <span color={'red'}>'Загрузка'</span>
          )}
      </div>
    </div>
  )
})
