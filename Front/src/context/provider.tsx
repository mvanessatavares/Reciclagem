import { ReactNode, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { ResponseLoginData, User } from '../@types/types';

import { AuthContext } from './index';
import { API } from '../api';

interface IProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: IProps) => {
  const [user, setUser] = useState<User | null>(null);

  const logout = async () => {
    setUser(null);
    const userStorage = await AsyncStorage.removeItem('Auth.user');
    const tokenStorage = await AsyncStorage.removeItem('Auth.token');

    Promise.all([userStorage, tokenStorage]).catch((error) => {
      console.log(error);
    });
  };

  const login = async (email: string, password: string) => {
    const dados = {
      email,
      password,
    };

    try {
      const response = await API.post('/auth/user', dados);

      const { user, token } = response.data as ResponseLoginData;
      console.log({ user, token });

      API.defaults.headers.common.Authorization = `Bearer ${token}`;

      await AsyncStorage.setItem('Auth.user', JSON.stringify(user));
      await AsyncStorage.setItem('Auth.token', token);
      setUser(user);
    } catch (error) {
      console.log(error);
    }
  };

  const loadStorage = async () => {
    const userStorage = await AsyncStorage.getItem('Auth.user');
    const tokenStorage = await AsyncStorage.getItem('Auth.token');
    if (userStorage && tokenStorage) {
      API.defaults.headers.common.Authorization = `Bearer ${tokenStorage}`;
      setUser(JSON.parse(userStorage));
    }
  };

  useEffect(() => {
    loadStorage();
  }, []);

  return (
    <AuthContext.Provider value={{ logout, login, isLogado: !!user, user, loadStorage }}>
      {children}
    </AuthContext.Provider>
  );
};
