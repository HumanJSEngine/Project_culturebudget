import { createSlice } from '@reduxjs/toolkit';
import { MemberData } from '../types/User';

type UserState = Pick<MemberData, 'email' | 'nickName'>;

const INITIAL_STATE: UserState = {
  // useruid: '',
  email: '',
  nickName: '',
  // username: '',
  // userbirth: '',
  // usersex: '',
  // userjob: '',
};

const userReducer = createSlice({
  name: 'user',
  initialState: INITIAL_STATE,
  reducers: {
    loginUser: (state, action) => {
      // const { uid, name, birth, nickname, sex, job, email } = action.payload;
      const { nickname, email } = action.payload;
      // state.useruid = uid;
      state.email = email;
      state.nickName = nickname;
      // state.username = name;
      // state.userbirth = birth;
      // state.usersex = sex;
      // state.userjob = job;
    },
    clearUser: (state) => {
      // state.useruid = '';
      state.email = '';
      state.nickName = '';
      // state.username = '';
      // state.userbirth = '';
      // state.usersex = '';
      // state.userjob = '';
    },
    default: (state) => {
      return state;
    },
  },
});

export const { loginUser, clearUser } = userReducer.actions;
export default userReducer;
