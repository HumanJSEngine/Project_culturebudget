import styled, { css } from 'styled-components';
import colors from '../../styles/Theme';

const FlexibleButton = styled.button<{
  primary: string;
  transparent: string;
  kakao: string;
}>`
  padding: 0 24px;
  height: 48px;
  border: none;
  border-radius: 8px;
  ${({ primary }) =>
    primary &&
    css`
      color: ${colors.white};
      background: ${colors.primary};
    `}
  ${({ transparent }) =>
    transparent &&
    css`
      color: ${colors.primary};
      background: transparent;
    `}
  ${({ kakao }) =>
    kakao &&
    css`
      color: ${colors.kakaoLabel};
      background: ${colors.kakaoContainer};
    `}
`;

export default FlexibleButton;
