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
import Loading from '../components/common/Loading';
import GetMemberNumber from '../utils/GetMemberNumber';
import moment from 'moment';
import ChangeDay from '../utils/ChangeDay';
import Post from './Post';

const Calendar = () => {
  const [result, setResult] = useState<BudgetData[]>([]);
  const [postData, setPostData] = useState<BudgetData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [value, setValue] = useState(new Date());
  const [year, setYear] = useState<string>(moment().format('YYYY'));
  const [month, setMonth] = useState<string>(moment().format('MM'));
  const [day, setDay] = useState<string>(moment().format('DD'));
  const memberNum = GetMemberNumber();
  const getFetchData = async () => {
    setIsLoading(true);
    try {
      const res = await getPost(memberNum, parseInt(year), parseInt(month));
      setResult(res.list);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    moment(value).format('YYYY') !== year &&
      setYear(moment(value).format('YYYY'));
    moment(value).format('MM') !== month &&
      setMonth(moment(value).format('MM'));
    moment(value).format('DD') !== day && setDay(moment(value).format('DD'));
  }, [value]);

  useEffect(() => {
    getFetchData();
  }, [year, month]);

  const filterList = result.filter(
    (item) =>
      moment(item.ehDate).format('YYYY-MM-DD') ===
      moment(value).format('YYYY-MM-DD')
  );

  const openPost = (postData: BudgetData) => {
    setPostData(postData);
  };
  const closePost = () => {
    setPostData(null);
  };

  return (
    <Page>
      <Container>
        <CalendarWrap>
          <ShowCalendar
            caldata={result}
            calendarValue={value}
            setCalendarValue={setValue}
          />
        </CalendarWrap>
        <Expenditure>
          <TotalBlock>
            <Datelist date={day} weekday={ChangeDay(moment(value).day())} />
            <Perdaytotal
              counts={filterList.length}
              amounts={GetTotal(filterList)}
            />
          </TotalBlock>
          {filterList.map((item) => (
            <ExpendList key={item.ehSeq} onClick={() => openPost(item)}>
              <TitleList>
                <Title title={item.ehTitle} />
                <Category
                  culture={item.ccName}
                  place={item.ehLocation}
                  payment={item.piName}
                ></Category>
              </TitleList>
              <Price price={item.ehPrice} />
            </ExpendList>
          ))}
          {isLoading && (
            <LoadingBox>
              {' '}
              <span>로딩중</span>
            </LoadingBox>
          )}
        </Expenditure>
        {isLoading && <Loading />}
      </Container>
      <BottomNavigation />
      <Post postData={postData} closePost={closePost} />s
    </Page>
  );
};

const TotalBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 0 16px;
  padding-top: 32px;
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
  margin-bottom: 20px;
  .react-calendar {
    width: 100%;
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
