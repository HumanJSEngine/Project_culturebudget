import styled from 'styled-components';
import colors from '../../styles/Theme';
import fonts from '../../styles/FontStyle';

interface DateListTotalProps {
  day: string;
  price: string;
}

const DateListTotal = ({ day, price }: DateListTotalProps) => {
  return (
    <DateTotal>
      <span>{day}일</span>
      {price ? <span>+{price}원</span> : <span>지출금액 없음</span>}
    </DateTotal>
  );
};

const DateTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 16px;
  margin-top: 32px;
  padding-bottom: 12px;
  border-bottom: 1px solid ${colors.gray200};
  span:nth-child(1) {
    font: ${fonts.score13Regular};
    color: ${colors.gray700};
  }
  span:nth-child(2) {
    font: ${fonts.score13Regular};
    color: ${colors.gray900};
  }
`;
export default DateListTotal;
