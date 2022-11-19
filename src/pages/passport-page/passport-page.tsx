import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DonePage } from 'shared/pages'
import { ManualStep } from './steps/manual-step'
import { PhoneStep } from './steps/phone-step'
import { SmsStep } from './steps/sms-step'
import { PassportSteps } from './types'

export const PassportPage: React.FC<any> = () => {
  const navigator = useNavigate()
  const [step, setStep] = useState(PassportSteps.MANUAL_TYPE)

  const mapByStep: Record<string, JSX.Element> = {
    [PassportSteps.MANUAL_TYPE]: (
      <ManualStep
        nextStep={() => setStep(PassportSteps.PHONE)}
        prevStep={() => setStep(PassportSteps.START)}
      />
    ),
    [PassportSteps.PHONE]: (
      <PhoneStep
        nextStep={() => setStep(PassportSteps.SMS)}
        prevStep={() => setStep(PassportSteps.MANUAL_TYPE)}
      />
    ),
    [PassportSteps.SMS]: (
      <SmsStep
        nextStep={() => setStep(PassportSteps.DONE)}
        prevStep={() => setStep(PassportSteps.SMS)}
      />
    ),
    [PassportSteps.DONE]: (
      <DonePage
        buttonTitle="Я готов!"
        mainText="Все готово"
        secondaryText="Самое время подружиться с moni."
        onDonebuttonClick={() => navigator('/profile')}
      />
    ),
  }

  return mapByStep[step]
}
