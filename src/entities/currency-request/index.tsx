import React from 'react'
import { CurrencyRequest as ICurrencyRequest } from 'shared/model/UserModel'
import { CurrencyTemplate } from 'shared/ui/currency-template'

interface UserRequestProps {
  request: ICurrencyRequest
}

export const CurrencyRequest: React.FC<UserRequestProps> = ({ request }) => {
  return (
    <CurrencyTemplate
      leftBottom={request.status}
      leftTop={request.name}
      rightBottom={request.retail.price}
      rightTop={request.retail.total}
    />
  )
}
