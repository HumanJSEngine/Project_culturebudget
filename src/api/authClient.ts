import axios from 'axios';

const { VITE_BASE_URL } = import.meta.env;

const authClient = axios.create({
  baseURL: VITE_BASE_URL,
  headers: { 'Content-type': 'application/json' },
});

export default authClient;
