import React from 'react';
import styled from 'styled-components';
import colors from '../../styles/Theme';
import fonts from '../../styles/FontStyle';

interface CategoryProps {
    culture: string;
    place: string;
    payment: string;
    culture2: string;
}

const Category = ({ culture, culture2, place, payment }: CategoryProps) => {
    return (
        <Categories>
            <li>
                <span>{culture}</span>
            </li>
            <li>
                <span>{culture2}</span>
            </li>
            <li>
                <span>{place}</span>
            </li>
            <li>
                <span>{payment}</span>
            </li>
        </Categories>
    );
};

const Categories = styled.ul`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    gap: 8px;
    li {
        display: flex;
        position: relative;
        max-width: 35%;
        & span {
            color: ${colors.gray700};
            font: ${fonts.score12Regular};
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            word-break: break-all;
        }
        &:nth-child(-n + 3)::after {
            content: '';
            position: absolute;
            right: -4px;
            top: 4px;
            display: block;
            width: 1px;
            height: 11px;
            background: ${colors.gray700};
        }
    }
`;
export default Category;
