import apiClient from './apiClient';

export const getPayment = async (paymentType: number) => {
  // payment 1.카드 2.계좌 3.현금
  const res = await apiClient.get(`/api/payment/list/${paymentType}`);
  return res.data;
};

export const addPayment = async (paymentType: number, paymentName: string) => {
  const params = { paymentType, paymentName };
  const res = await apiClient.post('/api/payment/input', { params });
  return res.data;
};

export const deletePayment = async (paymentSeq: number) => {
  const res = await apiClient.delete(`/api/payment/delete/${paymentSeq}`);
  return res.data;
};
