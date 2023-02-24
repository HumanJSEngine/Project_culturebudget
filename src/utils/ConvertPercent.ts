import { BudgetData } from '../types/Budget';

const ConvertPercent = function (statdata: Array<BudgetData>) {
    let arr = [...statdata];
    let hap = 0;
    arr.forEach((item) => (hap += item.ehPrice));
    return hap;
};

export default ConvertPercent;
