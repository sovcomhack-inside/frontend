import React from 'react'
import { BlueButton, Tabs, WhiteButton } from 'shared/ui'
import { GraphTab } from './tabs'

import s from './currency-page.scss'
import { WithBackbuttonPage } from 'shared/pages/with-backbutton-page'
import { WithMenuComponent } from 'app/ui/WithMenuComponent'
import { WithNamePage } from 'shared/pages/with-name-page'
import { useNavigate, useParams } from 'react-router-dom'
import { CurrencyModel } from 'widgets'
import { observer } from 'mobx-react-lite'

export interface CurrencyPageProps {}

export const CurrencyPage: React.FC<CurrencyPageProps> = observer(() => {
  const nav = useNavigate()
  const params = useParams()
  const currency = CurrencyModel.findByCode(params.id)
  const tabs = {
    купить: currency ? (
      <GraphTab graphTabClass={s.graphTab} currency={currency} />
    ) : (
      <div>Валюты нет</div>
    ),
  }

  return (
    <WithMenuComponent>
      <WithBackbuttonPage
        pageTitle="О валюте"
        onClick={() => nav('/currencies')}
      >
        <WithNamePage name={params.id?.toUpperCase()} underName="USDRUB">
          <div className={s.CurrencyPage}>
            <Tabs tabs={tabs} containerClass={s.Tabs} />
          </div>
        </WithNamePage>
      </WithBackbuttonPage>
    </WithMenuComponent>
  )
})
