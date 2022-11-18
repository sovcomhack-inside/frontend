import React from 'react'
import { appCss } from 'app'
import classNames from 'classnames'
import { BlueButton, WhiteButton } from 'shared/ui/Button'
import styles from './auth.scss'
import { useNavigate } from 'react-router-dom'
import { MoniTitle, WithFormPage } from 'shared/ui'

export const MainPage = () => {
  const nav = useNavigate()
  return (
    <div className={classNames(appCss.layout, styles.MainPage)}>
      <WithFormPage
        containerClassName={classNames(appCss.layout, styles.MainPage)}
        title={<MoniTitle />}
        form={
          <>
            <BlueButton
              value="Зарегистрироваться"
              onClick={() => nav('/signup')}
            />
            <WhiteButton value="Войти" onClick={() => nav('/login')} />
          </>
        }
      />
    </div>
  )
}
