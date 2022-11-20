import classNames from 'classnames'
import React from 'react'
import { Input, InputProps } from './Input'
import styles from './input.module.scss'

interface WithIconInputProps extends InputProps {
  containerClassName?: string
  icon: React.ReactNode
}

export const WithIconInput: React.FC<WithIconInputProps> = (props) => {
  const { icon, ...rest } = props
  return (
    <div className={classNames(styles.WithIconInput, props.containerClassName)}>
      <span className={styles.Icon}>{icon}</span>
      <Input {...rest} />
    </div>
  )
}
