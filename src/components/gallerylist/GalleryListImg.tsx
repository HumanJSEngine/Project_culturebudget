import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/Theme';
import fonts from '../../styles/FontStyle';

interface GalleryListImgProps {
  src: string;
  price: number;
}

const GalleryListImg = ({ src, price }: GalleryListImgProps) => {
  return (
    <GList>
      <MainImg src={src} alt='ex' />
      {/* <span className='date'>{date}</span> */}
      <span className='price'>+{price}</span>
    </GList>
  );
};

const MainImg = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 120px;
  height: 120px;
  opacity: 1;
`;

const GList = styled.div`
  position: relative;
  object-fit: contain;
  width: 120px;
  height: 120px;
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
