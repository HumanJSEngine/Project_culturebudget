import axios from 'axios';

const { VITE_BASE_URL } = import.meta.env;

const apiClient = axios.create({
  baseURL: VITE_BASE_URL,
  headers: { 'Content-type': 'application/json' },
});

export default apiClient;
