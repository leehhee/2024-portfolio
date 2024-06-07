// FUNCTION 날짜 형식을 변경
export const getFormattedDate = (time: string, format?: 'day' | 'hour') => {
  const date = new Date(time).toISOString();

  switch (format) {
    case 'hour': // 'YYYY-MM-DD hh:mm:ss'
      let splitedDate = date.split('T');
      splitedDate[1] = splitedDate[1].split('.')[0];
      return splitedDate.join(' ');

    default: // 'YYYY-MM-DD'
      return date.split('T')[0];
  }
};

// FUNCTION 현재 날짜와 비교하여 방금 전, 몇분 전, 몇 시간 전 등으로 변환해주는 함수
export const getTimeForDay = (time: string) => {
  const today = new Date();
  const timeValue = new Date(time);

  const betweenTime = Math.floor(
    (today.getTime() - timeValue.getTime()) / 1000 / 60
  );
  if (betweenTime < 1) return '방금 전';
  if (betweenTime < 60) {
    return `${betweenTime}분 전`;
  }

  const betweenTimeHour = Math.floor(betweenTime / 60);
  if (betweenTimeHour < 24) {
    return `${betweenTimeHour}시간 전`;
  }

  const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
  if (betweenTimeDay < 6) {
    return `${betweenTimeDay}일 전`;
  }

  return getFormattedDate(time);
};

// FUNCTION 한국 시각 반환
export const getKoreaTime = () => {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60 * 1000;
  const koreaTimeDiff = 9 * 60 * 60 * 1000;
  const korNow = new Date(utc + koreaTimeDiff);
  const time = {
    hour: korNow.getHours(),
    min: korNow.getMinutes(),
    second: korNow.getSeconds(),
  };
  return time;
};
