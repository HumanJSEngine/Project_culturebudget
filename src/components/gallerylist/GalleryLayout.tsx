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
  grid-template-columns: repeat(3, minmax(auto, auto));
  grid-auto-rows: minmax(auto, auto);
  grid-auto-flow: dense;
  gap: 1px;
`;
export default GalleryLayout;
