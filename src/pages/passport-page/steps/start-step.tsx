import React from 'react'
import { BlueButton, Button, MoniTitle, WithFormPage } from 'shared/ui'
import { WithSetStep } from 'pages/passport-page/types'
import styles from './steps.scss'

export const StartStep: React.FC<WithSetStep> = (props) => {
  const getForm = () => {
    return (
      <div className={styles.StartStep}>
        <Button value="Госуслуги" className={styles.button} />
        <span>ИЛИ</span>
        <BlueButton value="Ввести данные вручную" onClick={props.nextStep} />
      </div>
    )
  }

  return (
    <WithFormPage
      containerStyle={{ width: 251 }}
      showBackButton
      onBackButtonClick={props.prevStep}
      title={<MoniTitle />}
      subTitle="Паспортные данные."
      form={getForm()}
    />
  )
}
