import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CurrencyTemplate } from 'shared/ui/currency-template'
import { Currency as ICurrency } from 'widgets'
import CurrencyFlag from 'react-currency-flags'

interface CurrencyProps {
  currency: ICurrency
}

export const Currency: React.FC<CurrencyProps> = ({ currency }) => {
  const nav = useNavigate()

  return (
    <CurrencyTemplate
      onClick={() => nav(`/currency/${currency.code}`)}
      icon={<CurrencyFlag currency={currency.code} size="md" />}
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
