import classNames from 'classnames'
import React from 'react'
import { WhiteButton } from 'shared/ui/Button'
import { LetterIcon, LockIcon } from 'shared/ui/Icons'
import { WithIconInput } from 'shared/ui/Input'
import styles from './auth.scss'

interface LoginFormProps extends React.HTMLProps<HTMLDivElement> {
  onButtonClick?: () => void
}

export const LoginForm: React.FC<LoginFormProps> = (props) => {
  const { className, ...rest } = props
  return (
    <div className={classNames(className, styles.LoginForm)} {...rest}>
      <WithIconInput icon={<LetterIcon />} placeholder="Gmail" />
      <WithIconInput icon={<LockIcon />} placeholder="Пароль" />
      <WhiteButton type="wide" value="Войти" />
    </div>
  )
}
