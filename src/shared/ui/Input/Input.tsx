import classNames from 'classnames'
import React from 'react'
import styles from './input.module.scss'

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
  danger?: boolean
}

export const Input: React.FC<Partial<InputProps>> = (props) => {
  const { value, className, ...rest } = props
  return (
    <input
      value={value}
      className={classNames(className, styles.Input, {
        [styles.danger]: props.danger,
      })}
      {...rest}
    />
  )
}
