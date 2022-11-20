import classNames from 'classnames'
import React, { FormEvent } from 'react'
import { UserModel } from 'shared/model'
import { WhiteButton } from 'shared/ui/Button'
import { LetterIcon, LockIcon } from 'shared/ui/Icons'
import { WithIconInput } from 'shared/ui/Input'
import { AuthModel } from '../model'
import styles from './auth.scss'

interface LoginFormProps extends React.HTMLProps<HTMLFormElement> {
  onButtonClick?: () => void
}

export const LoginForm: React.FC<LoginFormProps> = (props) => {
  const { className, ...rest } = props
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    props.onButtonClick?.()
  }

  return (
    <form
      className={classNames(className, styles.LoginForm)}
      onSubmit={onSubmit}
      {...rest}
    >
      <WithIconInput
        icon={<LetterIcon />}
        onChange={({ currentTarget: { value } }) => AuthModel.setEmail(value)}
        name="email"
        placeholder="email"
      />
      <WithIconInput
        icon={<LockIcon />}
        onChange={({ currentTarget: { value } }) =>
          AuthModel.setPassword(value)
        }
        name="password"
        placeholder="Пароль"
      />
      <WhiteButton type="wide" value="Войти" onClick={AuthModel.login} />
    </form>
  )
}
