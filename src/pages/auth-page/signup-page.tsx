import { appCss } from 'app'
import classNames from 'classnames'
import { useNavigate } from 'react-router-dom'
import { MoniTitle, WithFormPage } from 'shared/ui'
import styles from './auth.scss'
import { SignupForm } from 'features/auth'
import { useState } from 'react'
import { PassportPage } from 'pages/passport-page'

export const SignupPage: React.FC = () => {
  const [showPassportPage, setShowPassportPage] = useState(false)
  const navigate = useNavigate()
  const onBackClick = () => {
    setShowPassportPage(false)
    navigate('/new')
  }

  return showPassportPage ? (
    <PassportPage />
  ) : (
    <WithFormPage
      containerClassName={classNames(appCss.layout, styles.SignupPage)}
      showBackButton
      title={<MoniTitle />}
      subTitle="регистрация."
      form={
        <SignupForm
          className={styles.SignupForm}
          onButtonClick={() => setShowPassportPage(true)}
        />
      }
      onBackButtonClick={onBackClick}
    />
  )
}
