import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 128px;
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface MonthwrapperProps {
  children: React.ReactNode;
}

const Monthwrapper = ({ children }: MonthwrapperProps) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Monthwrapper;
