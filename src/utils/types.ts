import { RacingCategory } from './constants'
export type TRace = {
  "race_id": string,
  "race_number": number,
  "meeting_name": string,
  "category_id": `${RacingCategory}`,
  "advertised_start": {
    "seconds": number
  },
}
