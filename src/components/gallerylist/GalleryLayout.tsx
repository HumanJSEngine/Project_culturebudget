import React from 'react';
import styled from 'styled-components';

interface GalleryLayoutProps {
  children: React.ReactNode;
}

const GalleryLayout = ({ children }: GalleryLayoutProps) => {
  return <GLayout>{children}</GLayout>;
};

const GLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(120px, auto));
  grid-auto-rows: minmax(120px, auto);
  grid-auto-flow: dense;
  gap: 2px;
`;
export default GalleryLayout;
