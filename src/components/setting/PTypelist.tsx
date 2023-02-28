import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import fonts from '../../styles/FontStyle';
import colors from '../../styles/Theme';
import axios from 'axios';

interface PTypelistProps {
    piSeq: number;
    piType: number;
    piName: string;
    fetchData: () => void;
    name: string;
}

const PTypelist = ({
    piSeq,
    piType,
    piName,
    fetchData,
    name,
}: PTypelistProps) => {
    const delPlist = async (piSeq) => {
        try {
            const res = await axios.delete(
                `http://haeji.mawani.kro.kr:8585/api/payment/delete/${piSeq}`
            );
            if (res.data.status) {
                alert(res.data.message);
                fetchData(name);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Box>
            <Minus onClick={() => delPlist(piSeq)}>-</Minus>
            <Catelist>
                <ItemName>{piName}</ItemName>
            </Catelist>
        </Box>
    );
};

const Box = styled.li`
    display: flex;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 0 10px;
    margin: 0px 16px;
`;

const Minus = styled.button`
    width: 15px;
    height: 15px;
    background: #e23636;
    border-radius: 50%;
    border: none;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Catelist = styled.div`
    width: 100%;
    max-width: 330px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${colors.gray200};
    padding: 10px 0px;
`;

const ItemName = styled.span`
    color: ${colors.gray900};
    font: ${fonts.score15Regular};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;
export default PTypelist;
