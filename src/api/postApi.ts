import apiClient from './apiClient';

export interface PostParameter {
  ehTitle: string;
  ehDate: string;
  ehMiSeq: number;
  ehPiSeq: number | undefined;
  ehPrice: number;
  ehStoreName: string | undefined;
  ehLocation: string | undefined;
  ehBalance: number;
  ehCcSeq: number | undefined;
  ehCdcSeq: number | undefined;
  ehContent?: string;
  ehImgFile: File;
}

export const addPost = async (postData: PostParameter) => {
  const res = await apiClient.post('/api/expense/add', postData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return res.data;
};

export const getPost = async (member: number) => {
  const params = {
    member: member,
    dt: '2023-02',
    size: 100,
  };
  const res = await apiClient.get('/api/expense/history/monthly/list2', {
    params,
  });
  return res.data;
};
