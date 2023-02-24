import styled, { css } from 'styled-components';
import colors from '../../styles/Theme';

type variant = 'primary' | 'transparent' | 'kakao';

const Button = styled.button<{ variant: variant }>`
  width: 100%;
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

export default Button;
