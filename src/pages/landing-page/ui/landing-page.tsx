import { appCss } from 'app'
import classNames from 'classnames'
import { Link, useNavigate } from 'react-router-dom'
import { WhiteButton } from 'shared/ui/Button'
import { AttentionIcon } from './assets/AttentionIcon'
import { CheckboxIcon } from './assets/CheckboxIcon'
import { DollarIcon } from './assets/DollarIcon'
import { GearIcon } from './assets/GearIcon'
import styles from './landing-page.module.scss'

const {
  header,
  layout,
  features,
  feature,
  featureItem,
  featureTitle,
  featureText,
  featureIcon,
} = styles

export const LandingPage = () => {
  const nav = useNavigate()
  const { markedText } = appCss
  return (
    <div className={classNames(appCss.layout, layout)}>
      <div className={header}>
        <span className={styles.logo}>
          moni<span className={markedText}>.</span>
        </span>
        <WhiteButton
          value="Войти"
          type="wide"
          onClick={() => nav('/new')}
          className={classNames(styles.button, styles.loginButton)}
        />
      </div>
      <div className={styles.quote}>
        Помогаем <br /> выловить <span className={markedText}>рыбу </span>
        <br />
        предлагая лучшую <br /> <span className={markedText}>удочку</span>
        <div className={styles.dollarIcon}>
          <DollarIcon />
        </div>
      </div>
      <h1 className={styles.mainTitle}>
        moni <br /> предлагает
      </h1>
      <div className={features}>
        <div className={featureItem}>
          <div className={feature}>
            <h3 className={featureTitle}>
              Гарантия <br /> конфиденциальности
            </h3>
            <p className={featureText}>
              moni уважает вас и вашу работу, поэтому мы попросили её
              позаботиться об этом за вас.
            </p>
            <br />
            <p className={featureText}>Она в этом эксперт.</p>
          </div>
          <div className={classNames(featureIcon, styles.attentionIcon)}>
            <AttentionIcon />
          </div>
        </div>
        <div className={featureItem}>
          <div className={feature}>
            <h3 className={featureTitle}>
              Что-то еще классное, <br /> обсудим на митапе
            </h3>
            <p className={featureText}>
              moni умеет много, просит мало: это почти как северо-корейский
              ребенок.
            </p>
            <br />
            <br />
            <p className={featureText}>
              Сможем засунуть еще <br /> штуки 3 подобных
              <br /> прямоугольника.
            </p>
          </div>
          <div className={classNames(featureIcon, styles.checkboxIcon)}>
            <CheckboxIcon />
          </div>
        </div>
        <div className={featureItem}>
          <div className={feature}>
            <h3 className={featureTitle}>
              Настраиваемый <br /> алгоритм покупки валют
            </h3>
            <p className={featureText}>
              moni научилась самостоятельно следить за ситуацией на рынке и
              покупать нужные вам валюты по желаемой вам цене.
            </p>
            <br />
            <p className={featureText}>
              <p className={featureText}>
                А ещё moni умеет
                <br />
                предупреждать вас
                <br />о снижении цен.
              </p>
            </p>
          </div>
          <div className={classNames(featureIcon, styles.gearIcon)}>
            <GearIcon />
          </div>
        </div>
      </div>
      <Link to={{ pathname: '/login' }}>
        <WhiteButton
          value={
            <>
              подружиться с <span className={markedText}>moni</span>
            </>
          }
          type="wide"
          onClick={() => nav('/new')}
          className={classNames(styles.button, styles.friendButton)}
        />
      </Link>
    </div>
  )
}
