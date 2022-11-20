import classNames from 'classnames'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import { UserModel } from 'shared/model'
import { BlueButton, WhiteButton } from 'shared/ui'
import { Graph, GraphProps } from 'shared/ui/graph'
import { NotifyIcon } from 'shared/ui/Icons/NotifyIcon'
import { Currency, CurrencyApi, CurrencyData, CurrencyModel } from 'widgets'
import s from './tabs.scss'

interface GraphTabProps {
  graphTabClass?: string
  currency: Currency
}

export const GraphTab: React.FC<GraphTabProps> = observer((props) => {
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
    const res = CurrencyModel.data?.priceData.map(({ date, price }) => {
      return {
        date,
        uv: price,
      }
    })
    console.log(res)
    return res
  }
  return (
    <div className={s.GraphTab}>
      <div className={s.topBar}>
        <span className={s.price}>{props.currency.currentPrice}</span>
        <div>
          <NotifyIcon />
        </div>
        <span className={classNames(s.percent, { [s.positivePercent]: true })}>
          {props.currency.dayChange} ({props.currency.dayChangePct})
        </span>
      </div>
      <div>
        {props.currency.code && <Graph {...graphProps} />}

        <span>buttons</span>
      </div>
      <div className={s.buttons}>
        <BlueButton value={'Торгуем за вас'} />
        <WhiteButton
          value={'Купить'}
          onClick={() =>
            props.currency.code && nav(`/buy/${CurrencyModel.selected}`)
          }
        />
      </div>
    </div>
  )
})
