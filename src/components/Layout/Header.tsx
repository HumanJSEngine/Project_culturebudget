import styled from 'styled-components';
import colors from '../../styles/Theme';
import { AiFillCaretLeft } from 'react-icons/ai';
import { AiFillCaretRight } from 'react-icons/ai';
import Monthwrapper from './Monthwrapper';
import moment from 'moment';

interface HeaderProps {
    month: number;
    year: number;
    setMonth: (month: number) => void;
    setYear: (year: number) => void;
    fetchData: (month: number, year: number) => Promise<void>;
}

const Header = ({ month, year, setMonth, setYear, fetchData }: HeaderProps) => {
    const up = () => {
        let temp = month + 1;
        if (temp >= 13) {
            temp = 1;
            setYear(year + 1);
        }
        setMonth(temp);
        fetchData && fetchData(year, month);
    };

    const down = () => {
        let temp = month - 1;
        if (temp <= 0) {
            temp = 12;
            setYear(year - 1);
        }
        setMonth(temp);
        fetchData && fetchData(year, month);
    };

    return (
        <Block>
            <Monthwrapper>
                <IconButton onClick={() => down()}>
                    <AiFillCaretLeft />
                </IconButton>
                <Month>
                    {year !== moment().year() && `${year}년 `} {month && month}
                    월
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

export const Month = styled.p`
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
