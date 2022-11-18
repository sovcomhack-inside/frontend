import classNames from 'classnames'
import React from 'react'
import { Button, ButtonProps } from './Button'
import styles from './styles.module.scss'

export const WhiteButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button
      className={classNames(styles.white, styles[props.type ?? 'wide'])}
      {...props}
    />
  )
}
