import { appCss } from 'app'
import { AuthModel } from 'features/auth/model'
import { observer } from 'mobx-react-lite'
import { WithSetStep } from 'pages/passport-page/types'
import {
  BlueButton,
  MoniTitle,
  WhiteButton,
  WithFormPage,
  WithTitleInput,
} from 'shared/ui'
import styles from './steps.scss'

export const ManualStep: React.FC<WithSetStep> = observer((props) => {
  const getForm = () => {
    return (
      <div className={styles.ManualStep}>
        <BlueButton value="Фото паспорта *" />
        <WithTitleInput
          value={AuthModel.passport?.fullName}
          onChange={({ currentTarget: { value } }) =>
            AuthModel.passport?.setName(value)
          }
          title={<span className={styles.inputTitle}>ФИО</span>}
        />
        <WithTitleInput
          value={AuthModel.passport?.seriaAndNumber}
          onChange={({ currentTarget: { value } }) =>
            AuthModel.passport?.setSeriaAndNumber(value)
          }
          title={<span className={styles.inputTitle}>Серия и номер</span>}
        />
        <WithTitleInput
          value={AuthModel.passport?.date}
          onChange={({ currentTarget: { value } }) =>
            AuthModel.passport?.setDate(value)
          }
          title={<span className={styles.inputTitle}>Когда выдан</span>}
        />
        <WithTitleInput
          value={AuthModel.passport?.givenBy}
          onChange={({ currentTarget: { value } }) =>
            AuthModel.passport?.setGivenBy(value)
          }
          title={<span className={styles.inputTitle}>Кем выдан</span>}
        />
        <WithTitleInput
          value={AuthModel.passport?.code}
          onChange={({ currentTarget: { value } }) =>
            AuthModel.passport?.setCode(value)
          }
          title={<span className={styles.inputTitle}>Код подразделения</span>}
        />
        <WhiteButton
          value="Готово"
          className={styles.doneButton}
          onClick={props.nextStep}
          disabled={!(AuthModel.passport.fullName.split(' ').length >= 2)}
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
})
