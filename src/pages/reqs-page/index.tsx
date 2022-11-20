import React from 'react'
import { useNavigate } from 'react-router-dom'
import { WithBackbuttonPage } from 'shared/pages/with-backbutton-page'
import { WithNamePage } from 'shared/pages/with-name-page'
import s from './reqs-page.scss'

export const ReqsPage = () => {
  const nav = useNavigate()

  return (
    <WithBackbuttonPage onClick={() => nav('/profile')}>
      <WithNamePage name="Реквизиты">
        <div className={s.container}>
          <span>Номер договора</span>
          <span>492318408</span>
          <span>Получатель</span>
          <span>Николай Николаич Николаев</span>
          <span>Номер счета</span>
          <span>382173982173210893721</span>
          <span>Назначение платежа</span>
          <span>
            Перевод средств по договору № 4782167841 Звонарев Никита Никитич НДС
            не облагается
          </span>
          <span>БИК</span>
          <span>0400421321</span>
          <span>Банк получатель</span>
          <span>ООО Moni</span>
          <span>Корр. счет</span>
          <span>04321312321300421321</span>
          <span>КПП при необходимости</span>
          <span>732187632178361287</span>
        </div>
      </WithNamePage>
    </WithBackbuttonPage>
  )
}
