import React from 'react';
import styled from 'styled-components';
import Page from '../styles/Page';
import Header from '../components/common/Header';
import Container from '../styles/Container';
import SetPaymentList from '../components/setting/SetPaymentList';

const SetPayment = () => {
    return (
        <Page>
            <Header title={'결제 수단 편집'} />
            <Container>
                <SettingList>
                    <SetPaymentList title={'삼성카드'} />
                    <SetPaymentList title={'삼성카드'} />
                    <SetPaymentList title={'삼성카드'} />
                </SettingList>
            </Container>
        </Page>
    );
};

const SettingList = styled.ul`
    width: 100%;
    padding: 0 16px;
`;
export default SetPayment;
