import { Link } from 'react-router-dom'
import { UserIcon } from 'shared/ui'
import { PortfelIcon } from 'shared/ui/Icons/PortfelIcon'
import { SettingsIcon } from 'shared/ui/Icons/SettingsIcon'

import styles from './user-nav-menu.scss'

export const UserNavMenu = () => {
  return (
    <div className={styles.Nav}>
      <Link to={{ pathname: '/profile' }}>
        <UserIcon />
      </Link>
      <Link to={{ pathname: '/shop' }}>
        <PortfelIcon />
      </Link>
      <Link to={{ pathname: '/settings' }}>
        <SettingsIcon />
      </Link>
    </div>
  )
}
