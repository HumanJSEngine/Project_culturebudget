import apiClient from './apiClient';

export const getCategory = async (memberNum: number) => {
  const res = await apiClient.get(`/api/fix/category/list?no=${memberNum}`);
  return res.data;
};

export const editCategory = async (
  categorySeq: number,
  categoryName: string
) => {
  const params = {
    no: categorySeq,
    name: categoryName,
  };
  const res = await apiClient.post('/api/category/update', { params });
  return res.data;
};

export const deleteCategory = async (categorySeq: number) => {
  const params = {
    no: categorySeq,
  };
  const res = await apiClient.get('/api/category/delete', { params });
  return res.data;
};

export const getDetailCategory = async (categorySeq: number) => {
  const params = {
    no: categorySeq,
  };
  const res = await apiClient.get('/api/category/detail/list', { params });
  return res.data;
};

export const addDetailCategory = async (detailCategoryName: string) => {
  const params = {
    name: detailCategoryName,
  };
  const res = await apiClient.put('/api/category/detail/input', { params });
  return res.data;
};

export const editDetailCategory = async (
  detailCategorySeq: number,
  detailCategoryName: string
) => {
  const params = {
    no: detailCategorySeq,
    name: detailCategoryName,
  };
  const res = await apiClient.post('/api/category/detail/update', { params });
  return res.data;
};

export const deleteDetailCategory = async (detailCategorySeq: number) => {
  const params = {
    no: detailCategorySeq,
  };
  const res = await apiClient.get('/api/category/detail/delete', { params });
  return res.data;
};
