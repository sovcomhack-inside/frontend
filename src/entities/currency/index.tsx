import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CurrencyTemplate } from 'shared/ui/currency-template'
import { Currency as ICurrency, CurrencyModel } from 'widgets'
import CurrencyFlag from 'react-currency-flags'
import { observer } from 'mobx-react-lite'

interface CurrencyProps {
  currency: ICurrency
  onClick?: (code: string) => void
}

export const Currency: React.FC<CurrencyProps> = observer(
  ({ currency, ...props }) => {
    const nav = useNavigate()

    const onClick = () => {
      CurrencyModel.setSelected(currency.code)
      if (!props.onClick) {
        nav(`/currency/${currency.code}`)
        return
      }
      props.onClick(currency.code)
    }

    return (
      <CurrencyTemplate
        onClick={onClick}
        icon={<CurrencyFlag currency={currency.code} size="md" />}
        leftTop={currency.name}
        rightTop={`${currency.currentPrice}₽`}
        rightBottom={
          Number(currency.dayChangePct) < 0 ? (
            <span style={{ color: '#E71C1C' }}>{currency.dayChange}%</span>
          ) : (
            <span style={{ color: '#51E71C' }}>{currency.dayChangePct}%</span>
          )
        }
      />
    )
  }
)
