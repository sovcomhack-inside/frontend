import classNames from 'classnames'
import React, { FC } from 'react'

import s from './button-block.scss'

interface ButtonBlockProps {
  onClick?: () => void
  title?: string
  subTitle?: string
  icon?: JSX.Element
  class?: string
}

export const ButtonBlock: FC<ButtonBlockProps> = (props) => {
  return (
    <div className={classNames(s.item, props.class)} onClick={props.onClick}>
      <span className={s.title}>{props.title}</span>
      <span className={s.subTitle}>{props.subTitle}</span>
      <span className={s.icon}>{props.icon}</span>
    </div>
  )
}
