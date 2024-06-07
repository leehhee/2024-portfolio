import { getKoreaTime } from '@/utils';
import { useEffect, useRef, useState } from 'react';

export const getFormattedTime = (time: number) => {
  if (number < 10) {
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

  useEffect(() => {
    // if (seco)
  }, [second]);

  return { hour, min, second };
};

export default useTime;
