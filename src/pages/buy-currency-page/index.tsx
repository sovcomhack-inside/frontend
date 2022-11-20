import { WithMenuComponent } from 'app/ui/WithMenuComponent'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { WithBackbuttonPage } from 'shared/pages/with-backbutton-page'
import { WithNamePage } from 'shared/pages/with-name-page'
import { CurrencyTemplate } from 'shared/ui/currency-template'
import CurrencyFlag from 'react-currency-flags'

import s from './buy-currency-page.scss'
import { BackButton, ButtonBlock, WhiteButton, WithTitleInput } from 'shared/ui'
import { NotificationService } from 'shared/model/NotificationService'
import { observer } from 'mobx-react-lite'
import { UserModel } from 'shared/model'
import { CurrencyModel } from 'widgets'

interface BuyCurrencyPageProps {}

export const BuyCurrencyPage: React.FC<BuyCurrencyPageProps> = observer(() => {
  const nav = useNavigate()
  const params = useParams()
  const currency = CurrencyModel.findByCode(params?.id ?? '')
  const pageName = currency?.code
  const [amount, setAmount] = useState(0)

  const account = UserModel.getAccountByCode(currency?.code)

  if (!currency) {
    if (!currency) {
      NotificationService.success('Валюта не найдена')
    }
    return (
      <WithBackbuttonPage onClick={() => nav('/currencies')}>
        <WithNamePage name={pageName} underName="USDRUB"></WithNamePage>
      </WithBackbuttonPage>
    )
  }

  return (
    <WithBackbuttonPage pageTitle="О валюте" onClick={() => nav('/currencies')}>
      <WithNamePage name={pageName} underName="USDRUB">
        <div className={s.BuyCurrencyPage}>
          {account ? (
            <CurrencyTemplate
              containerClass={s.containerClass}
              icon={<CurrencyFlag currency={account.currency} size="md" />}
              leftTop={account.currency}
              rightTop={account.balance}
            />
          ) : (
            <CurrencyTemplate
              containerClass={s.containerClass}
              icon={<CurrencyFlag currency={currency.code} size="md" />}
              leftTop={`Открыть ${currency.code} счет`}
              onClick={() => UserModel.createAccount(currency.code)}
            />
          )}
          <CurrencyTemplate
            containerClass={s.containerClass}
            icon={<CurrencyFlag currency={currency.code} size="md" />}
            leftTop={currency.name}
            rightTop={currency.currentPrice}
            rightBottom={'Цена последней сделки'}
          />
        </div>
        <div className={s.buyForm}>
          <WithTitleInput
            title={'По цене'}
            value={currency.currentPrice}
            disabled
          />
          <WithTitleInput
            title={'Количество'}
            type={'number'}
            value={amount}
            onChange={({ currentTarget: { value } }) =>
              setAmount(Number(value))
            }
          />
        </div>
        <div className={s.total}>
          <span>Итого</span>
          <span>{currency.currentPrice * amount} ₽</span>
        </div>
        <div className={s.button}>
          <WhiteButton value={'Купить сейчас'} />
        </div>
      </WithNamePage>
    </WithBackbuttonPage>
  )
})
