import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/Theme';
import fonts from '../../styles/FontStyle';

interface DatelistProps {
    date: string;
    weekday: string;
}

const Datelist = ({ date, weekday }: DatelistProps) => {
    return (
        <Datelists>
            {date && <span>{date}</span>}
            {weekday && <span>{weekday}</span>}
        </Datelists>
    );
};

const Datelists = styled.p`
    display: flex;
    gap: 4px;
    span {
        color: ${colors.gray900};
        font: ${fonts.score13Medium};
    }
`;

export default Datelist;
