import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../app/authSlice';

export function useLogin() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return {
    login: () => dispatch(login()),
    logout: () => dispatch(logout()),
    isLoggedIn,
  };
}