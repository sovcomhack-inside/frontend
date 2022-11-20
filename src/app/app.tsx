import classNames from 'classnames'
import { observer } from 'mobx-react-lite'
import { RouterProvider } from 'react-router-dom'
import { NotificationService } from 'shared/model/NotificationService'
import { router } from './router'
import s from './ui/app.module.scss'
export const App = observer(() => {
  return (
    <div className="app">
      <RouterProvider router={router} />
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
