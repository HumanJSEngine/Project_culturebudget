import styled from 'styled-components';
import Header from '../Header';
import HeaderCloseButton from '../HeaderCloseButton';
import ModalListItem, { selectPaymentHandler } from './ModalListItem';
import { getPayment } from '../../../api/paymentApi';
import { MutableRefObject, useEffect, useState } from 'react';
import { PaymentInfo } from '../../../pages/Write';
import { PaymentData } from '../../../types/Budget';

interface ModalPaymentProps {
  closeModal: () => void;
  paymentRef: MutableRefObject<PaymentInfo>;
}

const ModalPayment = ({ closeModal, paymentRef }: ModalPaymentProps) => {
  const [paymentList, setPaymentList] = useState<PaymentData[]>([]);
  const getPaymentList = async () => {
    try {
      const res = await getPayment();
      const { message, status, payList } = res;
      if (!status) {
        return;
      }
      setPaymentList(payList);
    } catch (err) {
      console.log(err);
    }
  };
  const selectPaymentHandler: selectPaymentHandler = (
    paymentSeq,
    paymentName
  ) => {
    const paymentInfo = {
      paymentSeq: paymentSeq,
      paymentName: paymentName,
    };
    paymentRef.current = paymentInfo;
    closeModal();
  };
  useEffect(() => {
    getPaymentList();
  }, []);
  const list = paymentList.map(({ piSeq, piName }) => (
    <ModalListItem
      key={piSeq}
      seq={piSeq}
      name={piName}
      selectEvent={selectPaymentHandler}
    />
  ));
  return (
    <Box>
      <Header
        title={'결제 수단'}
        titlePosition={'left'}
        HeaderRight={<HeaderCloseButton event={closeModal} />}
        border={true}
      />
      <ModalContents>
        <ModalList>{list}</ModalList>
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
  height: 240px;
  padding: 0 16px;
  overflow-y: auto;
`;
const ModalList = styled.ul`
  width: 100%;
  height: 100%;
`;

export default ModalPayment;
