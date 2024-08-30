import { Container } from './styles';
import React from 'react';
import { ImageBackground, Image, Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../Welcome/styles';
import { LoginRegister } from '../LoginRegister';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Welcome = () => {
  const navigation = useNavigation();

  const openScreenRegister = () => {
    navigation.navigate('LoginRegister', { is: false });
  };

  const openScreenLogin = () => {
    navigation.navigate('LoginRegister', { is: true });
  };
  //const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/fundo.png')} style={styles.imageBackground}>
        <Image source={require('../../assets/logo.png')} style={styles.imageForeground} />
        <View>
          <Text style={styles.text}>
            Sejam bem vindos ao ReciclAE {'\n'} Seu app de reciclagem!
          </Text>
        </View>
        <View style={styles.containerr}>
          <TouchableOpacity style={styles.button} onPress={openScreenRegister}>
            <Text>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={openScreenLogin}>
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
