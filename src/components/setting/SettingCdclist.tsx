import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Page from '../../styles/Page';
import Header from '../common/Header';
import Container from '../../styles/Container';
import AddCateList from './AddCateList';
import SettingCateList from './SettingCateList';
import HeaderGoBackButton from '../common/HeaderGoBackButton';

interface DetailCategoryData {
    cdcSeq: number;
    cdcName: string;
}

const SettingCdclist = () => {
    const { no, name } = useParams();
    const [cdclist, setCdclist] = useState<DetailCategoryData[]>([]);

    const fetchData = async () => {
        try {
            const result = await axios.get(
                `http://haeji.mawani.kro.kr:8585/api/category/detail/list?no=${no}`
            );
            setCdclist(result.data.cdclist);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const addCdclist = async () => {
        const cdcName = prompt('추가할 소분류를 입력하세요');
        let body = {
            cdcName: cdcName,
            cdcCcSeq: no,
        };
        try {
            await axios
                .put(
                    'http://haeji.mawani.kro.kr:8585/api/category/detail/input',
                    body
                )
                .then((res) => {
                    if (res.data.status) {
                        alert(res.data.message);
                        fetchData();
                    } else {
                        alert('카테고리 추가 실패');
                    }
                });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Page>
            <Header title={name} HeaderLeft={<HeaderGoBackButton />} />
            <Container>
                <SettingList>
                    <AddCateList addCdclist={addCdclist}>
                        세부 카테고리 추가
                    </AddCateList>
                    {cdclist.length > 0 ? (
                        cdclist.map((list) => (
                            <SettingCateList
                                key={list.cdcSeq}
                                cdcSeq={list.cdcSeq}
                                fetchData={fetchData}
                                to={`/setting`}
                            >
                                <span>{list.cdcName}</span>
                            </SettingCateList>
                        ))
                    ) : (
                        <span>세부 카테고리를 추가해주세요</span>
                    )}
                </SettingList>
            </Container>
        </Page>
    );
};

const SettingList = styled.ul`
    width: 100%;
`;
export default SettingCdclist;
