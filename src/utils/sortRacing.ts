// Did not need any more, found out the next_to_go_ids is already sorted
import { TRace } from './types'

export const sortRacing = (ids: string[], racing: Record<string, TRace>) => {
  ids.sort((a, b) => {
    const { advertised_start: {
      seconds: startOfA } } = racing[a];
    const { advertised_start: {
      seconds: startOfB } } = racing[b];
    return startOfA - startOfB
  })
  return ids;
}
