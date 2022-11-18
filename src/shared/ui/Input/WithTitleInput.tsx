import React from 'react'
import { Input, InputProps } from './Input'
import styles from './input.module.scss'

export interface WithTitleInputProps extends Omit<InputProps, 'title'> {
  title: JSX.Element | string
}

export const WithTitleInput: React.FC<WithTitleInputProps> = (props) => {
  const { title, ...rest } = props
  return (
    <div className={styles.WithTitleInput}>
      <label>{props.title}</label>
      <Input {...rest} />
    </div>
  )
}
