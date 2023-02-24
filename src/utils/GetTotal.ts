import { BudgetData } from './../types/Budget';
const GetTotal = (items: BudgetData[]) => {
  let hap = 0;
  items.forEach((item) => (hap += item.ehPrice));
  return hap;
};

export default GetTotal;
