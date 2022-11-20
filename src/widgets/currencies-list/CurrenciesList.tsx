import { WithMenuComponent } from 'app/ui/WithMenuComponent'
import { Currency } from 'entities/currency'
import { FilterCurrency } from 'features/filter-currency'
import { SearchCurrency } from 'features/search-currency'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FetchStatuses } from 'shared/model'
import { WithBackbuttonPage } from 'shared/pages/with-backbutton-page'
import { WithNamePage } from 'shared/pages/with-name-page'

import s from './currencies-list.scss'
import { CurrencyModel } from './model/CurrencyListModel'

interface CurrenciesListProps {
  onCurrencyClick?: (code: string) => void
}

export const CurrenciesList: React.FC<CurrenciesListProps> = observer(
  (props) => {
    const nav = useNavigate()
    console.log(props.onCurrencyClick)
    return (
      <WithMenuComponent>
        <WithBackbuttonPage onClick={() => nav('/profile')}>
          <WithNamePage name="Валюты">
            <div className={s.ListWithFilters}>
              <div className={s.Filters}>
                <SearchCurrency placeholder={'Поиск'} />
                <FilterCurrency popupClass={s.FilterPopup} />
              </div>
              <div className={s.List}>
                {CurrencyModel.list &&
                  CurrencyModel.list.map((curr) => (
                    <Currency currency={curr} onClick={props.onCurrencyClick} />
                  ))}
                {CurrencyModel.list &&
                  CurrencyModel.status === FetchStatuses.fetch && (
                    <span color={'red'}>'Загрузка'</span>
                  )}
              </div>
            </div>
          </WithNamePage>
        </WithBackbuttonPage>
      </WithMenuComponent>
    )
  }
)
