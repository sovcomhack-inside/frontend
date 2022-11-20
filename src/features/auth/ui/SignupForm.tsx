import { appCss } from 'app'
import classNames from 'classnames'
import React, { FormEvent, useState } from 'react'
import { BlueButton } from 'shared/ui/Button'
import { LetterIcon, LockIcon, UserIcon } from 'shared/ui/Icons'
import { WithIconInput } from 'shared/ui'
import styles from './auth.scss'
import { AuthModel } from '../model'
import { UserModel } from 'shared/model'
import { observer } from 'mobx-react-lite'

interface SignupFormProps extends React.HTMLProps<HTMLDivElement> {
  onButtonClick?: () => void
}

export const SignupForm: React.FC<SignupFormProps> = observer((props) => {
  const { className, ...rest } = props

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // UserModel.signup(data)
    props.onButtonClick?.()
  }

  console.log(AuthModel.isConfirmed)
  return (
    <div {...rest}>
      <form
        onSubmit={onSubmit}
        className={classNames(className, styles.SignupForm)}
      >
        <div className={styles.inputs}>
          <WithIconInput
            type="email"
            icon={<LetterIcon />}
            placeholder="email"
            value={AuthModel.email}
            onChange={({ currentTarget: { value } }) =>
              AuthModel.setEmail(value)
            }
          />
          <WithIconInput
            type="password"
            icon={<LockIcon />}
            placeholder="Пароль"
            onChange={({ currentTarget: { value } }) =>
              AuthModel.setPassword(value)
            }
            danger={AuthModel.isConfirmed}
            value={AuthModel.password}
          />
          <WithIconInput
            type="password"
            icon={<LockIcon />}
            placeholder="Подтвердить пароль"
            onChange={({ currentTarget: { value } }) =>
              AuthModel.setConfirmedPassword(value)
            }
            danger={AuthModel.isConfirmed}
            value={AuthModel.confirmedPassword}
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
          disabled={!AuthModel.isConfirmed}
        />
      </form>
    </div>
  )
})
