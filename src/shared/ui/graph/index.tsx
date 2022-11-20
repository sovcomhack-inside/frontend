import React, { ReactNode } from 'react'
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const getRandomData = (len: number = 50): [number[], number] => {
  let arr = new Array(len).fill(0)
  let values: number[] = []
  arr = arr.map((_, index) => {
    const uv = getRandomInt(50, 70)
    values.push(uv)
    return {
      name: index,
      uv: getRandomInt(50, 70),
    }
  })
  return [arr, Math.max(...values)]
}

export interface GraphProps {
  graphContainerClass?: string
  lineStrokeColor?: string
  width?: number
  height?: number
  gridStroke?: string
  tooltipContent?: JSX.Element | ((props: any) => ReactNode)
  xDataKey?: string
  lineDataKey?: string
  xOrientation?: 'top' | 'bottom'
  yOrientation?: 'left' | 'right'
  dot?: boolean
  data?: any[]
}

export const Graph: React.FC<GraphProps> = (props) => {
  return (
    <div className={props.graphContainerClass}>
      <LineChart
        width={props.width}
        height={props.height}
        data={getRandomData(15)[0]}
      >
        <CartesianGrid stroke={props.gridStroke} strokeDasharray="5 5" />
        <Line
          type="monotone"
          dataKey={props.lineDataKey}
          stroke={props.lineStrokeColor}
          dot={props.dot}
        />
        <YAxis orientation={props.yOrientation} ticks={[20, 40, 60, 80]} />
        <XAxis dataKey={props.xOrientation} ticks={[0, 3, 6, 9, 12, 15]} />
        <Tooltip content={props.tooltipContent} />
      </LineChart>
    </div>
  )
}
