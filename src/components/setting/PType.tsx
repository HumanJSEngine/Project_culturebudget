import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Page from '../../styles/Page';
import Container from '../../styles/Container';
import Header from '../common/Header';
import axios from 'axios';
import { useParams } from 'react-router';
import PTypelist from './PTypelist';

const PType = () => {
    const name: string = useParams().name;
    const [plists, setPlists] = useState([]);

    // const pName = (name: string) => {
    //     switch (name) {
    //         case '카드':
    //             return '카드';
    //         case '은행':
    //             return '은행';
    //         case '현금':
    //             return '현금';
    //     }
    // };

    const fetchData = async (name: string) => {
        try {
            const result = await axios.get(
                'http://haeji.mawani.kro.kr:8585/api/payment/listall'
            );
            let pLists = result.data.payList;
            if (name === '카드') {
                let cardList = pLists.filter((item: any) => item.piType === 1);
                setPlists(cardList);
            }
            if (name === '은행') {
                let cardList = pLists.filter((item: any) => item.piType === 2);
                setPlists(cardList);
            }
            if (name === '현금') {
                let cardList = pLists.filter((item: any) => item.piType === 3);
                setPlists(cardList);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData(name);
    }, []);

    return (
        <Page>
            <Header title={name} />
            <Container>
                <SettingList>
                    {name &&
                        plists.map(({ piSeq, piType, piName }, idx) => (
                            <PTypelist
                                key={idx}
                                piSeq={piSeq}
                                piType={piType}
                                piName={piName}
                            />
                        ))}
                    {plists.length === 0 && (
                        <span>결제수단을 추가해주세요</span>
                    )}
                </SettingList>
            </Container>
        </Page>
    );
};

const SettingList = styled.ul`
    width: 100%;
    padding: 0 16px;
`;
export default PType;
