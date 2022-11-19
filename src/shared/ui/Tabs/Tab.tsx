import classNames from 'classnames'
import React, { PropsWithChildren } from 'react'
import s from './tabs.scss'

export interface TabProps extends PropsWithChildren {
  title: string
  isActive: boolean
}

export const Tab: React.FC<TabProps> = (props) => {
  return (
    <div>
      <span>{props.title}</span>
      {props.isActive && props.children}
    </div>
  )
}
