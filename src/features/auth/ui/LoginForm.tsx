import classNames from 'classnames'
import React, { FormEvent } from 'react'
import { UserModel } from 'shared/model'
import { WhiteButton } from 'shared/ui/Button'
import { LetterIcon, LockIcon } from 'shared/ui/Icons'
import { WithIconInput } from 'shared/ui/Input'
import styles from './auth.scss'

interface LoginFormProps extends React.HTMLProps<HTMLFormElement> {
  onButtonClick?: () => void
}

export const LoginForm: React.FC<LoginFormProps> = (props) => {
  const { className, ...rest } = props

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    }

    if (!data.email || !data.password) {
      return
    }

    UserModel.login(data)
    props.onButtonClick?.()
  }

  return (
    <form
      className={classNames(className, styles.LoginForm)}
      onSubmit={onSubmit}
      {...rest}
    >
      <WithIconInput icon={<LetterIcon />} name="email" placeholder="email" />
      <WithIconInput icon={<LockIcon />} name="password" placeholder="Пароль" />
      <WhiteButton type="wide" value="Войти" />
    </form>
  )
}
