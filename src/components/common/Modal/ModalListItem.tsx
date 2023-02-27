import { SlArrowRight } from 'react-icons/sl';
import styled from 'styled-components';
import fonts from '../../../styles/FontStyle';
import colors from '../../../styles/Theme';

export type selectCategoryHandler = (
  categorySeq: number,
  categoryName: string
) => void;
export type getDetailCategoryList = (
  categorySeq: number,
  categoryName: string
) => void;
export type selectDetailCategoryHandler = (
  categorySeq: number,
  categoryName: string
) => void;
export type selectPaymentHandler = (
  paymentSeq: number,
  paymentName: string
) => void;
export type editPostHandler = () => void;
export type deletePostHandler = () => void;

interface ModlaListItem {
  hasDetail?: boolean;
  seq?: number;
  name: string;
  selectEvent:
    | selectCategoryHandler
    | getDetailCategoryList
    | selectDetailCategoryHandler
    | selectPaymentHandler
    | editPostHandler
    | deletePostHandler;
}

const ModalListItem = ({
  hasDetail,
  seq,
  name,
  selectEvent,
}: ModlaListItem) => {
  return (
    <Box
      onClick={() => {
        if (seq) {
          return selectEvent(seq, name);
        } else {
          return selectEvent;
        }
      }}
    >
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
