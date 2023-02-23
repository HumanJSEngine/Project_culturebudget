import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../styles/Theme';
import IconBox from '../../styles/IconBox';
import { BsListUl, BsFillCalendarFill } from 'react-icons/bs';
import { IoIosStats } from 'react-icons/io';
import { AiTwotoneSetting } from 'react-icons/ai';

interface BottomNavigationTabProps {
  children: React.ReactNode;
  type: string;
}

const BottomNavigationTab = ({ children, type }: BottomNavigationTabProps) => {
  const icon = () => {
    switch (type) {
      case '':
        return <BsListUl size={16} />;
      case 'calendar':
        return <BsFillCalendarFill size={16} />;
      case 'stats':
        return <IoIosStats size={16} />;
      case 'setting':
        return <AiTwotoneSetting size={16} />;
      default:
        return;
    }
  };
  return (
    <NavStyle to={`/${type}`}>
      <TabFrame>
        <IconBox>{icon()}</IconBox>
        <Text>{children}</Text>
      </TabFrame>
    </NavStyle>
  );
};

const NavStyle = styled(NavLink)`
  display: flex;
  justify-content: center;
  width: 25%;
  height: 55px;
  color: ${colors.gray600};
  border-top: 1px solid ${colors.gray600};
  background: ${colors.white};
  &.active {
    color: ${colors.primary};
    border-top: 1px solid ${colors.primary};
  }
`;
const TabFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  margin-top: 6px;
`;
const Text = styled.span`
  font-size: 12px;
  font-weight: 500;
`;

export default BottomNavigationTab;
