import React from 'react'
import { ArrowLeft } from 'shared/ui/Icons'
import { WhiteButton } from './WhiteButton'

export const BackButton: React.FC<React.HTMLProps<HTMLButtonElement>> = (
  props
) => (
  <WhiteButton
    type="square"
    value={<ArrowLeft />}
    className={props.className}
    onClick={props.onClick}
  />
)
