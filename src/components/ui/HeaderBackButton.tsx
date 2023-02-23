import React from 'react';
import styled from 'styled-components';
import { AiFillCaretLeft } from 'react-icons/ai';

const HeaderBackButton = () => {
    return (
        <IconButton>
            <AiFillCaretLeft />
        </IconButton>
    );
};

const IconButton = styled.button`
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 4px;
    cursor: pointer;
    border: none;
`;

export default HeaderBackButton;
