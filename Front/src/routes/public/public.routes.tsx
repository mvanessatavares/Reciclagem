import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Welcome, LoginRegister } from '../../screens';
import { RoutesPrivadas } from '../private/private.routes';

const { Screen, Navigator } = createNativeStackNavigator();

export const AuthRoutes = () => {
  return (
    <Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
      <Screen name="Welcome" component={Welcome} />
      <Screen name="LoginRegister" component={LoginRegister} />
      <Screen name="Home" component={RoutesPrivadas} />
    </Navigator>
  );
};
