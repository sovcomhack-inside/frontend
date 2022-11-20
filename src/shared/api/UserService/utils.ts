import React from 'react'

const obj = {
  old_account_from: {
    number: 'fb33fd0e-6782-11ed-9022-0242ac120002',
    user_id: '1',
    currency: 'RUB',
    balance: '10000',
    created_at: '2006-1-2',
  },
  new_account_from: {
    number: 'fb33fd0e-6782-11ed-9022-0242ac120002',
    user_id: '1',
    currency: 'RUB',
    balance: '10000',
    created_at: '2006-1-2',
  },
  old_account_to: {
    number: 'fb33fd0e-6782-11ed-9022-0242ac120002',
    user_id: '1',
    currency: 'RUB',
    balance: '10000',
    created_at: '2006-1-2',
  },
  new_account_to: {
    number: 'fb33fd0e-6782-11ed-9022-0242ac120002',
    user_id: '1',
    currency: 'RUB',
    balance: '10000',
    created_at: '2006-1-2',
  },
  purpose:
    'Перевод со счета c6f3c9e4-683f-11ed-9022-0242ac120002 (EUR) на счет fb33fd0e-6782-11ed-9022-0242ac120002 (RUB)',
}
export type BuyOrSellAccount = typeof obj
