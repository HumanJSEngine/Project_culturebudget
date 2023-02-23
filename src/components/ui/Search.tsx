import React from 'react';
import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';
import IconBox from '../../styles/IconBox';

const Search = () => {
    return (
        <SearchBtn>
            <IconBox>
                <BiSearch />
            </IconBox>
        </SearchBtn>
    );
};

const SearchBtn = styled.button`
    cursor: pointer;
    padding: 2px;
    border: none;
    background: transparent;
`;

export default Search;
