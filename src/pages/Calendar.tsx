import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BottomNavigation from '../components/common/BottomNavigation';
import ShowCalendar from '../components/ui/ShowCalendar';
import Page from '../styles/Page';
import ExpendList from '../components/calendar/ExpendList';
import TitleList from '../components/calendar/TitleList';
import Title from '../components/calendar/Title';
import Category from '../components/calendar/Category';
import Price from '../components/calendar/Price';
import Expenditure from '../components/calendar/Expenditure';
import Datelist from '../components/calendar/Datelist';
import Perdaytotal from '../components/calendar/Perdaytotal';
import 'react-calendar/dist/Calendar.css';
import 'moment/locale/ko';
import Container from '../styles/Container';
import GetTotal from '../utils/GetTotal';
import colors from '../styles/Theme';
import { BudgetData } from '../types/Budget';
import { getPost } from '../api/postApi';

const Calendar = () => {
    const [result, setResult] = useState<BudgetData[]>([]);
    const [item, setItem] = useState<BudgetData[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const getFetchData = async () => {
        setIsLoading(true);
        try {
            const res = await getPost();
            const { expense } = res;
            setResult(expense.slice(0, 5));
            const sliceData = expense.slice(5);
            setItem(sliceData);
            setIsLoading(false);
        } catch (err) {
            console.log(err);
            setIsLoading(false);
        }
        // await axios
        //   .get('http://haeji.mawani.kro.kr:8585/api/expense/list')
        //   .then((res) => {
        //     let response = res.data.expense;
        //     setResult(response.slice(0, 5));
        //     response = response.slice(5);
        //     setItem(response);
        //     setIsLoading(false);
        //   });
    };

    //   const _infiniteScroll = useCallback(() => {
    //     let scrollHeight = Math.max(
    //       document.documentElement.scrollHeight,
    //       document.body.scrollHeight
    //     );
    //     let scrollTop = Math.max(
    //       document.documentElement.scrollTop,
    //       document.body.scrollTop
    //     );
    //     let clientHeight = document.documentElement.clientHeight;
    //     scrollHeight -= 1000;
    //     if (scrollTop + clientHeight >= scrollHeight && isLoading === false) {
    //       fetchMoreData();
    //     }
    //   }, [isLoading]);

    useEffect(() => {
        getFetchData();
    }, []);

    //   useEffect(() => {
    //     window.addEventListener('scroll', _infiniteScroll, true);
    //     return () => {
    //       window.removeEventListener('scroll', _infiniteScroll, true);
    //     };
    //   }, [_infiniteScroll]);

    const fetchMoreData = async () => {
        setIsLoading(true);
        setResult(result.concat(item.slice(0, 10)));
        setItem(item.slice(10));

        if (item.length > 15) {
            const timer = setTimeout(() => {
                setResult(result.concat(item.slice(0, 20)));
                setItem(item.slice(20));
                if (item.length === 25) clearTimeout(timer);
            }, 1000);
        }
        setIsLoading(false);
    };

    return (
        <Page>
            <Container>
                <CalendarWrap>
                    <ShowCalendar caldata={result} />
                </CalendarWrap>
                <Expenditure>
                    <TotalBlock>
                        <Datelist date={'1일'} weekday={'월요일'} />
                        <Perdaytotal
                            counts={result.length}
                            amounts={GetTotal(result)}
                        />
                    </TotalBlock>
                    {result.map(
                        ({ ehSeq, ehTitle, ehCcSeq, ehLocation, ehPrice }) => (
                            <ExpendList key={ehSeq}>
                                <TitleList>
                                    <Title title={ehTitle} />
                                    <Category
                                        culture={'ehCcSeq'}
                                        place={ehLocation}
                                        payment={'ehCcSeq'}
                                    ></Category>
                                </TitleList>
                                <Price price={ehPrice} />
                            </ExpendList>
                        )
                    )}
                    <LoadingBox>{isLoading && <span>로딩중</span>}</LoadingBox>
                </Expenditure>
            </Container>
            <BottomNavigation />
        </Page>
    );
};

const TotalBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin: 0 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid ${colors.gray200};
`;
const LoadingBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 52px;
`;

const CalendarWrap = styled.div`
    .react-calendar {
        width: 100%;
        max-width: 380px;
        line-height: 1.25em;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: none;
        .react-calendar__navigation {
            width: 100%;
            height: 44px;
            padding: 0 16px;
            & .react-calendar__navigation__arrow {
                font-size: 24px;
            }
        }
        .react-calendar__viewContainer {
            width: 100%;
            padding: 0 16px;
            .react-calendar__month-view {
                .react-calendar__month-view__days {
                    .react-calendar__tile {
                        display: flex;
                        flex-direction: column;
                        justify-content: flex-start;
                        align-items: center;
                        height: 52px;
                    }
                }
            }
        }
    }
`;
export default Calendar;
