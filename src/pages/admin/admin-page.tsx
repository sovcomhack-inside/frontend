import { appCss } from 'app'
import classNames from 'classnames'
import { AdminForm } from 'pages/admin/admin-form'
import { useNavigate } from 'react-router-dom'
import { MoniTitle, WithFormPage } from 'shared/ui'

export const AdminLoginPage = () => {
  const navigate = useNavigate()
  const onBackClick = () => navigate(-1)
  return (
    <WithFormPage
      containerClassName={classNames(appCss.layout)}
      showBackButton
      title={<MoniTitle />}
      subTitle="вход в админку"
      form={<AdminForm />}
      onBackButtonClick={onBackClick}
    />
  )
}
