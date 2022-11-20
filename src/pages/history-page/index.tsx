import { observer } from 'mobx-react-lite'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Operation } from 'shared/api/UserService/utils'
import { UserModel } from 'shared/model'
import { WithBackbuttonPage } from 'shared/pages/with-backbutton-page'
import s from './history.scss'

export const HistoryPage: React.FC = observer(() => {
  const nav = useNavigate()
  return (
    <WithBackbuttonPage onClick={() => nav('/profile')}>
      <div className={s.items}>
        {UserModel.history?.map((oper) => (
          <div className={s.Item}>
            <span className={s.purpose}>{oper.purpose}</span>
            <span className={s.before}>Было: {oper.amount_cents_from}</span>
            <span className={s.after}>Стало: {oper.amount_cents_to}</span>
            <span className={s.curBefore}>Валюта до{oper.currency_from}</span>
            <span className={s.curAfter}>Валюта после{oper.currency_to}</span>
            <span className={s.rate}>Курс {oper.exchange_rate_ratio}</span>
          </div>
        ))}
      </div>
    </WithBackbuttonPage>
  )
})
