import classNames from 'classnames'
import React from 'react'
import 'style.css'

interface ButtonProps {
  color: string
  value: string
  className: string
  onClick: () => void
}

export const Button: React.FC<Partial<ButtonProps>> = (props) => {
  const { className, value } = props
  return (
    <button className={classNames('Button', className)}>{props.value}</button>
  )
}
