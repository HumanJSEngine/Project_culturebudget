import React from 'react';

const ChangeDay = (momentDay: number) => {
  let day: string;
  switch (momentDay) {
    case 0:
      day = '일요일';
      return day;
    case 1:
      day = '월요일';
      return day;
    case 2:
      day = '화요일';
      return day;
    case 3:
      day = '수요일';
      return day;
    case 4:
      day = '목요일';
      return day;
    case 5:
      day = '금요일';
      return day;
    case 6:
      day = '토요일';
      return day;
    default:
      return '';
  }
};

export default ChangeDay;
