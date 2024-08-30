import { RouteProp } from '@react-navigation/native';
import { useState } from 'react';
import { Image, View } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from '../../components/Header';
import { Login } from '../../components/Login';
import { Register } from '../../components/Register';
import { styles } from './styles';

type RootStackParamList = {
  LoginRegister: { is: boolean };
};

type LoginRegisterRouteProp = RouteProp<RootStackParamList>;

type ILoginRegisterProps = {
  route: LoginRegisterRouteProp;
};

export const LoginRegister = ({ route }: ILoginRegisterProps) => {
  const { is } = route.params;
  const [onLogin, setOnLogin] = useState(is);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={{ zIndex: 1, position: 'absolute' }}>
          <Image
            source={require('../../assets/image-background.png')}
            alt="Plano de fundo do app"
            style={{ resizeMode: 'cover' }}
          />
        </View>
      </View>
      <View style={{ zIndex: 2, flex: 1 }}>
        <Header is={onLogin} tipo={setOnLogin} />
        {onLogin ? <Login /> : <Register />}
      </View>
    </SafeAreaView>
  );
};
