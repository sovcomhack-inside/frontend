import { appCss } from 'app'
import classNames from 'classnames'
import React, { CSSProperties, ReactElement } from 'react'
import { BackButton } from 'shared/ui/Button'
import styles from './with-form-page.scss'

interface WithFormPageProps {
  containerClassName?: string
  containerStyle?: CSSProperties
  showBackButton?: boolean
  title?: ReactElement
  subTitle?: ReactElement | string
  form?: JSX.Element

  onBackButtonClick?: () => void
}

export const MoniTitle = () => (
  <>
    moni<span className={appCss.markedText}>.</span>
  </>
)

export const WithFormPage: React.FC<WithFormPageProps> = (props) => {
  return (
    <div
      className={classNames(props.containerClassName, appCss.layout)}
      style={props.containerStyle}
    >
      {props.showBackButton && (
        <BackButton
          className={styles.backBtn}
          onClick={props.onBackButtonClick}
        />
      )}
      <div className={styles.title}>
        {props.title}
        <div className={styles.subTitle}>{props.subTitle}</div>
      </div>
      {props.form}
    </div>
  )
}
