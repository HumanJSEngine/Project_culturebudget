import { createSlice } from '@reduxjs/toolkit';

interface SettingState {
  listType: 'default' | 'gallery';
}

const INITIAL_STATE: SettingState = {
  listType: 'gallery',
};

const settingReducer = createSlice({
  name: 'setting',
  initialState: INITIAL_STATE,
  reducers: {
    modifyGallery: (state, action) => {
      state.listType = action.payload;
    },
    default: (state) => {
      return state;
    },
  },
});

export const { modifyGallery } = settingReducer.actions;
export default settingReducer;
