import React from "react";
import { TRace } from "../utils/types";
import "./Card.css";
import { RacingCategory } from "../utils/constants";
import HORSE_RACING from "../assets/horse.png";
import HARNESS_RACING from "../assets/harness.jpeg";
import GREYHOUND_RACING from "../assets/greyhound.jpeg";
import { convertTime } from "../utils/convertTime";

// get the logo according to the category_id
export const getIcon = (category_id: `${RacingCategory}`) => {
  switch (category_id) {
    case RacingCategory["GREYHOUND_RACING"]:
      return GREYHOUND_RACING;
    case RacingCategory["HORSE_RACING"]:
      return HORSE_RACING;
    case RacingCategory["HARNESS_RACING"]:
      return HARNESS_RACING;
  }
};

export const Card: React.FC<{ race: TRace }> = ({ race: raceSum }) => {
  const {
    meeting_name,
    race_number,
    advertised_start: { seconds },
    category_id,
  } = raceSum;
  return (
    <div className='card' data-testid='card'>
      <p>{meeting_name}</p>
      <p className='raceNumber'>Race {race_number}</p>
      <div className='timer'>
        <img
          src={getIcon(category_id)}
          alt='racing category logo'
          className='logo'
        />
        <p className='countDown'>{convertTime(seconds)}</p>
      </div>
    </div>
  );
};
