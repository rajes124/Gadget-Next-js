import Cookies from 'js-cookie';

export const setAuthCookie = (token: string) => {
  Cookies.set('auth_token', token, {
    expires: 7,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
  });
};

export const getAuthCookie = () => {
  return Cookies.get('auth_token');
};

export const removeAuthCookie = () => {
  Cookies.remove('auth_token');
};

export const setUserCookie = (user: any) => {
  Cookies.set('user', JSON.stringify(user), {
    expires: 7,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
  });
};

export const getUserCookie = () => {
  const user = Cookies.get('user');
  return user ? JSON.parse(user) : null;
};
