import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  listType: 'gallery',
};

const settingReducer = createSlice({
  name: 'setting',
  initialState: INITIAL_STATE,
  reducers: {
    modifyGallery: (state, action) => {
      state.listType = action.payload;
    },
  },
});

export const { modifyGallery } = settingReducer.actions;
export default settingReducer.reducer;
