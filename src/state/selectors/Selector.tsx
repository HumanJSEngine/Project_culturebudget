/** @format */

import axios from 'axios';
import { selector } from 'recoil';
import GetMemberNumber from '../../utils/GetMemberNumber';
import { catedataState } from '../atoms/DataState';
import GetMemberNumber from '../../utils/GetMemberNumber';


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
    key: 'dataList',
    get: async () => {
        try {
            const res = await axios.get(
                'http://haeji.mawani.kro.kr:8585/api/expense/list'
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

    get: async ({ get }) => {
        get(catedataState);
        try {
            const res = await axios.get(
                `http://haeji.mawani.kro.kr:8585/api/fix/category/list?no=3`
            );
            return res.data.cclist;
        } catch (error) {
            console.log(error);
            return [];
        }
    },
});
