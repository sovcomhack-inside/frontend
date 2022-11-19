import React, { useState } from 'react'
import { BackButton } from 'shared/ui'
import { Link, useNavigate } from "react-router-dom";
import { Account } from 'pages/accounts/types';
import '../../index.css'

export const AccountsPage: React.FC = () => {
  const navigate = useNavigate();

  const [accounts, setAccounts] = useState<Account[]>([
    { currency: "USD", currency_name: "Доллар", created_at: "2006-01-02" },
    { currency: "USD", currency_name: "Доллар", created_at: "2006-01-02" },
    { currency: "USD", currency_name: "Доллар", created_at: "2006-01-02" },
  ]);

  const mapAccount = (account: Account) => {
    return <div className='flex flex-row justify-between place-items-center rounded-md p-6 bg-neutral-900'>
      <div className='flex flex-col justify-between'>
        <div className='class'>{account.currency_name}</div>
        <div className='text-neutral-400 text-xss'>Cоздан: {account.created_at}</div>
      </div>
      <div className=''>
        {account.currency_name}
      </div>
    </div>
  }

  return (
    <div className='flex flex-col w-80 mx-auto'>
      <BackButton onClick={() => navigate("/profile")} />
      <div className='text-4xl font-bold'>Мои счета</div>
      <div className='flex flex-col gap-2 h-1/4 overflow-hidden'>
        {accounts?.map(mapAccount)}
      </div>
      <Link
        to={{ pathname: '/accounts/new' }}
        className='bg-neutral-900 p-6 rounded-sm text-center'
      >
        Новый валютный счет
      </Link>
    </div>
  )
}
