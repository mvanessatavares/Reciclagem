import { useContext } from 'react';
import { AuthContext } from './index';

export const useMyContext = () => {
  const context = useContext(AuthContext);

  return context;
};
