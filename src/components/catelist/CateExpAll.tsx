import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/Theme';
import fonts from '../../styles/FontStyle';

interface CateExpAllProps {
    part: string;
    total: number;
}
const CateExpAll = ({ part, total }: CateExpAllProps) => {
    return (
        <Expmonth>
            <p>{part}</p>
            <p>{total}원</p>
        </Expmonth>
    );
};

const Expmonth = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px 0;
    padding: 0 10px;
    margin-top: 10px;
    p:nth-child(1) {
        font: ${fonts.score15Regular};
        color: ${colors.gray900};
    }
    p:nth-child(2) {
        font-size: 24px;
        color: ${colors.gray900};
    }
`;
export default CateExpAll;
