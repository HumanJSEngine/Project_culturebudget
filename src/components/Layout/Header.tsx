import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import colors from '../../styles/Theme';
import { AiFillCaretLeft } from 'react-icons/ai';
import { AiFillCaretRight } from 'react-icons/ai';
import Search from '../ui/Search';
import Monthwrapper from './Monthwrapper';

interface HeaderProps {
    month: number;
    setMonth: () => void;
    year: number;
    setYear: () => void;
    fetchData: () => Promise<Function>;
}

const Header = ({ month, setMonth, year, setYear, fetchData }: HeaderProps) => {
    // const [viewSearch, setViewSearch] = useState(false);
    // console.log(month);

    const up = () => {
        if (month === 13) {
            setYear(year + 1);
            setMonth((month = 1));
        }
        setMonth(month + 1);
        fetchData(year, month);
    };

    const down = () => {
        if (month === 0) {
            setYear(year - 1);
            setMonth((month = 12));
        }
        setMonth(month - 1);
        fetchData(year, month);
    };

    return (
        <Block>
            <Monthwrapper>
                <IconButton onClick={() => down()}>
                    <AiFillCaretLeft />
                </IconButton>
                <Month>
                    {year && year}년 {month && month}월
                </Month>
                <IconButton onClick={() => up()}>
                    <AiFillCaretRight />
                </IconButton>
            </Monthwrapper>
            {/* {viewSearch && <Search />} */}
        </Block>
    );
};

const Block = styled.header`
    display: flex;
    width: 100%;
    max-width: 370px;
    height: 50px;
    align-items: center;
    justify-content: space-between;
`;

const Month = styled.p`
    width: 100%;
    color: ${colors.gray900};
    text-align: center;
`;

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
export default Header;
