import { createSlice } from '@reduxjs/toolkit';

export interface tokenReducerState {
  accessToken: string;
}

const INITIAL_STATE: tokenReducerState = {
  accessToken: '',
};

const tokenReducer = createSlice({
  name: 'setting',
  initialState: INITIAL_STATE,
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    removeAccessToken: (state) => {
      state.accessToken = '';
    },
  },
});

export const { setAccessToken, removeAccessToken } = tokenReducer.actions;
export default tokenReducer;
