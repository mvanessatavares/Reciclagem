import { useMyContext } from '../context/hook';
import { RoutesPrivadas } from './private/private.routes';
import { AuthRoutes } from './public/public.routes';

export const Routes = () => {
  const { isLogado } = useMyContext();

  return isLogado ? <RoutesPrivadas /> : <AuthRoutes />;
};
