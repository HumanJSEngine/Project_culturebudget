import styled from 'styled-components';
import fonts from '../../styles/FontStyle';
import colors from '../../styles/Theme';
import useResizeTextArea from '../../hooks/useResizeTextArea';

interface WriteFormTextAreaProps {
  title: string;
  textRef: React.ForwardedRef<HTMLTextAreaElement>;
}

const WriteFormTextArea = ({ title, textRef }: WriteFormTextAreaProps) => {
  const { textareaHeight, resizeTextarea, onKeyEnter } = useResizeTextArea();
  return (
    <Box>
      <FormTitle>{title}</FormTitle>
      <FormInput
        placeholder={'입력하세요'}
        onInput={resizeTextarea}
        onKeyDown={onKeyEnter}
        row={textareaHeight.row}
        ref={textRef}
      />
    </Box>
  );
};

const Box = styled.div`
  position: relative;
  display: flex;
  gap: 5%;
  width: 100%;
  padding: 20px 0;
  border-bottom: 1px solid ${colors.gray200};
`;

const FormTitle = styled.p`
  width: 25%;
  height: 100%;
  color: ${colors.gray700};
  font: ${fonts.score15Regular};
`;

const FormInput = styled.textarea<{ row: number }>`
  width: 70%;
  min-height: 15px;
  height: ${({ row }) => 15 * row + 3}px;
  overflow-y: hidden;
  overflow-wrap: break-word;
  word-break: break-all;
  white-space: pre-wrap;
  resize: none;
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

export default WriteFormTextArea;
