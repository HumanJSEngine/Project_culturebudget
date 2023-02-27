import { string } from 'yup';
import { BudgetData } from '../types/Budget';

interface Newstatdata {
    id: number;
    label: number;
    value: number;
    color: string;
}

const ConvertStatData = (items: Array<BudgetData>) => {
    const color = [
        'hsl(273, 70%, 50%)',
        'hsl(75, 70%, 50%)',
        'hsl(37, 70%, 50%)',
        'hsl(297, 70%, 50%)',
        'hsl(277, 70%, 50%)',
    ];
    let statdata: Newstatdata[] = [];
    let priceTotal: number = 0;
    items.forEach((item) => (priceTotal += item.ehPrice));
    items.forEach((item) =>
        statdata.push({
            id: item.ehSeq,
            label: item.ehSeq,
            value: Math.round((item.ehPrice / priceTotal) * 1000),
            color: color[Math.floor(Math.random() * 4 + 1)],
        })
    );
    return statdata;
};

export default ConvertStatData;
