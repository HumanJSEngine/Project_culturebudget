import React from 'react';
import styled from 'styled-components';
import Page from '../styles/Page';
import Container from '../styles/Container';
import SettingCateList from '../components/setting/SettingCateList';
import Header from '../components/common/Header';
import AddCateList from '../components/setting/AddCateList';
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import HeaderGoBackButton from '../components/common/HeaderGoBackButton';

interface CategoryData {
    ccSeq: number;
    ccName: string;
}

const SetCategory = () => {
    const [cclist, setCclist] = useState<CategoryData[]>([]);

    const fetchData = useCallback(async () => {
        try {
            const result = await axios.get(
                'http://haeji.mawani.kro.kr:8585/api/category/list'
            );
            setCclist(result.data.cclist);
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const addCclist = async () => {
        let cateName = prompt('추가할 카테고리명을 선택하세요');
        try {
            const res = await axios.put(
                `http://haeji.mawani.kro.kr:8585/api/category/input?ccName=${cateName}`
            );
            if (res.data.status) {
                alert(res.data.message);
                fetchData();
            }
        } catch (error) {
            console.log(error);
        }
    };

    const goBack = <HeaderGoBackButton />;
    return (
        <Page>
            <Header title={'카테고리 편집'} HeaderLeft={goBack} />
            <Container>
                <SettingList>
                    <AddCateList addCclist={addCclist}>
                        카테고리 추가
                    </AddCateList>
                    {cclist.map((list) => (
                        <SettingCateList
                            key={list.ccSeq}
                            to={`/setcategory/${list.ccSeq}/${list.ccName}`}
                            ccSeq={list.ccSeq}
                            fetchData={fetchData}
                        >
                            {list.ccName}
                        </SettingCateList>
                    ))}
                </SettingList>
            </Container>
        </Page>
    );
};

const SettingList = styled.ul`
    width: 100%;
`;

export default SetCategory;
