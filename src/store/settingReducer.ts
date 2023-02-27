import { createSlice } from '@reduxjs/toolkit';

export interface SettingState {
  listType: 'default' | 'gallery';
}

const INITIAL_STATE: SettingState = {
  listType: 'gallery',
};

const settingReducer = createSlice({
  name: 'setting',
  initialState: INITIAL_STATE,
  reducers: {
    modifyListType: (state, action) => {
      state.listType = action.payload;
    },
    default: (state) => {
      return state;
    },
  },
});

export const { modifyListType } = settingReducer.actions;
export default settingReducer;
