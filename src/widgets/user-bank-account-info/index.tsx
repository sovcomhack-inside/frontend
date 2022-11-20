import { appCss } from 'app'
import classNames from 'classnames'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { UserModel } from 'shared/model'
import s from './user-bank-acount-info.scss'

// TODO: Функция для преобразований чисел (Intl)

export const UserBankAccountInfo = observer(() => {
  return (
    <div className={s.UserBankAccountInfo}>
      <span className={s.totalAmount}>{UserModel.mainAccount?.balance} ₽</span>
      <div className={s.allTime}>
        <span className={s.absolute}> &nbsp;</span>(
        <span
          className={classNames(s.relative, {
            [s.positive]: true,
            [s.negative]: false,
          })}
        ></span>
        )<span className={appCss.markedText}>&nbsp;всё время</span>
      </div>
      <div className={s.mode}>
        <div className={s.modeItem}>$</div>
      </div>
    </div>
  )
})
