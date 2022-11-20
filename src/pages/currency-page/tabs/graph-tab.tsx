import classNames from 'classnames'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { useNavigate } from 'react-router-dom'
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
    xDataKey: 'date',
    tooltipContent: (props: any) => {
      const payload = props.payload[0]?.payload ?? {}
      return (
        <div className={s.tooltip}>
          <span>{payload.date}</span>
          <span>{payload.uv}</span>
        </div>
      )
    },
    graphContainerClass: props.graphTabClass,
    dot: false,
    lineDataKey: 'uv',
    data: CurrencyModel.getPoints,
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
        <div className={s.periodButtons}>
          <span
            className={classNames(s.periodButton, {
              [s.acitve]: CurrencyModel.days === 1,
            })}
            onClick={() => CurrencyModel.setDay(1)}
          >
            День
          </span>
          <span
            className={classNames(s.periodButton, {
              [s.acitve]: CurrencyModel.days === 14,
            })}
            onClick={() => CurrencyModel.setDay(14)}
          >
            2 Недели
          </span>
          <span
            className={classNames(s.periodButton, {
              [s.acitve]: CurrencyModel.days === 31,
            })}
            onClick={() => CurrencyModel.setDay(31)}
          >
            Месяц{' '}
          </span>
        </div>
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
