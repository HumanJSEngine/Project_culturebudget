import React from 'react';
import styled from 'styled-components';

const Monthprice = () => {
    return (
        <Monthprices>
            <p className='exppercate'>카테고리별 지출</p>
        </Monthprices>
    );
};

const Monthprices = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export default Monthprice;
