import classNames from 'classnames'
import React from 'react'
import styles from './styles.module.scss'
export interface ButtonProps
  extends Omit<React.HTMLProps<HTMLButtonElement>, 'value'> {
  type?: 'wide' | 'square'
  value?: string | React.ReactNode
  icon?: React.ReactNode
}

export { BlueButton } from './BlueButton'

export const Button: React.FC<Partial<ButtonProps>> = (props) => {
  const { className, type = 'wide', value, icon, ...rest } = props
  return (
    <button className={classNames(styles.Button, className)} {...rest}>
      {icon}
      {value}
    </button>
  )
}
