import styled from 'styled-components';
import fonts from '../../styles/FontStyle';
import colors from '../../styles/Theme';

type border = boolean;

interface HeaderProps {
  title?: string;
  titlePosition?: string;
  border?: boolean;
  HeaderLeft?: React.ReactNode;
  HeaderRight?: React.ReactNode;
}

const Header = ({ title, border, HeaderLeft, HeaderRight }: HeaderProps) => {
  return (
    <Block border={border}>
      {HeaderLeft && <HeaderSide position={'left'}>{HeaderLeft}</HeaderSide>}
      {title && <HeaderTitle>{title}</HeaderTitle>}
      {HeaderRight && <HeaderSide position={'right'}>{HeaderRight}</HeaderSide>}
    </Block>
  );
};

const Block = styled.header<{ border?: border }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 44px;
  padding: 0 4px;
  background: ${colors.white};
  color: ${colors.gray900};
  border-top: ${({ border }) => (border ? `1px solid ${colors.gray200}` : '')};
  border-bottom: ${({ border }) =>
    border ? `1px solid ${colors.gray200}` : ''};
`;

const HeaderTitle = styled.p`
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 12px;
  color: ${colors.gray900};
  font: ${fonts.score15Regular};
  line-height: 15px;
`;

const HeaderSide = styled.div<{ position: string }>`
  position: absolute;
  left: ${({ position }) => (position === 'left' ? '4px' : 'auto')};
  right: ${({ position }) => (position === 'right' ? '4px' : 'auto')};
  top: 0;
`;

export default Header;
