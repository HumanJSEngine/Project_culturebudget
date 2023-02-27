import styled from 'styled-components';
import colors from '../../../styles/Theme';

interface ModalProps {
  openedModal: React.ReactNode;
  closeModal: () => void;
}

const Modal = ({ openedModal, closeModal }: ModalProps) => {
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
  background: rgba(0, 0, 0, 0.3);
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
