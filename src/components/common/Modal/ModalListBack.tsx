import styled from 'styled-components';
import fonts from '../../../styles/FontStyle';
import colors from '../../../styles/Theme';
import { SlArrowLeft } from 'react-icons/sl';

interface ModalListBackProps {
  name: string;
  backEvent: () => void;
}

const ModalListBack = ({ name, backEvent }: ModalListBackProps) => {
  return (
    <Box onClick={() => backEvent()}>
      <SelectIcon>
        <SlArrowLeft size={12} />
      </SelectIcon>
      <ItemName>{name}</ItemName>
    </Box>
  );
};

const Box = styled.li`
  position: relative;
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;
  height: 44px;
  border-bottom: 1px solid ${colors.gray200};
  cursor: pointer;
`;
const ItemName = styled.span`
  margin-left: 8px;
  color: ${colors.gray700};
  font: ${fonts.score13Regular};
`;

const SelectIcon = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  height: 100%;
  color: ${colors.placeholder};
`;
export default ModalListBack;
