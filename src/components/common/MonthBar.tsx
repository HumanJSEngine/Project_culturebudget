import moment from 'moment';
import React from 'react';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import styled from 'styled-components';
import fonts from '../../styles/FontStyle';
import colors from '../../styles/Theme';
import HeaderButton from './HeaderButton';

interface MonthBarProps {
  year: number;
  month: number;
  onChangeYear: (year: number) => void;
  onChangeMonth: (month: number) => void;
}

const MonthBar = ({
  year,
  month,
  onChangeMonth,
  onChangeYear,
}: MonthBarProps) => {
  const nextMonth = () => {
    let temp = month + 1;
    if (temp >= 13) {
      temp = 1;
      onChangeYear(year + 1);
    }
    onChangeMonth(temp);
  };
  const prevMonth = () => {
    let temp = month - 1;
    if (temp <= 0) {
      temp = 12;
      onChangeYear(year - 1);
    }
    onChangeMonth(temp);
  };
  return (
    <Box>
      <HeaderButton onClick={prevMonth}>
        <AiFillCaretLeft size={16} />
      </HeaderButton>
      <Month>
        {year !== moment().year() && `${year}년 `}
        {month}월
      </Month>
      <HeaderButton onClick={nextMonth}>
        <AiFillCaretRight size={16} />
      </HeaderButton>
    </Box>
  );
};

const Box = styled.div`
  width: auto;
  max-width: 180px;
  height: 44px;
  display: flex;
  align-items: center;
`;
const Month = styled.p`
  font: ${fonts.score15Regular};
  color: ${colors.gray900};
`;

export default MonthBar;
