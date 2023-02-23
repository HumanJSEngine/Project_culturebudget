import { SlArrowRight } from 'react-icons/sl';
import styled from 'styled-components';
import fonts from '../../../styles/FontStyle';
import colors from '../../../styles/Theme';

const ModalListItem = ({ hasDetail, seq, name, selectEvent }) => {
  return (
    <Box onClick={() => selectEvent && selectEvent(seq, name, hasDetail)}>
      <ItemName>{name}</ItemName>
      {hasDetail && (
        <SelectIcon>
          <SlArrowRight size={12} />
        </SelectIcon>
      )}
    </Box>
  );
};

const Box = styled.li`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 44px;
  border-bottom: 1px solid ${colors.gray200};
  cursor: pointer;
`;
const ItemName = styled.span`
  color: ${colors.gray700};
  font: ${fonts.score13Regular};
`;

const SelectIcon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: right;
  align-items: center;
  height: 100%;
  color: ${colors.placeholder};
`;
export default ModalListItem;
