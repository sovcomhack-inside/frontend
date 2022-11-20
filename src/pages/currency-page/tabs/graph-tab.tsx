import classNames from 'classnames'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import { UserModel } from 'shared/model'
import { BlueButton, WhiteButton } from 'shared/ui'
import { Graph, GraphProps } from 'shared/ui/graph'
import { NotifyIcon } from 'shared/ui/Icons/NotifyIcon'
import { CurrencyModel } from 'widgets'
import s from './tabs.scss'

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
  code?: string
  price?: number
  percent?: number
}

export const GraphTab: React.FC<GraphTabProps> = (props) => {
  const nav = useNavigate()
  const graphProps: GraphProps = {
    yOrientation: 'right',
    width: 320,
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
    data: points(),
  }

  function points() {
    let arr = CurrencyModel.data
    if (!arr) return []
    return CurrencyModel.data?.priceData.map((value, index) => {
      return {
        name: index,
        uv: value,
      }
    })
  }
  return (
    <div className={s.GraphTab}>
      <div className={s.topBar}>
        <span className={s.price}>{props.price}</span>
        <div>
          <NotifyIcon />
        </div>
        <span className={classNames(s.percent, { [s.positivePercent]: true })}>
          +0.53 ({props.percent})
        </span>
      </div>
      <div>
        <Graph {...graphProps} />
        <span>buttons</span>
      </div>
      <div className={s.buttons}>
        <BlueButton value={'Торгуем за вас'} />
        <WhiteButton
          value={'Купить'}
          onClick={() => props.code && nav(`/buy/${props.code}`)}
        />
      </div>
    </div>
  )
}
