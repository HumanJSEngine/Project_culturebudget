import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment/moment';
import styled from 'styled-components';
import colors from '../../styles/Theme';
import { RxTriangleLeft, RxTriangleRight } from 'react-icons/rx';

interface ShowCalendarProps {
  caldata: [];
}

const ShowCalendar = ({ caldata }: ShowCalendarProps) => {
  const [currentMonth, setCurrentMonth] = useState();
  const [value, onChange] = useState(new Date());
  const data = caldata.map((item) => {
    return {
      date: moment(item.ehDate).format('YYYY-MM-DD'),
      price: item.ehPrice,
    };
  });

  const result = data.reduce((acc, cur) => {
    const index = acc.findIndex((item) => item.date === cur.date);
    if (index >= 0) {
      acc[index].price += cur.price;
    } else if (index === -1) {
      acc.push(cur);
    }
    return acc;
  }, []);
  return (
    <div>
      {result.length !== 0 && (
        <Calendar
          onChange={onChange}
          formatDay={(locale, date) => moment(date).format('DD')}
          value={value}
          prevLabel={<RxTriangleLeft />}
          prev2Label={null}
          nextLabel={<RxTriangleRight />}
          next2Label={null}
          tileContent={({ date }) => {
            let html = [];
            for (let i = 0; i < result.length; i++) {
              if (result[i].date === moment(date).format('2022-MM-DD')) {
                html.push(
                  <DatePrice key={moment(date).format('YYYYMMDD')}>
                    +{result[i].price.toLocaleString()}
                  </DatePrice>
                );
              } else {
                if (i === result.length) {
                  html.push(
                    <DatePrice
                      key={moment(date).format('YYYYMMDD')}
                    ></DatePrice>
                  );
                }
              }
            }
            return <div>{html}</div>;
          }}
        />
      )}
    </div>
  );
};

const DatePrice = styled.span`
  width: 100%;
  color: ${colors.primary};
  font-size: 8px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`;

export default ShowCalendar;
