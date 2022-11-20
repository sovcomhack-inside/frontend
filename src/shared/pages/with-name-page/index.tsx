import React from 'react'
import s from './with-name-page.scss'

export interface WithNamePageProps extends React.PropsWithChildren {
  pageTitle?: string
  name?: string
  underName?: string
}

export const WithNamePage: React.FC<WithNamePageProps> = (props) => {
  return (
    <div className={s.WithNamePage}>
      <div className={s.name}>{props.name}</div>
      <div className={s.underName}>{props.underName}</div>
      <div className={s.content}>{props.children}</div>
    </div>
  )
}
