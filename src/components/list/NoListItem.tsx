import styled from 'styled-components';
import colors from '../../styles/Theme';
import Button from '../common/Button';

interface NoListItemProps {
  onWriteHandler: () => void;
}

const NoListItem = ({ onWriteHandler }: NoListItemProps) => {
  return (
    <Box>
      <span>내역이 없어요. 추가하시겠어요?</span>
      <Button onClick={onWriteHandler} variant='transparent'>
        네. 추가할게요.
      </Button>
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
