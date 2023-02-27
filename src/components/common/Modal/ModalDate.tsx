import { MutableRefObject, useState } from 'react';
import styled from 'styled-components';
import fonts from '../../../styles/FontStyle';
import colors from '../../../styles/Theme';
import Header from '../Header';
import HeaderButton from '../HeaderButton';

interface ModalDateProps {
  closeModal: () => void;
  timeRef: MutableRefObject<string>;
}

const ModalDate = ({ closeModal, timeRef }: ModalDateProps) => {
  const [selectDate, setSelectDate] = useState<string>(timeRef.current);
  const onChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectDate(e.target.value);
  };
  const selectTime = () => {
    timeRef.current = selectDate;
    closeModal();
  };
  return (
    <Box>
      <Header
        title={'날짜'}
        titlePosition={'left'}
        HeaderRight={
          <HeaderButton onClick={selectTime}>
            <HeaderText>완료</HeaderText>
          </HeaderButton>
        }
        border={true}
      />
      <ModalContents>
        <InputDateTime
          type='datetime-local'
          value={selectDate}
          onChange={onChangeDate}
        />
      </ModalContents>
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const HeaderText = styled.span`
  color: ${colors.primary};
  font: ${fonts.score15Regular};
`;
const ModalContents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 100%;
  height: 152px;
`;
const InputDateTime = styled.input`
  border: 0;
  color: ${colors.gray900};
  font: ${fonts.score15Medium};
  &:focus {
    outline: none;
  }
`;

export default ModalDate;
