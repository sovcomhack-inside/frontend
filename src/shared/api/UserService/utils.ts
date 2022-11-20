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

const obj1 = {
  id: '2bcc6904-6870-11ed-9022-0242ac120002',
  purpose: 'Вывод со счета на банковскую карту',
  time: '2022-11-20T01:28:59.586222Z',
  operation_type: 'withdrawal',
  account_number_to: '2bcc6904-6870-11ed-9022-0242ac120002',
  amount_cents_to: 1000.1,
  currency_to: 'RUB',
  account_number_from: '2bcc6904-6870-11ed-9022-0242ac120002',
  amount_cents_from: 100.01,
  currency_from: 'USD',
  exchange_rate_ratio: 10,
}

export type BuyOrSellAccount = typeof obj
export type Operation = typeof obj1
