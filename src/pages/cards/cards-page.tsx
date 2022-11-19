import React, { useState } from 'react'
import { BackButton } from 'shared/ui'
import { Link, useNavigate } from "react-router-dom";
import '../../index.css'
import { Card } from 'pages/cards/types';

export const CardsPage: React.FC = () => {
  const navigate = useNavigate();

  const [cards, setCards] = useState<Card[]>([
    { maskedSerno: "*9341" },
    { maskedSerno: "*1881" },
  ]);

  const mapCard = (card: Card) => {
    return <div className='flex flex-row rounded-md p-6 bg-neutral-900 gap-6'>
      <div className='text-lg bg-white text-black px-8 py-4 rounded-md grid place-items-center'>
        MIR
      </div>
      <div className='text-lg font-bold'>Карта {card.maskedSerno}</div>
    </div>
  }

  return (
    <div className='flex flex-col w-80 mx-auto gap-4'>
      <BackButton onClick={() => navigate("/profile")} />
      <div className='text-4xl font-bold'>Пополнить</div>
      <div className='flex flex-col gap-2 h-1/4 overflow-hidden'>
        {cards?.map(mapCard)}
      </div>
      <Link
        to={{ pathname: '/cards/new' }}
        className='text-5xl bg-neutral-900 p-4 rounded-md text-center hover:bg-neutral-800'
      >
        +
      </Link>
    </div>
  )
}
