import { IUser } from './interfaces/user';

export const setUser = ({ _id, username, email, accessToken }: IUser) => {

  const user = { _id, username, email, accessToken };
  localStorage.setItem("user", JSON.stringify(user));
}

export const getUser = () => {
  const user = localStorage.getItem('user');
  return (
    user ? JSON.parse(user) : null
  );
}

export const removeUser = () => {
  localStorage.removeItem('user');
}