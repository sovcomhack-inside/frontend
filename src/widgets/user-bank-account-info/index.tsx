import { appCss } from 'app'
import classNames from 'classnames'
import React from 'react'
import s from './user-bank-acount-info.scss'

// TODO: Функция для преобразований чисел (Intl)

export const UserBankAccountInfo = () => {
  return (
    <div className={s.UserBankAccountInfo}>
      <span className={s.totalAmount}>15 455 ₽</span>
      <div className={s.allTime}>
        <span className={s.absolute}>77 324 ₽ &nbsp;</span>(
        <span
          className={classNames(s.relative, {
            [s.positive]: true,
            [s.negative]: false,
          })}
        >
          +37%
        </span>
        )<span className={appCss.markedText}>&nbsp;всё время</span>
      </div>
      <div className={s.mode}>
        <div className={s.modeItem}>$</div>
      </div>
    </div>
  )
}
