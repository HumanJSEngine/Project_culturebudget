import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/Theme';
import fonts from '../../styles/FontStyle';

interface ExppermonthProps {
  month: string;
  monthprice: number;
}

const Exppermonth = ({ month, monthprice }: ExppermonthProps) => {
  return (
    <Expmonth>
      <p className='month'>{month} ehSeq</p>
      <p className='monthprice'>{monthprice.toLocaleString()}</p>
    </Expmonth>
  );
};

const Expmonth = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px 0;
  padding: 0 20px;
  margin-top: 10px;
  p:nth-child(1) {
    font: ${fonts.score13Medium};
    color: ${colors.gray900};
  }
  p:nth-child(2) {
    font: ${fonts.score15Medium};
    color: ${colors.primary};
  }
`;
export default Exppermonth;
