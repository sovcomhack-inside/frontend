import React, { useState } from 'react'
import { MoniTitle, WhiteButton, WithFormPage, WithTitleInput } from 'shared/ui'
import { WithSetStep } from 'pages/passport-page/types'
import styles from './steps.scss'
import { AuthModel } from 'features/auth/model'
import { observer } from 'mobx-react-lite'

export const PhoneStep: React.FC<WithSetStep> = observer((props) => {
  const getForm = () => {
    return (
      <div className={styles.PhoneStep}>
        <WithTitleInput
          title={<span className={styles.inputTitle}>Номер телефона</span>}
          placeholder={'+'}
          value={AuthModel.phoneWithPlus}
          type="phone"
          onChange={({ currentTarget: { value } }) => AuthModel.setPhone(value)}
        />
        <WhiteButton
          disabled={AuthModel.phone.length !== 11}
          value="Подписать"
          onClick={props.nextStep}
        />
      </div>
    )
  }

  return (
    <WithFormPage
      showBackButton
      onBackButtonClick={props.prevStep}
      containerStyle={{ width: 251 }}
      title={<MoniTitle />}
      subTitle="Последний шаг."
      form={getForm()}
    />
  )
})
