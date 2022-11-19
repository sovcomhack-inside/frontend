import React, { PropsWithChildren } from 'react'
import { UserNavMenu } from 'widgets'

export const WithMenuComponent: React.FC<PropsWithChildren> = (props) => {
  return (
    <div>
      {props.children}
      <UserNavMenu />
    </div>
  )
}
