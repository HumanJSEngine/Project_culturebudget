import apiClient from './apiClient';

export const addPost = async (formData) => {
  const res = await apiClient.post('/api/expense/add', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return res.data;
};

export const getPost = async () => {
  const res = await apiClient.get('/api/expense/list');
  return res.data;
};
