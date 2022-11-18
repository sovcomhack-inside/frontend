import { appCss } from 'app'
import classNames from 'classnames'
import { LoginForm } from 'features/auth'
import { useNavigate } from 'react-router-dom'
import { MoniTitle, WithFormPage } from 'shared/ui'
import styles from './auth.scss'

export const LoginPage = () => {
  const navigate = useNavigate()
  const onBackClick = () => navigate(-1)
  return (
    <WithFormPage
      containerClassName={classNames(appCss.layout, styles.LoginPage)}
      showBackButton
      title={<MoniTitle />}
      subTitle="вход в аккаунт"
      form={<LoginForm className={styles.LoginForm} />}
      onBackButtonClick={onBackClick}
    />
  )
}
