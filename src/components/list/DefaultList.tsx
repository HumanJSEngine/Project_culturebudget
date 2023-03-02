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
    month: number;
}

const DefaultList = ({ list, month, openPost }: DefaultListProps) => {
    console.log('리스트', list);
    return (
        <Expenditure>
            <>
                <DateListTotal
                    list={list}
                    price={GetTotal(list).toLocaleString()}
                    month={month}
                />
                {list.map((listItem) => (
                    <ExpendList
                        key={listItem.ehSeq}
                        onClick={() => openPost(listItem)}
                    >
                        <TitleList>
                            <Title title={listItem.ehTitle} />
                            <Category
                                culture={listItem.ccName}
                                culture2={listItem.cdcName}
                                place={listItem.ehLocation}
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
