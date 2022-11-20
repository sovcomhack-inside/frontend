import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import s from './tabs.scss'

export interface TabsProps {
  tabs: Record<string, JSX.Element>
  containerClass?: string
}

export const Tabs: React.FC<TabsProps> = (props) => {
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    setActive(active == null ? Object.keys(props.tabs)[0] : active)
  }, [props.tabs])

  const [_, component] = Object.entries(props.tabs).find(
    ([title]) => active === title
  ) ?? ['Not Found', <>Not Found</>]

  return (
    <div className={classNames(s.Tabs, props.containerClass)}>
      <div className={s.titlesContainer}>
        {Object.keys(props.tabs).map((title) => (
          <span
            className={classNames(s.title, { [s.isActive]: active == title })}
            onClick={() => setActive(title)}
          >
            {title}
          </span>
        ))}
      </div>
      {component}
    </div>
  )
}
