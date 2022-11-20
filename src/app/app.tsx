import classNames from 'classnames'
import { AuthModel } from 'features/auth/model'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { Route, RouterProvider, Routes } from 'react-router-dom'
import { UserModel } from 'shared/model'
import { NotificationService } from 'shared/model/NotificationService'
import { router, unauthRouter } from './router'
import s from './ui/app.module.scss'

export const App = observer(() => {
  useEffect(() => {
    AuthModel.getUser()
  }, [])
  const routerProvider = UserModel.id ? router : unauthRouter
  return (
    <div className="app">
      <RouterProvider router={routerProvider} />
      {/* {!UserModel.id && <RouterProvider router={unauthRouter} />} */}
      {NotificationService.show && (
        <div
          className={classNames(s.notify, {
            [s.error]: NotificationService.type === 'error',
          })}
        >
          <span className={s.title}>{NotificationService.message}</span>
          <span className={s.subTitle}>{NotificationService.description}</span>
        </div>
      )}
    </div>
  )
})
