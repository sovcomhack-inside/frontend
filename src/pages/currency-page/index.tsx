import React from 'react'
import { Tabs } from 'shared/ui'
import { GraphTab } from './tabs'

import s from './currency-page.scss'
import { WithBackbuttonPage } from 'shared/pages/with-backbutton-page'
import { WithMenuComponent } from 'app/ui/WithMenuComponent'
import { WithNamePage } from 'shared/pages/with-name-page'
import { useNavigate } from 'react-router-dom'

export interface CurrencyPageProps {}

export const CurrencyPage: React.FC<CurrencyPageProps> = () => {
  const nav = useNavigate()
  const tabs = {
    купить: <GraphTab graphTabClass={s.graphTab} />,
  }

  return (
    <WithMenuComponent>
      <WithBackbuttonPage pageTitle="О валюте" onClick={() => nav('/shop')}>
        <WithNamePage name="Валюты" underName="USDRUB">
          <div className={s.CurrencyPage}>
            <Tabs tabs={tabs} containerClass={s.Tabs} />
          </div>
        </WithNamePage>
      </WithBackbuttonPage>
    </WithMenuComponent>
  )
}
