import React, { useState } from 'react'
import { MoniTitle, WhiteButton, WithFormPage, WithTitleInput } from 'shared/ui'
import { WithSetStep } from 'pages/passport-page/types'
import styles from './steps.scss'

export const SmsStep: React.FC<WithSetStep> = (props) => {
  const [value, setValue] = useState('') //TODO: To mst store

  const getForm = () => {
    return (
      <div className={styles.PhoneStep}>
        <WithTitleInput
          title={<span className={styles.inputTitle}>Цифры из SMS</span>}
          onChange={({ currentTarget: { value } }) => setValue(value)}
        />
        <WhiteButton
          disabled={value.length !== 4}
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
}
