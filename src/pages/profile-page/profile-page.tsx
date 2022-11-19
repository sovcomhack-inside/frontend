import { appCss } from 'app'
import classNames from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'
import { Tabs } from 'shared/ui'
import { UserBankAccountInfo } from 'widgets'
import s from './profile-page.scss'
import { ButtonsBlock } from './ui/button-block'

export const ProfilePage: React.FC = () => {
  const tabs = {
    события: <>События</>,
    'активные заявки': <>Currency List</>,
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
      <div className={s.buttons}>
        <ButtonsBlock />
      </div>
      <Tabs containerClass={s.Tabs} tabs={tabs} />
    </div>
  )
}
