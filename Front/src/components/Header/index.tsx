import { Image, Text, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

export interface IHeaderProps {
  tipo: React.Dispatch<React.SetStateAction<boolean>>;
  is: boolean;
}

export const Header = ({ is, tipo }: IHeaderProps) => {
  const handleTabPress = (e: string) => {
    e === 'Login' ? tipo(true) : tipo(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../../assets/logo.png')}
          alt="Logo do ReciclaAi"
        />
      </View>
      <View style={styles.textContainer}>
        <TouchableOpacity
          style={[styles.textSubContainer, is && styles.activeTab]}
          onPress={() => handleTabPress('Login')}
        >
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.textSubContainer, !is && styles.activeTab]}
          onPress={() => handleTabPress('Register')}
        >
          <Text style={styles.text}>CADASTRE-SE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
