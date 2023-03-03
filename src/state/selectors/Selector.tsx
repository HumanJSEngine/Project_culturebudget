/** @format */

import axios from 'axios';
import { selector } from 'recoil';
import GetMemberNumber from '../../utils/GetMemberNumber';
import { catedataState } from '../atoms/DataState';

export const dataList = selector({
  key: 'dataList',
  get: async () => {
    try {
      const memberNumber = GetMemberNumber();
      const res = await axios.get(
        `http://haeji.mawani.kro.kr:8585/api/fix/category/list?no=${memberNumber}`
      );
      return res.data.expense;
    } catch (error) {
      console.log(error);
      return [];
    }
  },
});

export const categoryList = selector({
  key: 'categoryList',
  // get: ({ get }) => get(catedataState),
  get: async ({ get }) => {
    get(catedataState);
    const memberNumber = GetMemberNumber();
    try {
      const res = await axios.get(
        `http://haeji.mawani.kro.kr:8585/api/fix/category/list?no=${memberNumber}`
      );
      return res.data.cclist;
    } catch (error) {
      console.log(error);
      return [];
    }
  },
});
