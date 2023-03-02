import { removeCookie, setCookie } from './Cookies';

type tokenType = {
  accessToken: string;
  refreshToken: string;
};

export const setToken = (token: tokenType): void => {
  localStorage.setItem('accessToken', token.accessToken);
  setCookie('refreshToken', token.refreshToken, {
    HttpOnly: true,
    Secure: true,
  });
};

export const removeToken = (): void => {
  localStorage.removeItem('accessToken');
  removeCookie('refreshToken');
};
