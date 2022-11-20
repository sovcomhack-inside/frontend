import React from 'react'
import { IconProps } from 'shared/model'

export const PortfelIcon: IconProps = ({ color }) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill={color ? color : 'none'}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.76042 0.71875H18.2396V5.55208H24.2812V23.0729H0.71875V5.55208H6.76042V0.71875ZM8.57292 5.55208H16.4271V2.53125H8.57292V5.55208ZM2.53125 12.4214V21.2604H22.4688V12.4214L12.5 14.6367L2.53125 12.4214ZM22.4688 10.5647V7.36458H2.53125V10.5647L12.5 12.78L22.4688 10.5647Z"
        fill={color ? color : 'white'}
        fill-opacity="0.5"
      />
    </svg>
  )
}
