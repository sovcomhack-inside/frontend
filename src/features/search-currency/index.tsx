import React from 'react'
import { WithIconInput } from 'shared/ui'
import { SearchIcon } from 'shared/ui/Icons/SearchIcon'
import { InputProps } from 'shared/ui/Input/Input'
import s from './search-input.scss'

interface SearchCurrencyProps extends InputProps {}

export const SearchCurrency: React.FC<SearchCurrencyProps> = (props) => {
  return (
    <WithIconInput
      icon={<SearchIcon />}
      containerClassName={s.SearchInput}
      {...props}
    />
  )
}
