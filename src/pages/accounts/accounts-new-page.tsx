import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../../input.css'
import { CurrenciesList } from 'widgets'
import { UserModel } from 'shared/model'

export const AccountsNewPage: React.FC = () => {
  const navigate = useNavigate()

  const onCurrencyClick = (code: string | null) => {
    UserModel.createAccount(code)
    navigate('/accounts')
  }

  return <CurrenciesList onCurrencyClick={onCurrencyClick} />
}
