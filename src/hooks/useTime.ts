import { getKoreaTime } from '@/utils';
import { useEffect, useMemo, useRef, useState } from 'react';

export const getFormattedTime = (time: number) => {
  if (time < 10) {
    return `0${time}`;
  } else {
    return `${time}`;
  }
};

const useTime = () => {
  const timer = useRef<NodeJS.Timeout>();
  const [hour, setHour] = useState(getKoreaTime().hour);
  const [min, setMin] = useState(getKoreaTime().min);
  const [second, setSecond] = useState(getKoreaTime().second);

  useEffect(() => {
    timer.current = setInterval(() => {
      setSecond((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer.current);
  });

  const amPm = useMemo(() => {
    if (hour >= 12) return 'PM';
    else return 'AM';
  }, [hour]);

  const formattedHour = useMemo(() => (hour <= 12 ? hour : hour - 12), [hour]);

  useEffect(() => {
    if (second >= 60) {
      setSecond(0);
      setMin((prev) => prev + 1);
    }
  }, [second]);

  useEffect(() => {
    if (min >= 60) {
      setMin(0);
      setHour((prev) => prev + 1);
    }
  }, [min]);

  useEffect(() => {
    if (hour >= 24) {
      setHour(0);
    }
  }, [hour]);

  return { hour, min, second, amPm, formattedHour };
};

export default useTime;
