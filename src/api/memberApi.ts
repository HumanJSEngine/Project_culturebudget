import { removeToken, setToken } from './../utils/setToken';
import { MemberData } from '../types/User';
import authClient from './authClient';

export const memberJoin = async (joinData: Omit<MemberData, 'memberSeq'>) => {
  const { email, password, nickName } = joinData;
  const params = {
    email: email,
    pwd: password,
    nickname: nickName,
  };
  const res = await authClient.post('/api/members/join', params);
  // const { token } = res.data;
  // setToken(token);
  return res.data;
};

export const memberLogin = async (
  loginData: Omit<MemberData, 'nickName' | 'memberSeq'>
) => {
  const { email, password } = loginData;
  const params = {
    email: email,
    pwd: password,
  };
  const res = await authClient.post('/api/members/login', params);
  const { token } = res.data;
  setToken(token);
  return res.data;
};

export const kakaoLogin = async (code: string) => {
  const params = {
    code: code,
  };
  const res = await authClient.get('/oauth/kakao', { params });
  return res.data;
};

export const memberLogut = async () => {
  removeToken();
  return 'Logout';
};

export const deleteMember = async (memberNumber: number) => {
  const res = await authClient.delete(`/api/members/delete/${memberNumber}`);
  return res.data;
};
