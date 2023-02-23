import React from 'react';
import BottomNavigation from '../components/common/BottomNavigation';
import Page from '../styles/Page';
import Header from '../components/common/Header';
import CateExpAll from '../components/catelist/CateExpAll';
import Expenditure from '../components/calendar/Expenditure';
import Catename from '../components/catelist/Catename';
import Perdaytotal from '../components/calendar/Perdaytotal';
import ExpendList from '../components/calendar/ExpendList';
import TitleList from '../components/calendar/TitleList';
import Title from '../components/calendar/Title';
import Category from '../components/calendar/Category';
import Price from '../components/calendar/Price';

const CateList = () => {
    return (
        <Page>
            <Header />
            <CateExpAll part={'영화'} total={400000} />
            <Expenditure>
                <Catename />
                <Perdaytotal counts={2} amounts={10000} />
                <hr />
                <ExpendList>
                    <TitleList>
                        <Title title={'제목입니다'} />
                        <Category
                            culture={'2023.03.03'}
                            place={'장소'}
                            payment={'결제수단'}
                        ></Category>
                    </TitleList>
                    <Price price={10000} />
                </ExpendList>
            </Expenditure>

            <BottomNavigation />
        </Page>
    );
};

export default CateList;
