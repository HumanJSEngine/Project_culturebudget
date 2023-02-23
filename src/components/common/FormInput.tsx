import styled from 'styled-components';
import colors from '../../styles/Theme';

const FormInput = styled.input.attrs(({ type }) => ({
  type,
}))`
  width: 100%;
  height: 48px;
  color: ${colors.gray900};
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${colors.gray900};
  &::placeholder {
    color: ${colors.placeholder};
  }
  &:focus {
    outline: none;
  }
`;

export default FormInput;
