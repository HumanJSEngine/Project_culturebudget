import { MemberData } from '../types/User';
import apiClient from './apiClient';

export const memberJoin = async (joinData: MemberData) => {
  const { email, password, nickName } = joinData;
  const params = {
    email: email,
    pwd: password,
    nickname: nickName,
  };
  const res = await apiClient.post('/api/members/join', params);
  return res.data;
};

export const memberLogin = async (loginData: Omit<MemberData, 'nickName'>) => {
  const { email, password } = loginData;
  const params = {
    email: email,
    pwd: password,
  };
  const res = await apiClient.post('/api/members/login', params);
  return res.data;
};

export const kakaoLogin = async (code: string) => {
  const res = await apiClient.post(`/oauth/kakao/${code}`);
  return res.data;
};
