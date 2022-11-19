import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { UserIcon } from 'shared/ui'
import { PortfelIcon } from 'shared/ui/Icons/PortfelIcon'
import { SettingsIcon } from 'shared/ui/Icons/SettingsIcon'

import styles from './user-nav-menu.scss'

interface UserNavMenuProps {
  activePage: string
}

export const UserNavMenu: React.FC<UserNavMenuProps> = (props) => {
  const getColor = (page: string) =>
    props.activePage === page ? '#fff' : '#ccc'

  return (
    <div className={styles.Nav}>
      <Link
        to={{ pathname: '/profile' }}
        className={classNames({
          [styles.active]: props.activePage === 'profile',
        })}
      >
        <UserIcon color={getColor('profile')} />
      </Link>
      <Link
        to={{ pathname: '/shop' }}
        className={classNames({ [styles.active]: props.activePage === 'shop' })}
      >
        <PortfelIcon color={getColor('shop')} />
      </Link>
      <Link
        to={{ pathname: '/settings' }}
        className={classNames({
          [styles.active]: props.activePage === 'settings',
        })}
      >
        <SettingsIcon color={getColor('settings')} />
      </Link>
    </div>
  )
}
