import React from 'react';
import { BudgetData } from '../../types/Budget';
import GetTotal from '../../utils/GetTotal';
import Category from '../calendar/Category';
import Expenditure from '../calendar/Expenditure';
import ExpendList from '../calendar/ExpendList';
import Price from '../calendar/Price';
import Title from '../calendar/Title';
import TitleList from '../calendar/TitleList';
import DateListTotal from './DateListTotal';

interface DefaultListProps {
  list: BudgetData[];
  openPost: (postData: BudgetData) => void;
}

const DefaultList = ({ list, openPost }: DefaultListProps) => {
  return (
    <Expenditure>
      <>
        <DateListTotal
          date={'16일 월요일'}
          price={GetTotal(list).toLocaleString()}
        />
        {list.map((listItem) => (
          <ExpendList key={listItem.ehSeq} onClick={() => openPost(listItem)}>
            <TitleList>
              <Title title={listItem.ehTitle} />
              <Category
                culture={listItem.ccName}
                place={listItem.ehStoreName}
                payment={listItem.piName}
              ></Category>
            </TitleList>
            <Price price={listItem.ehPrice} />
          </ExpendList>
        ))}
      </>
    </Expenditure>
  );
};

export default DefaultList;
