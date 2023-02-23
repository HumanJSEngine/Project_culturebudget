import React from 'react';
import styled from 'styled-components';

const ExpendList = ({ children }) => {
  return <Expendlist>{children}</Expendlist>;
};

const Expendlist = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5%;
  width: 100%;
  height: 100%;
  padding: 8px 16px;
`;

export default ExpendList;
