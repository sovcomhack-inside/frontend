import React from 'react'

export enum FetchStatuses {
  idle = 'idle',
  fetch = 'fetch',
}

export type IconProps = React.FC<{ color: string }>
