import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/Theme';
import fonts from '../../styles/FontStyle';
import { BudgetData } from '../../types/Budget';

interface GalleryListImgProps {
  itemData: BudgetData;
  openPost: (postData: BudgetData) => void;
}

const GalleryListImg = ({ itemData, openPost }: GalleryListImgProps) => {
  const { VITE_IMAGE_URL } = import.meta.env;
  return (
    <GList onClick={() => openPost(itemData)}>
      <MainImg src={`${VITE_IMAGE_URL}/${itemData.ehImgFile}`} alt='ex' />
    </GList>
  );
};

const MainImg = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 100%;
  height: 100%;
  opacity: 1;
`;

const GList = styled.div`
  position: relative;
  object-fit: contain;
  width: 100%;
  height: 100%;
  .date {
    position: absolute;
    top: 8px;
    left: 8px;
    font: ${fonts.score15Medium};
    color: ${colors.white};
  }
  .price {
    position: absolute;
    bottom: 5px;
    right: 5px;
    font: ${fonts.score13Regular};
    color: ${colors.primary};
  }
`;

export default GalleryListImg;
