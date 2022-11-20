import React from 'react'
import { BackButton } from 'shared/ui'
import { useNavigate } from "react-router-dom";
import '../../input.css';
import { CurrenciesList } from 'widgets';

export const AccountsNewPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <CurrenciesList />
  )
}
