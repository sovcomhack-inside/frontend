import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../input.css'
import { WithBackbuttonPage } from 'shared/pages/with-backbutton-page'
import { WithNamePage } from 'shared/pages/with-name-page'
import { CurrencyTemplate } from 'shared/ui/currency-template'
import s from './cards-page.scss'
import { Input, WhiteButton, WithTitleInput } from 'shared/ui'
import { UserModel } from 'shared/model'

export const CardsPage: React.FC = () => {
  const [showPay, setShowPay] = useState(false)
  const [CVV, setCVV] = useState('')
  const [summ, setSumm] = useState('')
  const navigate = useNavigate()

  return (
    <WithBackbuttonPage onClick={() => navigate('/profile')}>
      <WithNamePage name="Пополнить">
        {showPay ? (
          <div className={s.CardPage}>
            <CurrencyTemplate
              onClick={() => setShowPay(true)}
              containerClass={s.container}
              leftTop={'Карта *1881'}
              icon={
                <div className={s.cardTemplate}>
                  <span>совкомбанк</span>
                </div>
              }
            />
          </div>
        ) : (
          <div className={s.payStep}>
            <div className={s.cardMarkup}>совкомбанк</div>

            <Input
              className={s.cvv}
              placeholder="CVV"
              onChange={({ currentTarget: { value } }) => setCVV(value)}
            />
            <WithTitleInput
              title="Сумма"
              type="number"
              className={s.summ}
              onChange={({ currentTarget: { value } }) => setSumm(value)}
            />
            <WhiteButton
              className={s.button}
              value="Пополнить"
              onClick={() => UserModel.depositMoney(Number(summ))}
            />
          </div>
        )}
      </WithNamePage>
    </WithBackbuttonPage>
  )
}
