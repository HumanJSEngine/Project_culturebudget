/** @format */

import { useState, useCallback, useEffect } from 'react';
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
import GetMemberNumber from '../utils/GetMemberNumber';
import { BudgetData } from '../types/Budget';
import Loading from '../components/common/Loading';

type fetchData = (year: number, month: number) => Promise<void>;

const Stats = () => {
  const [isLoading, setIsLoding] = useState<boolean>(false);
  const [statdata, setStatdata] = useState<BudgetData[]>([]);
  const [month, setMonth] = useState(3);
  const [year, setYear] = useState(2023);
  let memberNum = GetMemberNumber();

  const fetchData: fetchData = useCallback(
    async (year: number, month: number) => {
      setIsLoding(true);
      try {
        const result = await axios.get(
          `http://haeji.mawani.kro.kr:8585/api/expense/history/monthly/list2?member=${memberNum}&dt=${year}-${month}&page=0&size=10`
        );
        setStatdata(result.data.list);
        setIsLoding(false);
      } catch (error) {
        console.log(error);
        setIsLoding(false);
      }
    },
    [memberNum, setStatdata]
  );

  useEffect(() => {
    fetchData(year, month);
  }, [fetchData, year, month]);

  const result = statdata.reduce((ac: BudgetData[], cu) => {
    const index: number = ac.findIndex((item) => item.ccName === cu.ccName);
    if (index >= 0) {
      ac[index].ehPrice += cu.ehPrice;
    } else if (index === -1) {
      ac.push(cu);
    }
    return ac;
  }, []);

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
        <Exppermonth month={month} monthprice={ConvertPercent(result)} />
        <Category>
          <Monthprice ccSeq={'대분류'} />
          <Chart statdata={result} />
          <Expcatelist>
            {result.map((item: any, idx: number) => {
              return (
                <List key={idx}>
                  <Leftlist
                    part={item.ccName}
                    price={item.ehPrice}
                    percent={ConvertPercent(result)}
                    color={'#6C80FF'}
                  />
                  <Rightlist price={item.ehPrice} />
                </List>
              );
            })}
          </Expcatelist>
        </Category>
        {isLoading && <Loading />}
      </Container>
      <BottomNavigation />
    </Page>
  );
};

export default Stats;
