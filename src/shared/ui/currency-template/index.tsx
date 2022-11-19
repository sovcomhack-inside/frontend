import React from 'react'
import { CurrencyRequest } from 'shared/model/UserModel'
import s from './currency-template.scss'

interface CurrencyTemplateProps {
  icon?: any
  rightTop?: string | JSX.Element
  rightBottom?: string | JSX.Element
  leftTop?: string | JSX.Element
  leftBottom?: string | JSX.Element
}

export const CurrencyTemplate: React.FC<CurrencyTemplateProps> = ({
  icon,
  rightTop,
  rightBottom,
  leftTop,
  leftBottom,
}) => {
  return (
    <div className={s.Request}>
      <span className={s.icon}>{icon}</span>
      <span className={s.rightTop}>{rightTop}</span>
      <span className={s.rightBottom}>{rightBottom}</span>
      <span className={s.leftTop}>{leftTop}</span>
      <span className={s.leftBottom}>{leftBottom}</span>
    </div>
  )
}
