import React from 'react'
import { CurrencyTemplate } from 'shared/ui/currency-template'
import { Currency as ICurrency } from 'widgets/currencies-list/model/CurrencyListModel'

interface CurrencyProps {
  currency: ICurrency
}

export const Currency: React.FC<CurrencyProps> = ({ currency }) => {
  return (
    <CurrencyTemplate
      leftTop={currency.name}
      rightTop={`${currency.price}₽`}
      rightBottom={
        Number(currency.percent) < 0 ? (
          <span style={{ color: '#E71C1C' }}>{currency.percent}%</span>
        ) : (
          <span style={{ color: '#51E71C' }}>{currency.percent}%</span>
        )
      }
    />
  )
}
