/** @format */

import React, { useState, useCallback } from 'react';
import axios from 'axios';
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
import Container from '../styles/Container';
import ConvertPercent from '../utils/ConvertPercent';
import { useRecoilState, useRecoilValue } from 'recoil';
import { dataState } from '../state/atoms/DataState';
import { dataList } from '../state/selectors/Selector';
import GetMemberNumber from '../utils/GetMemberNumber';

// type fetchData =<() => Promise<void>, []>;
type fetchData = (year: number, month: number) => Promise<void>;

const Stats = () => {
    // const statdata: Array<BudgetData> = useFetch(
    //     'get',
    //     'http://haeji.mawani.kro.kr:8585/api/expense/list'
    // );

    const [statdata, setStatdata] = useRecoilState(dataState);
    const [month, setMonth] = useState(2);
    const [year, setYear] = useState(2022);

    const statdata2 = useRecoilValue(dataList);

    const fetchData: fetchData = useCallback(
        async (year: number, month: number) => {
            try {
                const result = await axios.get(
                    `http://haeji.mawani.kro.kr:8585/api/expense/history/monthly/list2?member=${GetMemberNumber}&dt=${year}-${month}&page=0&size=10`
                );
                setStatdata(result.data.list);
            } catch (error) {
                console.log(error);
            }
        },
        [setStatdata]
    );

    // useEffect(() => {
    //     console.log('month: ', month);
    //     fetchData(year, month);
    // }, [year, month]);

    return (
        <Page>
            <Header
                month={month}
                year={year}
                setMonth={setMonth}
                setYear={setYear}
                fetchData={fetchData}
            />
            <Container>
                <Exppermonth
                    month={month}
                    monthprice={ConvertPercent(statdata)}
                />
                <Category>
                    <Monthprice ccSeq={'대분류'} />
                    <Chart statdata={statdata} />
                    <Expcatelist>
                        {statdata.map((item: any) => (
                            <List key={item.ehSeq}>
                                <Leftlist
                                    part={item.ehTitle}
                                    price={item.ehPrice}
                                    percent={ConvertPercent(statdata)}
                                    color={'#6C80FF'}
                                />
                                <Rightlist price={item.ehPrice} />
                            </List>
                        ))}
                    </Expcatelist>
                </Category>
                {/* {isLoading && <Loading />} */}
            </Container>
            <BottomNavigation />
        </Page>
    );
};

export default Stats;
