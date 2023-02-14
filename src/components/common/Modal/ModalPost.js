import styled from 'styled-components';
import Header from '../Header';
import HeaderCloseButton from '../HeaderCloseButton';
import ModalListItem from './ModalListItem';

const ModalPost = ({ closeModal }) => {
  return (
    <Box>
      <Header HeaderRight={<HeaderCloseButton event={closeModal} />} border={true} />
      <ModalContents>
        <ModalList>
          <ModalListItem name={'수정하기'} />
          <ModalListItem name={'삭제하기'} />
        </ModalList>
      </ModalContents>
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const ModalContents = styled.div`
  width: 100%;
  height: 152px;
  padding: 0 16px;
`;
const ModalList = styled.ul`
  width: 100%;
  height: 100%;
`;

export default ModalPost;
