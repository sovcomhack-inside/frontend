import React from 'react'
import { IconProps } from 'shared/model'

export const SettingsIcon: IconProps = ({ color }) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      xmlns="http://www.w3.org/2000/svg"
      fill={color ? color : 'none'}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.5 8.3254C10.3981 8.3254 8.69416 9.97056 8.69416 12C8.69416 14.0294 10.3981 15.6746 12.5 15.6746C14.6019 15.6746 16.3058 14.0294 16.3058 12C16.3058 9.97056 14.6019 8.3254 12.5 8.3254ZM10.4507 12C10.4507 10.9072 11.3682 10.0214 12.5 10.0214C13.6318 10.0214 14.5493 10.9072 14.5493 12C14.5493 13.0927 13.6318 13.9786 12.5 13.9786C11.3682 13.9786 10.4507 13.0927 10.4507 12Z"
        fill={color ? color : 'white'}
        fill-opacity="0.5"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.9506 3.95666L12.5 0.625L9.04935 3.95666H4.16939V8.66835L0.71875 12L4.16939 15.3317V20.0433H9.04935L12.5 23.375L15.9506 20.0433H20.8306V15.3317L24.2812 12L20.8306 8.66833V3.95666H15.9506ZM9.77693 5.65262L12.5 3.02345L15.2231 5.65262H19.0741V9.37083L21.7971 12L19.0741 14.6292V18.3474H15.2231L12.5 20.9765L9.77693 18.3474H5.92592V14.6292L3.20286 12L5.92592 9.37084V5.65262H9.77693Z"
        fill-opacity="0.5"
        fill={color ? color : 'white'}
      />
    </svg>
  )
}
