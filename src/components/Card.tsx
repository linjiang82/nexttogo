import React from 'react'
import { TRace } from '../utils/types'
import './Card.css'
import { RacingCategory } from '../utils/constants'
import HORSE_RACING from '../assets/horse.png'
import HARNESS_RACING from '../assets/harness.jpeg'
import GREYHOUND_RACING from '../assets/greyhound.jpeg'

const getSrc = (category_id: `${RacingCategory}`) => {
  switch (category_id) {
    case RacingCategory['GREYHOUND_RACING']:
      return GREYHOUND_RACING
    case RacingCategory['HORSE_RACING']:
      return HORSE_RACING
    case RacingCategory['HARNESS_RACING']:
      return HARNESS_RACING
  }
}

export const Card: React.FC<{ raceSum: TRace }> = ({ raceSum }) => {
  const { meeting_name, race_number, advertised_start: { seconds }, category_id } = raceSum
  return (
    <div className='card'>
      <p>{meeting_name}</p>
      <p className='raceNumber'>Race {race_number}</p>
      <div className='timer'>
        <img src={getSrc(category_id)} alt='racing category logo' className='logo' />
        <p className='countDownRed'>{Math.floor(seconds - Date.now() / 1000)}</p>
      </div>
    </div>
  )
}
