import React from 'react';
import GetTotal from '../../utils/GetTotal';
import Category from '../calendar/Category';
import Expenditure from '../calendar/Expenditure';
import ExpendList from '../calendar/ExpendList';
import Price from '../calendar/Price';
import Title from '../calendar/Title';
import TitleList from '../calendar/TitleList';
import DateListTotal from './DateListTotal';

interface DefaultListProps {
  list: [];
}

const DefaultList = ({ list }: DefaultListProps) => {
  return (
    <Expenditure>
      <>
        <DateListTotal
          date={'16일 월요일'}
          price={GetTotal(list).toLocaleString()}
        />
        {list.map(
          ({ ehSeq, ehTitle, ehCcSeq, ehStoreName, ehPiSeq, ehPrice }) => (
            <ExpendList key={ehSeq}>
              <TitleList>
                <Title title={ehTitle} />
                <Category
                  culture={ehCcSeq}
                  place={ehStoreName}
                  payment={ehPiSeq}
                ></Category>
              </TitleList>
              <Price price={ehPrice} />
            </ExpendList>
          )
        )}
      </>
    </Expenditure>
  );
};

export default DefaultList;
