import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { fetchData } from './utils/fetchData'
import { ENDPOINT } from './utils/constants'
import { TRace } from './utils/types'

function App() {
  const [racingData, setRacingData] = useState<Record<string, TRace>>()
  const [ids, setIds] = useState<string[]>()
  const [error, setError] = useState()
  const [time, setTime] = useState(Date.now())

  // fetch data on component mount
  useEffect(() => {
    fetchData(ENDPOINT).then(res => {
      if (res.error) {
        setError(res.error)
      }
      else {
        const { next_to_go_ids: ids, race_summaries } = res.data
        setIds(ids)
        setRacingData(race_summaries)
      }
    })
    const timeId = setInterval(() => {
      setTime(Date.now())
    }, 1000);
    return () => {
      clearInterval(timeId)
    }
  }, [])
  console.log(ids)
  console.log(racingData)
  return (
    <>
      <div>{time}</div>
      {error && <div>{error}</div>}
      {
        racingData && ids && ids.map((id) =>
          < div className="App">
            {racingData[id].race_number}
          </div>
        )
      }
    </>
  );
}

export default App;
