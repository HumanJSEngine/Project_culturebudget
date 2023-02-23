import React from 'react';
import styled from 'styled-components';

interface CategoryProps {
  children: React.ReactNode;
}

const Category = ({ children }: CategoryProps) => {
  return <Cate>{children}</Cate>;
};

const Cate = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px 0;
  margin-top: 20px;
  padding: 0 20px;
`;

export default Category;
