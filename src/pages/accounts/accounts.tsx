import React from 'react'
import { BackButton } from 'shared/ui'
import { Link, useNavigate } from 'react-router-dom'
import '../../input.css'
import { UserAccount } from 'shared/api/UserService/UserService'
import { UserModel } from 'shared/model'
import { observer } from 'mobx-react-lite'
import { CurrencyTemplate } from 'shared/ui/currency-template'
import CurrencyFlag from 'react-currency-flags'

export const AccountsPage: React.FC = observer(() => {
  const navigate = useNavigate()

  const accounts = UserModel.accounts

  const mapAccount = (account: UserAccount) => (
    <CurrencyTemplate
      icon={<CurrencyFlag currency={account.currency} size="md" />}
      leftTop={`${account.balance}`}
      leftBottom={
        <span>Cоздан: {new Date(account.createdAt).toDateString()}</span>
      }
    />
  )

  return (
    <div className="flex flex-col w-80 mx-auto gap-12 mt-8">
      <BackButton
        className="w-16 float-left"
        onClick={() => navigate('/profile')}
      />
      <div className="text-4xl font-bold">Мои счета</div>
      <div className="flex flex-col gap-2 h-1/4 overflow-hidden">
        {accounts?.map(mapAccount)}
      </div>
      <Link
        to={{ pathname: '/accounts/new' }}
        className="text-lg text-white bg-neutral-900 p-6 rounded-md text-center hover:bg-neutral-800"
      >
        Новый валютный счет
      </Link>
    </div>
  )
})
