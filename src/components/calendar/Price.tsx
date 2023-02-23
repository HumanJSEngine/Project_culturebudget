import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/Theme';
import fonts from '../../styles/FontStyle';

interface PriceProps {
  price: number;
}

const Price = ({ price }: PriceProps) => {
  return <Prices>+{price.toLocaleString()}원</Prices>;
};

const Prices = styled.span`
  width: 30%;
  font: ${fonts.score15Medium};
  color: ${colors.primary};
  text-align: end;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`;
export default Price;
