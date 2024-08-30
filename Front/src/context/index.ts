import { createContext } from 'react';
import { User } from '../@types/types';

interface IContext {
  user: User | null;
  logout(): Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  isLogado: boolean;
  loadStorage: () => void;
}

export const AuthContext = createContext<IContext>({} as IContext);
