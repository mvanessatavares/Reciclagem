import {
  Montserrat_400Regular,
  Montserrat_700Bold,
  Montserrat_900Black,
  useFonts,
} from '@expo-google-fonts/montserrat';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';

import { Loading } from './src/components/Loading/index';
import { AuthProvider } from './src/context/provider';
import { Routes } from './src/routes/index';

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
    Montserrat_900Black,
  });

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <AuthProvider>{fontsLoaded ? <Routes /> : <Loading />}</AuthProvider>
    </NavigationContainer>
  );
}
