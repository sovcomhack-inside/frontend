import { appCss } from 'app'
import classNames from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'
import { UserModel } from 'shared/model'
import { Tabs } from 'shared/ui'
import { UserBankAccountInfo } from 'widgets'
import s from './profile-page.scss'
import { ButtonsBlock } from './ui/button-block'
import { observer } from 'mobx-react-lite'
import { CurrencyRequest } from 'entities/currency-request'

export const ProfilePage: React.FC = observer(() => {
  const tabs = {
    'активные заявки': (
      <>
        {UserModel.requests.map((request) => (
          <CurrencyRequest request={request} />
        ))}
      </>
    ),
  }

  return (
    <div className={classNames(appCss.layout, s.ProfilePage)}>
      <div className={s.wrapper}>
        <Link
          to={{ pathname: '/scheta' }}
          className={classNames(appCss.markedText, s.allAccounts)}
        >
          Все счета
        </Link>
      </div>
      <div className={s.wrapper}>
        <UserBankAccountInfo />
      </div>
      <div className={s.buttons} onClick={UserModel.remove}>
        <ButtonsBlock />
      </div>
      <Tabs containerClass={s.Tabs} tabs={tabs} />
    </div>
  )
})
