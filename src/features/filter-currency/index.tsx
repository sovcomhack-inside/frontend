import classNames from 'classnames'
import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import { WhiteButton } from 'shared/ui'
import { FilterIcon } from 'shared/ui/Icons/FilterIcon'
import s from './filter-currency.scss'
import { FilterModel, SortField, sortTranslate, SortType } from './FilterModel'

export interface FilterCurrencyProps {
  onClick?: () => void
  popupClass?: string
}

export const FilterCurrency: React.FC<FilterCurrencyProps> = observer(
  (props) => {
    const [isFiltersOpen, setIsFiltersOpen] = useState(false)
    const [sort, setSort] = useState(SortType.asc)

    const toggleSort = () =>
      setSort(sort === SortType.asc ? SortType.desc : SortType.asc)

    const toggleFilter = () => setIsFiltersOpen(!isFiltersOpen)

    return (
      <div className={s.FilterCurrency}>
        <span onClick={toggleFilter} className={s.Icon}>
          <FilterIcon />
        </span>
        {isFiltersOpen && (
          <div className={classNames(s.FilterPopup, props.popupClass)}>
            <div className={s.FilterOverlay} onClick={toggleFilter}></div>
            <div className={s.FilterContent}>
              <div className={s.horizontalItem}>
                <span className={s.title}>Сортировать</span>
                <span className={s.sortSwitch} onClick={toggleSort}>
                  {sortTranslate[sort]}
                </span>
              </div>
              {Object.entries(SortField).map(([key, value]) => (
                <div
                  className={classNames(s.sortField, s.horizontalItem)}
                  onClick={() => FilterModel.setField(key as SortField)}
                >
                  <span key={key}>{value}</span>
                  {FilterModel.field === key && <span>&#10004;</span>}
                </div>
              ))}
              <WhiteButton onClick={toggleFilter} value={'Применить'} />
            </div>
          </div>
        )}
      </div>
    )
  }
)
