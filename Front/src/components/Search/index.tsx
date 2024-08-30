import { View, TextInput, TouchableOpacity, TextInputProps } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { styles } from './styles';

interface IProps extends TextInputProps {
  onPress: () => void;
}

export const Search = ({ onPress, ...rest }: IProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor="white"
        placeholder="Search"
        style={styles.textInput}
        {...rest}
      />
      <TouchableOpacity onPress={onPress}>
        <FontAwesome name="search" size={24} color="#8AC449" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};
