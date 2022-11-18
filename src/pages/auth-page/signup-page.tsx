import React from 'react'
import { appCss } from 'app'
import classNames from 'classnames'
import { useNavigate } from 'react-router-dom'
import { MoniTitle, WithFormPage } from 'shared/ui'
import styles from './auth.scss'
import { SignupForm } from 'features/auth'

export const SignupPage = () => {
  const navigate = useNavigate()
  const onBackClick = () => navigate(-1)

  //

  return (
    <WithFormPage
      containerClassName={classNames(appCss.layout, styles.SignupPage)}
      showBackButton
      title={<MoniTitle />}
      subTitle="регистрация."
      form={<SignupForm className={styles.SignupForm} />}
      onBackButtonClick={onBackClick}
    />
  )
}
