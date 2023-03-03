import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Page from '../../styles/Page';
import Header from '../common/Header';
import Container from '../../styles/Container';
import AddCateList from './AddCateList';
import SettingLocalCateList from './SettingLocalCateItem';
import { LocalDetailCategoryData } from '../../types/Local';

const SettingLocalDetailCateList = () => {
    const { categoryId } = useParams();
    const [cdclist, setCdclist] = useState<LocalDetailCategoryData[]>([]);

    const fetchData = async () => {};

    useEffect(() => {
        fetchData();
    }, []);

    const addCdclist = async () => {};

    return (
        <Page>
            <Header title={name} />
            <Container>
                <SettingList>
                    <AddCateList addCdclist={addCdclist}>
                        세부 카테고리 추가
                    </AddCateList>
                    {cdclist.length > 0 ? (
                        cdclist.map((category) => (
                            <SettingLocalCateList
                                key={category.categoryId}
                                categoryId={category.categoryId}
                                categoryName={category.categoryName}
                            ></SettingLocalCateList>
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
    padding: 0 16px;
`;
export default SettingLocalDetailCateList;
