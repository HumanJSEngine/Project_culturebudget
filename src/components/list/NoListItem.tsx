import moment from 'moment';
import styled from 'styled-components';
import colors from '../../styles/Theme';

interface NoListItemProps {
  year: number;
  month: number;
}

const NoListItem = ({ year, month }: NoListItemProps) => {
  return (
    <Box>
      <span>
        {year === moment().year() ? '' : `${year}년`} {month}월의 내역이 없어요.
      </span>
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 100%;
  height: 100%;
  background: ${colors.white};
`;

export default NoListItem;
