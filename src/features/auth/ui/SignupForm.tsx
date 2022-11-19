import { appCss } from 'app'
import classNames from 'classnames'
import React, { FormEvent } from 'react'
import { BlueButton } from 'shared/ui/Button'
import { LetterIcon, LockIcon, UserIcon } from 'shared/ui/Icons'
import { WithIconInput } from 'shared/ui'
import styles from './auth.scss'

interface SignupFormProps extends React.HTMLProps<HTMLDivElement> {
  onButtonClick?: () => void
}

export const SignupForm: React.FC<SignupFormProps> = (props) => {
  const { className, ...rest } = props

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const [name, second] = e.currentTarget.username.value.split(' ')
    const data = {
      firstName: name,
      lastName: second,
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    }
    // AuthApi.signUp(data)
    console.log(data)
    props.onButtonClick?.()
  }

  return (
    <div {...rest}>
      <form
        onSubmit={onSubmit}
        className={classNames(className, styles.SignupForm)}
      >
        <div className={styles.inputs}>
          <WithIconInput
            icon={<UserIcon />}
            placeholder="Имя Фамилия"
            name="username"
          />
          <WithIconInput
            type="email"
            name="email"
            icon={<LetterIcon />}
            placeholder="Gmail"
          />
          <WithIconInput
            type="password"
            name="password"
            icon={<LockIcon />}
            placeholder="Пароль"
          />
          <WithIconInput
            type="password"
            icon={<LockIcon />}
            placeholder="Подтвердить пароль"
          />
          <span className={styles.policy}>
            By signing up, you agree to{' '}
            <span className={appCss.markedText}>the Privacy Policy</span> and{' '}
            <span className={appCss.markedText}>Terms & Conditions</span>.
          </span>
        </div>
        <BlueButton
          type="wide"
          value="Зарегистрироваться"
          onClick={props.onButtonClick}
        />
      </form>
    </div>
  )
}
