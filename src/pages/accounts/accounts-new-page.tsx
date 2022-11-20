import React from 'react'
import { BackButton } from 'shared/ui'
import { useNavigate } from 'react-router-dom'
import '../../input.css'
import { CurrenciesList, CurrencyModel } from 'widgets'
import { UserModel } from 'shared/model'

export const AccountsNewPage: React.FC = () => {
  const navigate = useNavigate()

  return <CurrenciesList onCurrencyClick={UserModel.createAccount} />
}
