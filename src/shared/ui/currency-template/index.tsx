import classNames from 'classnames'
import React from 'react'
import { CurrencyRequest } from 'shared/model/UserModel'
import s from './currency-template.scss'

interface CurrencyTemplateProps {
  icon?: any
  rightTop?: string | number | JSX.Element
  rightBottom?: string | JSX.Element
  leftTop?: string | JSX.Element
  leftBottom?: string | JSX.Element
  containerClass?: string
  onClick?: () => void
}

export const CurrencyTemplate: React.FC<CurrencyTemplateProps> = ({
  icon,
  rightTop,
  rightBottom,
  leftTop,
  leftBottom,
  containerClass,
  onClick,
}) => {
  return (
    <div className={classNames(s.Request, containerClass)}>
      <span className={s.icon} onClick={onClick}>
        {icon}
      </span>
      <span className={s.rightTop} onClick={onClick}>
        {rightTop}
      </span>
      <span className={s.rightBottom}>{rightBottom}</span>
      <span className={s.leftTop}>{leftTop}</span>
      <span className={s.leftBottom}>{leftBottom}</span>
    </div>
  )
}
