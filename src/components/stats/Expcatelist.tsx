import React from 'react';
import styled from 'styled-components';

interface ExpcatelistProps {
    children: React.ReactNode;
}

const Expcatelist = ({ children }: ExpcatelistProps) => {
    return <Expcatelists>{children}</Expcatelists>;
};

const Expcatelists = styled.ul`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    gap: 10px 0px;
`;
export default Expcatelist;
