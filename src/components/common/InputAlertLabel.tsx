import styled from 'styled-components';
import fonts from '../../styles/FontStyle';
import colors from '../../styles/Theme';

const InputAlertLabel = styled.span<{ state: string }>`
  display: block;
  width: 100%;
  height: 16px;
  color: ${({ state }) =>
    state === 'success' ? colors.success : colors.error};
  font: ${fonts.score12Medium};
`;

export default InputAlertLabel;
