import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  // useruid: '',
  useremail: '',
  usernickname: '',
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
      state.useremail = email;
      state.usernickname = nickname;
      // state.username = name;
      // state.userbirth = birth;
      // state.usersex = sex;
      // state.userjob = job;
    },
    clearUser: (state) => {
      // state.useruid = '';
      state.useremail = '';
      state.usernickname = '';
      // state.username = '';
      // state.userbirth = '';
      // state.usersex = '';
      // state.userjob = '';
    },
  },
});

export const { loginUser, clearUser } = userReducer.actions;
export default userReducer.reducer;
