import styled from 'styled-components';
import Page from '../styles/Page';
import Header from '../components/common/Header';
import Container from '../styles/Container';
import SetPaymentList from '../components/setting/SetPaymentList';
import HeaderGoBackButton from '../components/common/HeaderGoBackButton';

const SetPayment = () => {
    const goBack = <HeaderGoBackButton />;
    return (
        <Page>
            <Header title={'결제 수단 편집'} HeaderLeft={goBack} />
            <Container>
                <SettingList>
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
