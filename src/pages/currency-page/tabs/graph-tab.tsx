import React from 'react'
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import { Graph, GraphProps } from 'shared/ui/graph'

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const getRandomData = (len: number = 50) => {
  let arr = new Array(len).fill(0)
  arr = arr.map((_, index) => {
    return {
      name: index,
      uv: getRandomInt(50, 70),
    }
  })
  return arr
}

interface GraphTabProps {
  graphTabClass?: string
}

export const GraphTab: React.FC<GraphTabProps> = (props) => {
  const graphProps: GraphProps = {
    yOrientation: 'right',
    width: 350,
    height: 212,
    gridStroke: '#222',
    lineStrokeColor: '#fff',
    xDataKey: 'name',
    tooltipContent: (props: any) => {
      const payload = props.payload[0]?.payload ?? {}

      return (
        <>
          {payload.name} {payload.uv}
        </>
      )
    },
    graphContainerClass: props.graphTabClass,
    dot: false,
    lineDataKey: 'uv',
    data: getRandomData(20),
  }
  return <Graph {...graphProps} />
}
