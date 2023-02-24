import React, { useState } from 'react';
import BottomNavigation from '../components/common/BottomNavigation';
import Page from '../styles/Page';
import Chart from '../components/stats/Chart';
import Exppermonth from '../components/stats/Exppermonth';
import Category from '../components/stats/Category';
import Expcatelist from '../components/stats/Expcatelist';
import List from '../components/stats/List';
import Rightlist from '../components/stats/Rightlist';
import Leftlist from '../components/stats/Leftlist';
import Monthprice from '../components/stats/Monthprice';
import Header from '../components/Layout/Header';
import useFetch from '../hooks/useFetch';
import Container from '../styles/Container';
import ConvertPercent from '../utils/ConvertPercent';
import { BudgetData } from '../types/Budget';

const Stats = () => {
    const statdata: Array<BudgetData> = useFetch(
        'get',
        'http://haeji.mawani.kro.kr:8585/api/expense/list'
    );

    return (
        <Page>
            <Header />
            <Container>
                <Exppermonth
                    month={'1월'}
                    monthprice={ConvertPercent(statdata)}
                />
                <Category>
                    <Monthprice ccSeq={'대분류'} />
                    <Chart statdata={statdata} />
                    <Expcatelist>
                        {statdata.map((item) => (
                            <List key={item.ehSeq}>
                                <Leftlist
                                    part={item.ehCcSeq}
                                    price={item.ehPrice}
                                    percent={ConvertPercent(statdata)}
                                    color={'#6C80FF'}
                                />
                                <Rightlist price={item.ehPrice} />
                            </List>
                        ))}
                    </Expcatelist>
                </Category>
            </Container>
            <BottomNavigation />
        </Page>
    );
};

export default Stats;
