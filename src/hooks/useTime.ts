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
  }, [second]);

  useEffect(() => {
    if (hour >= 24) {
      setSecond(0);
      setMin((prev) => prev + 1);
    }
  }, [second]);

  return { hour, min, second, amPm };
};

export default useTime;
