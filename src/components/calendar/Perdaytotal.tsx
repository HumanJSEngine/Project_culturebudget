import styled from 'styled-components';
import colors from '../../styles/Theme';
import fonts from '../../styles/FontStyle';

interface PerdaytotalProps {
    counts: number;
    amounts: number;
}

const Perdaytotal = ({ counts, amounts }: PerdaytotalProps) => {
    return (
        <Perdaytotals>
            <span>총 {counts}건</span>
            <span>+{amounts.toLocaleString()}</span>
        </Perdaytotals>
    );
};

const Perdaytotals = styled.div`
    display: flex;
    justify-content: space-between;
    span:nth-child(1) {
        font: ${fonts.score13Regular};
        color: ${colors.gray700};
    }
    span:nth-child(2) {
        font: ${fonts.score13Medium};
        color: ${colors.gray900};
    }
`;

export default Perdaytotal;
