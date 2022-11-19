import classNames from 'classnames'
import React from 'react'
import { AddIcon, PieChartIcon } from 'shared/ui'
import { PageIcon } from 'shared/ui/Icons/PageIcon'
import s from './buttons-block.scss'
export const ButtonsBlock = () => {
  return (
    <div className={s.items}>
      <div className={classNames(s.item, s.add)}>
        <AddIcon />
        <span>Пополнить</span>
      </div>
      <div className={classNames(s.item, s.analytics)}>
        <PieChartIcon />
        <span>Аналитика портфеля</span>
      </div>
      <div className={classNames(s.item, s.about)}>
        <span className={s.title}>Больше о долларе</span>
        <span className={s.subTitle}>История, новости</span>
        <span className={s.dollarIcon}>$</span>
      </div>
      <div className={classNames(s.item, s.reqs)}>
        <span className={s.title}>Реквизиты счета</span>
        <span className={s.subTitle}>Данные счета</span>
        <span className={s.pageIcon}>
          <PageIcon />
        </span>
      </div>
    </div>
  )
}
