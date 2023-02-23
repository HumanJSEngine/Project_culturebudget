import React from 'react';
import styled from 'styled-components';
import IconBox from '../../styles/IconBox';
import { SlArrowRight } from 'react-icons/sl';
import colors from '../../styles/Theme';
import fonts from '../../styles/FontStyle';

interface RightlistProps {
  price: number;
}

const Rightlist = ({ price }: RightlistProps) => {
  return (
    <Rightlists>
      <span className='price'>{price.toLocaleString()}원</span>
      <IconBox>
        <button>
          <SlArrowRight />
        </button>
      </IconBox>
    </Rightlists>
  );
};

const Rightlists = styled.div`
  display: flex;
  gap: 0 5px;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    font: ${fonts.score15Regular};
    background: none;
    cursor: pointer;
    svg {
      color: ${colors.gray500};
    }
  }
`;
export default Rightlist;
