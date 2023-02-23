import styled from 'styled-components';
import fonts from '../../styles/FontStyle';
import colors from '../../styles/Theme';

interface WriteFormTitleProps {
  textRef: string;
}

const WriteFormTitle = ({ textRef }: WriteFormTitleProps) => {
  return (
    <Box>
      <FormInput
        type={'text'}
        placeholder={'제목을 입력하세요.'}
        ref={textRef}
      />
    </Box>
  );
};

const Box = styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;
  height: 58px;
  padding: 20px 0;
  border-bottom: 1px solid ${colors.gray200};
`;

const FormInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 0;
  color: ${colors.gray700};
  font: ${fonts.score15Medium};
  &::placeholder {
    color: ${colors.placeholder};
  }
  &:focus {
    outline: none;
  }
`;

export default WriteFormTitle;
