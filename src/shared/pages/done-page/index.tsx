import { CheckboxIcon } from 'pages/landing-page/ui/assets/CheckboxIcon'
import React, { PropsWithChildren } from 'react'
import { WhiteButton } from 'shared/ui'
import styles from './done-page.scss'

interface DonePageProps extends PropsWithChildren {
  buttonTitle?: string
  mainText: string
  secondaryText: string
  onDonebuttonClick?: () => void
}

export const DonePage: React.FC<DonePageProps> = (props) => {
  return (
    <div className={styles.DonePage}>
      <CheckboxIcon />
      <span className={styles.mainText}>{props.mainText}</span>
      <span className={styles.secondaryText}>{props.secondaryText}</span>
      <WhiteButton
        onClick={props.onDonebuttonClick}
        className={styles.doneButton}
        value={props.buttonTitle ?? 'Готово'}
      />
    </div>
  )
}
