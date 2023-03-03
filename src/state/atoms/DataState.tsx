import { atom } from 'recoil';
import { BudgetData } from '../../types/Budget';

export const dataState = atom<BudgetData[]>({
  key: 'dataState',
  default: [],
});

export const catedataState = atom({
  key: 'catedataState',
  default: [],
});
