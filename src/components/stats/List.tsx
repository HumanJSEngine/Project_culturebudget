import React from 'react';
import styled from 'styled-components';

interface ListProps {
  children: React.ReactNode;
}

const List = ({ children }: ListProps) => {
  return <Listcontainer>{children}</Listcontainer>;
};

const Listcontainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export default List;
