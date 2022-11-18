import { appCss } from 'app'
import {
  BlueButton,
  MoniTitle,
  WhiteButton,
  WithFormPage,
  WithTitleInput,
} from 'shared/ui'
import { WithSetStep } from '../types'
import styles from './steps.scss'

const titles = [
  'ФИО',
  'Серия и номер',
  'Когда выдан',
  'Кем выдан',
  'Код подразделения',
]

export const ManualStep: React.FC<WithSetStep> = (props) => {
  const getForm = () => {
    return (
      <div className={styles.ManualStep}>
        <BlueButton value="Фото паспорта" />
        {titles.map((title) => (
          <WithTitleInput
            title={<span className={styles.inputTitle}>{title}</span>}
          />
        ))}
        <WhiteButton
          value="Готово"
          className={styles.doneButton}
          onClick={props.nextStep}
        />
        <span className={styles.dataPolicy}>
          Нажимая кнопку “готово” вы соглашаетесь с условиями <br />
          <span className={appCss.markedText}>обработки данных.</span>
        </span>
      </div>
    )
  }

  return (
    <WithFormPage
      showBackButton
      onBackButtonClick={props.prevStep}
      containerStyle={{ width: 251 }}
      title={<MoniTitle />}
      subTitle="Ввод паспортных данных."
      form={getForm()}
    />
  )
}
