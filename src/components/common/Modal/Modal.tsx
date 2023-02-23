import styled from 'styled-components';
import colors from '../../../styles/Theme';

const Modal = ({ openedModal, closeModal }) => {
  return (
    openedModal && (
      <>
        <ModalBackground onClick={closeModal} />
        <ModalBox>{openedModal}</ModalBox>
      </>
    )
  );
};

const ModalBackground = styled.div`
  position: fixed;
  left: 0;
  height: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  z-index: 1;
`;

const ModalBox = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  background: ${colors.white};
  z-index: 2;
`;

export default Modal;
