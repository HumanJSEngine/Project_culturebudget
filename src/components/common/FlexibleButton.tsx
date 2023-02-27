import styled, { css } from 'styled-components';
import colors from '../../styles/Theme';

type variant = 'primary' | 'transparent' | 'kakao';

const FlexibleButton = styled.button<{
  variant: variant;
}>`
  padding: 0 24px;
  height: 48px;
  border: none;
  border-radius: 8px;
  ${({ variant }) =>
    variant === 'primary' &&
    css`
      color: ${colors.white};
      background: ${colors.primary};
    `}
  ${({ variant }) =>
    variant === 'transparent' &&
    css`
      color: ${colors.primary};
      background: transparent;
    `}
  ${({ variant }) =>
    variant === 'kakao' &&
    css`
      color: ${colors.kakaoLabel};
      background: ${colors.kakaoContainer};
    `}
`;

export default FlexibleButton;
