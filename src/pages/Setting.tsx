import React from 'react';
import styled from 'styled-components';
import BottomNavigation from '../components/common/BottomNavigation';
import Header from '../components/common/Header';
import SettingListItem from '../components/setting/SettingListItem';
import Container from '../styles/Container';
import Page from '../styles/Page';

const Setting = () => {
    return (
        <Page>
            <Header title={'설정'} />
            <Container>
                <SettingList>
                    <SettingListItem>내 정보 관리</SettingListItem>
                    <SettingListItem>리스트 형태 편집</SettingListItem>
                    <SettingListItem to={'/setcategory'}>
                        카테고리 편집
                    </SettingListItem>
                    <SettingListItem to={'/setpayment'}>
                        결제 수단 편집
                    </SettingListItem>
                    <SettingListItem>설정</SettingListItem>
                </SettingList>
            </Container>
            <BottomNavigation />
        </Page>
    );
};

const SettingList = styled.ul`
    width: 100%;
    padding: 0 16px;
`;

export default Setting;
