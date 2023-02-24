import React from 'react';
import styled from 'styled-components';
interface MonthpriceProps {
    ccSeq: string;
}

const Monthprice = ({ ccSeq }: MonthpriceProps) => {
    return (
        <Monthprices>
            <p className='exppercate'>{ccSeq}</p>
        </Monthprices>
    );
};

const Monthprices = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export default Monthprice;
