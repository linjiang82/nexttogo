import { useEffect, useState } from "react";
import { ENDPOINT } from "../utils/constants";
import { fetchData } from "../utils/fetchData";
import { TRace } from "../utils/types";

export const useFetchData = () => {
  const [racingData, setRacingData] = useState<Record<string, TRace>>();
  const [ids, setIds] = useState<string[]>();
  const [error, setError] = useState();

  const setRaceState = () => {
    fetchData(ENDPOINT).then((res) => {
      if (res.error) {
        setError(res.error);
      } else {
        const { next_to_go_ids: ids, race_summaries } = res.data;
        setIds(ids);
        setRacingData(race_summaries);
      }
    });
  };

  useEffect(() => {
    setRaceState();
    // intermittenly refetch the racing data
    const timerId = setInterval(() => {
      setRaceState();
    }, 60000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return { error, ids, racingData };
};
