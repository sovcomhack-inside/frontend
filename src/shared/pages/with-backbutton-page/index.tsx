import React from 'react'
import { BackButton } from 'shared/ui'
import s from './with-backbutton-page.scss'

export interface WithBackbuttonPageProps extends React.PropsWithChildren {
  onClick?: () => void
  pageTitle?: string
}

// TODO: PageWithTopBar
export const WithBackbuttonPage: React.FC<WithBackbuttonPageProps> = (
  props
) => {
  return (
    <div className={s.Page}>
      <div className={s.topBar}>
        <BackButton className={s.button} onClick={props.onClick} />
        <span className={s.pageTitle}>{props.pageTitle}</span>
      </div>
      {props.children}
    </div>
  )
}
