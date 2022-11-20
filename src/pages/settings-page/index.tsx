import { appCss } from 'app'
import { WithMenuComponent } from 'app/ui/WithMenuComponent'
import classNames from 'classnames'
import { AuthModel } from 'features/auth/model'
import React from 'react'
import { WithNamePage } from 'shared/pages/with-name-page'
import { ButtonBlock } from 'shared/ui'
import { BellIcon } from 'shared/ui/Icons/BellIcon'
import { BookIcon } from 'shared/ui/Icons/BookIcon'
import { CancelIcon } from 'shared/ui/Icons/CancelIcon'
import { EyeIcon } from 'shared/ui/Icons/EyeIcon'
import { KeyIcon } from 'shared/ui/Icons/KeyIcon'
import TelegramLoginButton from 'react-telegram-login';
import s from './settings-page.scss'

interface SettingsPageProps { }

export const SettingsPage: React.FC<SettingsPageProps> = () => {
  return (
    <WithMenuComponent>
      <WithNamePage name="Настройки">
        <div className={classNames(s.SettingsPage)}>
          <ButtonBlock
            class={classNames(s.item)}
            title="Тариф"
            subTitle="Узнай больше о moni plus, сэкономьте своё время."
            icon={<EyeIcon />}
          />
          <ButtonBlock
            class={classNames(s.item)}
            title="Уведомления"
            subTitle="Напишем тебе, когда moni
            увидит интересную цену."
            icon={<BellIcon />}
          />
          <ButtonBlock
            class={classNames(s.item)}
            title="Смена данных"
            subTitle="Вспомнили об ошибке, сменили документы или что еще — тыкайте."
            icon={<KeyIcon />}
          />
          <ButtonBlock
            class={classNames(s.item)}
            title="О приложении"
            icon={<BookIcon />}
          />
          <ButtonBlock
            onClick={AuthModel.logout}
            class={classNames(s.item)}
            title="Выход"
            icon={<CancelIcon />}
          />
          <TelegramLoginButton buttonSize="medium" requestAccess="write" dataAuthUrl="/api/v1/oauth/telegram" botName="sovcomhack_inside_bot" />
        </div>
      </WithNamePage>
    </WithMenuComponent>
  )
}
