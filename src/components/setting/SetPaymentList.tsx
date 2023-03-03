import styled from 'styled-components';
import fonts from '../../styles/FontStyle';
import colors from '../../styles/Theme';
import { SlArrowRight } from 'react-icons/sl';
import { Link, To } from 'react-router-dom';

interface SetPaymentListProps {
    title: string;
    to: To;
    piType: number;
}

const SetPaymentList = ({ title, to }: SetPaymentListProps) => {
    return (
        <Link to={to}>
            <Box>
                <ItemName>{title}</ItemName>
                <SlArrowRight size={12} />
            </Box>
        </Link>
    );
};

const Box = styled.li`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 58px;
    border-bottom: 1px solid ${colors.gray200};
    cursor: pointer;
`;

const ItemName = styled.span`
    color: ${colors.gray900};
    font: ${fonts.score15Regular};
`;

export default SetPaymentList;
