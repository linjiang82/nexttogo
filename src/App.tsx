import React, { useEffect, useMemo, useState } from "react";
import "./App.css";
import { RacingCategory } from "./utils/constants";
import { TFilter } from "./utils/types";
import { Card } from "./components/Card";
import { useFetchData } from "./hooks/useFetchData";

function App() {
  const [time, setTime] = useState(Date.now());
  const [filter, setFilter] = useState<TFilter>("");
  const { error, ids, racingData } = useFetchData();

  // fetch data on component mount
  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(Math.floor(Date.now() / 1000));
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  const handleFilter = (val: TFilter) => {
    setFilter(val);
  };

  // filter category if set then filter out those started for 1min
  const filteredRaces = useMemo(() => {
    if (racingData && ids) {
      return ids
        .filter((id) => {
          if (filter !== "")
            return racingData[id].category_id === RacingCategory[filter];
          return true;
        })
        .filter((id) => {
          return time - racingData[id].advertised_start.seconds < 60;
        })
        .map((id) => {
          return <Card key={id} race={racingData[id]} />;
        })
        .slice(0, 5);
    }
  }, [filter, time, ids, racingData]);

  return (
    <>
      <div>
        <button onClick={() => handleFilter("")}>All</button>
        <button onClick={() => handleFilter("HORSE_RACING")}>Horse</button>
        <button onClick={() => handleFilter("HARNESS_RACING")}>Harness</button>
        <button onClick={() => handleFilter("GREYHOUND_RACING")}>
          Greyhound
        </button>
      </div>
      <div className='container'>
        {error && <div>{error}</div>}
        {filteredRaces}
      </div>
    </>
  );
}

export default App;
