import React from 'react';
import styled from 'styled-components';
import { AiFillCaretRight } from 'react-icons/ai';

const HeaderFrontButton = () => {
    return (
        <IconButton>
            <AiFillCaretRight />
        </IconButton>
    );
};

const IconButton = styled.button`
    background: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 4px;
    cursor: pointer;
`;

export default HeaderFrontButton;
