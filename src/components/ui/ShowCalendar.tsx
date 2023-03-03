import { Dispatch, SetStateAction } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment/moment';
import styled from 'styled-components';
import colors from '../../styles/Theme';
import { RxTriangleLeft, RxTriangleRight } from 'react-icons/rx';
import { BudgetData } from '../../types/Budget';

interface ShowCalendarProps {
  caldata: BudgetData[];
  calendarValue: Date;
  setCalendarValue: Dispatch<SetStateAction<Date>>;
}

interface CalendarData {
  date: string;
  price: number;
}

const ShowCalendar = ({
  caldata,
  calendarValue,
  setCalendarValue,
}: ShowCalendarProps) => {
  const data: CalendarData[] = caldata.map((item) => {
    return {
      date: moment(item.ehDate).format('YYYY-MM-DD'),
      price: item.ehPrice,
    };
  });

  const result = data.reduce((acc: CalendarData[], cur) => {
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
      <Calendar
        onChange={setCalendarValue}
        formatDay={(locale, date) => moment(date).format('DD')}
        value={calendarValue}
        prevLabel={<RxTriangleLeft />}
        prev2Label={null}
        nextLabel={<RxTriangleRight />}
        next2Label={null}
        tileContent={({ date }) => {
          let html = [];
          for (let i = 0; i < result.length; i++) {
            if (result[i].date === moment(date).format('YYYY-MM-DD')) {
              html.push(
                <DatePrice key={moment(date).format('YYYYMMDD')}>
                  +{result[i].price.toLocaleString()}
                </DatePrice>
              );
            } else {
              if (i === result.length) {
                html.push(
                  <DatePrice key={moment(date).format('YYYYMMDD')}></DatePrice>
                );
              }
            }
          }
          return <div>{html}</div>;
        }}
      />
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
