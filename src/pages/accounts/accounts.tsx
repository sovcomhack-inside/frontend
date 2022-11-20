import React, { useState } from 'react'
import { BackButton } from 'shared/ui'
import { Link, useNavigate } from "react-router-dom";
import { Account } from 'pages/accounts/types';
import '../../input.css';

export const AccountsPage: React.FC = () => {
  const navigate = useNavigate();

  const [accounts, setAccounts] = useState<Account[]>([
    { currency: "USD", currency_name: "Доллар", created_at: "2006-01-02" },
    { currency: "USD", currency_name: "Доллар", created_at: "2006-01-02" },
    { currency: "USD", currency_name: "Доллар", created_at: "2006-01-02" },
  ]);

  const mapAccount = (account: Account) => {
    return <div className='flex flex-row justify-between place-items-center rounded-md p-6 bg-neutral-900'>
      <div className='flex flex-col gap-1'>
        <div className='text-lg font-bold'>{account.currency_name}</div>
        <div className='text-xss text-neutral-400'>Cоздан: {account.created_at}</div>
      </div>
      <div className='rounded-full w-10 grid place-items-center aspect-square bg-white text-black'>
        $
      </div>
    </div>
  }

  return (
    <div className='flex flex-col w-80 mx-auto gap-12 mt-8'>
      <BackButton className='w-16 float-left' onClick={() => navigate("/profile")} />
      <div className='text-4xl font-bold'>Мои счета</div>
      <div className='flex flex-col gap-2 h-1/4 overflow-hidden'>
        {accounts?.map(mapAccount)}
      </div>
      <Link
        to={{ pathname: '/accounts/new' }}
        className='text-lg text-white bg-neutral-900 p-6 rounded-md text-center hover:bg-neutral-800'
      >
        Новый валютный счет
      </Link>
    </div>
  )
}
