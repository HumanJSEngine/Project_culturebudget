import { createSlice } from '@reduxjs/toolkit';
import { MemberData } from '../types/User';

type UserState = Omit<MemberData, 'password'>;

const INITIAL_STATE: UserState = {
  memberSeq: 0,
  email: '',
  nickName: '',
};

const userReducer = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    loginUser: (state, action) => {
      const { memberSeq, nickname, email } = action.payload;
      state.memberSeq = memberSeq;
      state.email = email;
      state.nickName = nickname;
    },
    clearUser: (state) => {
      state.memberSeq = 0;
      state.email = '';
      state.nickName = '';
    },
    default: (state) => {
      return state;
    },
  },
});

export const { loginUser, clearUser } = userReducer.actions;
export default userReducer;
