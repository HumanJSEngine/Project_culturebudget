import React, { useState } from 'react';
import styled from 'styled-components';
import colors from '../../styles/Theme';
import HeaderBackButton from '../ui/HeaderBackButton';
import HeaderFrontButton from '../ui/HeaderFrontButton';
import Search from '../ui/Search';
import Monthwrapper from './Monthwrapper';

const Header = () => {
    const [viewSearch, setViewSearch] = useState(false);
    return (
        <Block>
            <Monthwrapper>
                <HeaderBackButton />
                <Month>2월</Month>
                <HeaderFrontButton />
            </Monthwrapper>
            {viewSearch && <Search />}
        </Block>
    );
};

const Block = styled.header`
    display: flex;
    width: 100%;
    max-width: 360px;
    height: 50px;
    align-items: center;
    justify-content: space-between;
`;

const Month = styled.p`
    color: ${colors.gray900};
    text-align: center;
`;

export default Header;
