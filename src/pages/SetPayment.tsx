import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Page from '../styles/Page';
import Header from '../components/common/Header';
import Container from '../styles/Container';
import SetPaymentList from '../components/setting/SetPaymentList';
import AddPType from '../components/setting/AddPType';
import Modal from '../components/common/Modal/AddPaymentModal';

const SetPayment = () => {
    const [addpayment, setAddpayment] = useState(true);

    return (
        <Page>
            <Header
                onClick={() => setAddpayment(!addpayment)}
                title={'결제 수단 편집'}
            />
            {addpayment && (
                <Modal visible={addpayment}>
                    <div className='모달창 테스트'></div>
                </Modal>
            )}
            <Container>
                <SettingList>
                    <AddPType title={'결제 수단 추가'} />
                    <SetPaymentList
                        title={'카드'}
                        to={'/ptype/카드'}
                        piType={1}
                    />
                    <SetPaymentList
                        title={'은행'}
                        to={'/ptype/은행'}
                        piType={2}
                    />
                    <SetPaymentList
                        title={'현금'}
                        to={'/ptype/현금'}
                        piType={3}
                    />
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
