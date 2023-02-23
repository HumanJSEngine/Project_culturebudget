import axios from 'axios';

const baseURL = process.env.VITE_BASE_URL;

const apiClient = axios.create({
  baseURL: baseURL,
  headers: { 'Content-type': 'application/json' },
});

export default apiClient;
