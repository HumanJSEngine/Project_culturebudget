import styled from 'styled-components';
import fonts from '../../styles/FontStyle';
import colors from '../../styles/Theme';

interface WriteFormTextProps {
  title: string;
}

const WriteFormText = ({ title, textRef }: WriteFormTextProps) => {
  return (
    <Box>
      <FormTitle>{title}</FormTitle>
      <FormInput
        type='text'
        placeholder='입력하세요.'
        ref={textRef}
      ></FormInput>
    </Box>
  );
};

const Box = styled.div`
  position: relative;
  display: flex;
  gap: 5%;
  width: 100%;
  height: 58px;
  padding: 20px 0;
  border-bottom: 1px solid ${colors.gray200};
`;

const FormTitle = styled.p`
  width: 25%;
  height: 100%;
  color: ${colors.gray700};
  font: ${fonts.score15Regular};
`;

const FormInput = styled.input`
  width: 70%;
  height: 100%;
  border: none;
  border-radius: 0;
  color: ${colors.gray700};
  font: ${fonts.score15Regular};
  &::placeholder {
    color: ${colors.placeholder};
  }
  &:focus {
    outline: none;
  }
`;

const SelectIcon = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: right;
  align-items: center;
  width: 70%;
  height: 100%;
  border: 0;
  background: transparent;
  color: ${colors.placeholder};
  cursor: pointer;
`;

export default WriteFormText;
