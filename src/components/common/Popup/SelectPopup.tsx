import styled from 'styled-components';
import fonts from '../../../styles/FontStyle';
import colors from '../../../styles/Theme';
import FlexibleButton from '../FlexibleButton';

interface SelectPopupProps {
  isOpenPopup: boolean;
  message: string;
  closeText: string;
  submitText: string;
  closePopup: () => void;
  submitPopup: () => void;
}

const SelectPopup = ({
  isOpenPopup,
  message,
  closeText,
  submitText,
  closePopup,
  submitPopup,
}: SelectPopupProps) => {
  return (
    <>
      {isOpenPopup && (
        <PopupBackground>
          <PopupBox>
            <PopupText>{message}</PopupText>
            <ActiveArea>
              <FlexibleButton variant='transparent' onClick={closePopup}>
                {closeText}
              </FlexibleButton>
              <FlexibleButton variant='primary' onClick={submitPopup}>
                {submitText}
              </FlexibleButton>
            </ActiveArea>
          </PopupBox>
        </PopupBackground>
      )}
    </>
  );
};

const PopupBackground = styled.div`
  position: fixed;
  left: 0;
  height: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;
const PopupBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 90%;
  max-width: 320px;
  max-height: 300px;
  border-radius: 16px;
  background: ${colors.white};
  padding: 20px;
  z-index: 2;
`;
const PopupText = styled.p`
  width: 100%;
  color: ${colors.gray900};
  font: ${fonts.score15Regular};
`;
const ActiveArea = styled.div`
  display: flex;
  gap: 8px;
  justify-content: end;
  width: 100%;
`;

export default SelectPopup;
