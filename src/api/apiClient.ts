import { getCookie } from './../utils/Cookies';
import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import authClient from './authClient';

const { VITE_BASE_URL } = import.meta.env;

const apiClient = axios.create({
  baseURL: VITE_BASE_URL,
  headers: { 'Content-type': 'application/json' },
});

const onRequest = (config: InternalAxiosRequestConfig) => {
  const accessToken = localStorage.getItem('accessToken');
  config.headers['Authorization'] = !!accessToken
    ? `Bearer ${accessToken}`
    : '';
  return config;
};
const onErrorRequest = (err: AxiosError | Error): Promise<AxiosError> => {
  return Promise.reject(err);
};
apiClient.interceptors.request.use(onRequest, onErrorRequest);

// const onResponse = (res: AxiosResponse): AxiosResponse => {
//   return res;
// };

// const onErrorResponse = async (
//   err: AxiosError | Error
// ): Promise<AxiosError> => {
//   const _err = err as unknown as AxiosError; // err 객체의 타입은 unknown이므로 타입 단언을 해주어야 한다
//   const { response } = _err; // err 객체에서 response 를 구조 분해 할당
//   const originalConfig = _err?.config; // 기존의 요청 정보를 저장한다.

//   if (response && response.status === 403) {
//     const accessToken = localStorage.getItem('accessToken');
//     const refreshToken = getCookie('refreshToken');
//     if (!!refreshToken === false) {
//       console.log('리프레시 토큰 쿠키 삭제 또는 만료됨 ');
//     } else {
//       try {
//         // 만료된 access token과 refresh token을 이용해 리프레시api에 갱신 요청
//         const data = await authClient.put(
//           `/refresh`,
//           {}, // 백엔드에서 빈 객체 body를 받을 수 있도록 수정 요청
//           {
//             headers: {
//               Refresh: `Bearer ${refreshToken}`,
//               Authorization: `Bearer ${accessToken}`,
//             },
//           }
//         );
//         if (data) {
//           await localStorage.setItem('accessToken', accessToken);
//           return await authClient.request(originalConfig);
//         }
//       } catch (err) {
//         // 리프레시 토큰 만료. 로그아웃 처리
//         const _err = err as unknown as AxiosError;
//         console.log(_err?.config?.data);
//       }
//     }
//   }
//   return Promise.reject(err);
// };

// apiClient.interceptors.response.use(onResponse);

export default apiClient;
