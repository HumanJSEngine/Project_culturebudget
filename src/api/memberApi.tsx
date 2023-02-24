import apiClient from './apiClient';

interface MemberData {
  email: string;
  password: string;
  nickName: string;
}

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
