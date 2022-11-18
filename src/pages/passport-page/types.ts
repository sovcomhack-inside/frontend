export enum PassportSteps {
  START = 'START',
  MANUAL_TYPE = 'MANUAL_TYPE',
  PHONE = 'PHONE',
  SMS = 'SMS',
  DONE = 'DONE', // TODO: ВОЗМОЖНО ОБОБЩИТЬ
}

export interface WithSetStep {
  nextStep?: () => void
  prevStep?: () => void
}
