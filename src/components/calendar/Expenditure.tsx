import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/Theme';

const Expenditure = ({ children }) => {
  return <Expenditures>{children}</Expenditures>;
};

const Expenditures = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-bottom: 32px;
  background: ${colors.white};
`;

export default Expenditure;
