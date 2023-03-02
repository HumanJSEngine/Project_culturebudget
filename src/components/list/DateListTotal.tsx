import React from 'react';
import { BudgetData } from '../../types/Budget';
import styled from 'styled-components';
import colors from '../../styles/Theme';
import fonts from '../../styles/FontStyle';

interface DateListTotalProps {
    month: number;
    list: BudgetData[];
    price: string;
}

const DateListTotal = ({ month, price, list }: DateListTotalProps) => {
    return (
        <DateTotal>
            <span>
                {month}월 {list.length}건
            </span>
            {price ? <span>{price}원</span> : <span>지출금액 없음</span>}
        </DateTotal>
    );
};

const DateTotal = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 16px;
    padding-bottom: 16px;
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
