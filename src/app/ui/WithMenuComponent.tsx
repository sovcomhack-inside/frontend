import React, { PropsWithChildren } from 'react'
import { useLocation, useNavigation, useParams } from 'react-router-dom'
import { UserNavMenu } from 'widgets'
import s from './app.module.scss'

export const WithMenuComponent: React.FC<PropsWithChildren> = (props) => {
  const params = useLocation()
  return (
    <div className={s.WithMenuComponent}>
      {props.children}
      <UserNavMenu activePage={params.pathname.split('/')[1]} />
    </div>
  )
}
