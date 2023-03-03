import moment from 'moment';
import styled from 'styled-components';
import colors from '../../styles/Theme';
import { BudgetData } from '../../types/Budget';
import GetTotal from '../../utils/GetTotal';
import Category from '../calendar/Category';
import ExpendList from '../calendar/ExpendList';
import Price from '../calendar/Price';
import Title from '../calendar/Title';
import TitleList from '../calendar/TitleList';
import DateListTotal from './DateListTotal';

interface DefaultListProps {
  list: BudgetData[];
  openPost: (postData: BudgetData) => void;
  month: number;
}

interface ListFilterData {
  [index: string]: BudgetData[];
}

const DefaultList = ({ list, openPost }: DefaultListProps) => {
  const filterList = list.reduce((acc: ListFilterData, cur) => {
    const key = Object.keys(acc).includes(
      moment(cur.ehDate).format('YYYY-MM-DD')
    );
    if (key) {
      acc[moment(cur.ehDate).format('YYYY-MM-DD')] = [
        ...acc[moment(cur.ehDate).format('YYYY-MM-DD')],
        cur,
      ];
    } else {
      acc[moment(cur.ehDate).format('YYYY-MM-DD')] = [cur];
    }
    return acc;
  }, {});

  const getList = () => {
    let component: JSX.Element[] = [];
    for (let key in filterList) {
      component.push(
        <DateListTotal
          key={key}
          price={GetTotal(filterList[key]).toLocaleString()}
          day={moment(key).format('D')}
        />
      );
      const dateList = filterList[key].map((item) => (
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
      ));
      component.push(...dateList);
    }
    return component;
  };

  return <Expenditures>{list && <>{getList()}</>}</Expenditures>;
};

const Expenditures = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-bottom: 32px;
  background: ${colors.white};
`;

export default DefaultList;
