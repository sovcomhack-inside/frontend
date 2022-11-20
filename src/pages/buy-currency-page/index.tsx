import { WithMenuComponent } from 'app/ui/WithMenuComponent'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { WithBackbuttonPage } from 'shared/pages/with-backbutton-page'
import { WithNamePage } from 'shared/pages/with-name-page'
import { CurrencyTemplate } from 'shared/ui/currency-template'
import CurrencyFlag from 'react-currency-flags'

import s from './buy-currency-page.scss'
import { WhiteButton, WithTitleInput } from 'shared/ui'

interface BuyCurrencyPageProps {}

export const BuyCurrencyPage: React.FC<BuyCurrencyPageProps> = () => {
  const nav = useNavigate()
  const params = useParams()
  const pageName = params.id?.toUpperCase() ?? 'USD' // TODO: UserModel
  const [amount, setAmount] = useState(0)

  const account = {
    name: 'Рублевый счет',
    balance: Intl.NumberFormat('ru-RU', {
      currency: 'RUB',
      style: 'currency',
      minimumIntegerDigits: 2,
    }).format(10_000_000_000 / 100),
    currency: '₽',
    code: 'RUB',
  }

  const currency = {
    name: 'Доллар США',
    code: 'USD',
    price: 61.02,
    desc: 'Цена последней сделки',
  }

  return (
    <WithBackbuttonPage pageTitle="О валюте" onClick={() => nav('/currency')}>
      <WithNamePage name={pageName} underName="USDRUB">
        <div className={s.BuyCurrencyPage}>
          <CurrencyTemplate
            containerClass={s.containerClass}
            icon={<CurrencyFlag currency={account.code} size="md" />}
            leftTop={account.name}
            rightTop={account.balance}
          />
          <CurrencyTemplate
            containerClass={s.containerClass}
            icon={<CurrencyFlag currency={currency.code} size="md" />}
            leftTop={currency.name}
            rightTop={currency.price}
            rightBottom={currency.desc}
          />
        </div>
        <div className={s.buyForm}>
          <WithTitleInput
            title={'По цене'}
            value={currency.price}
            type={'number'}
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
          <span>{currency.price * amount} ₽</span>
        </div>
        <div className={s.button}>
          <WhiteButton value={'Купить сейчас'} />
        </div>
      </WithNamePage>
    </WithBackbuttonPage>
  )
}