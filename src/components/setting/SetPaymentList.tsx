import React from 'react';
import styled from 'styled-components';
import fonts from '../../styles/FontStyle';
import colors from '../../styles/Theme';

interface SetPaymentListProps {
  title: string;
}

const SetPaymentList = ({ title }: SetPaymentListProps) => {
  return (
    <Box>
      <ItemName>{title}</ItemName>
    </Box>
  );
};

const Box = styled.li`
  position: relative;
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;
  height: 58px;
  border-bottom: 1px solid ${colors.gray200};
  cursor: pointer;
`;

const ItemName = styled.span`
  color: ${colors.gray900};
  font: ${fonts.score15Regular};
`;

export default SetPaymentList;
