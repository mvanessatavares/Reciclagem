import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';

interface IProps extends TouchableOpacityProps {
  text: string;
  isFirst?: boolean;
}

export const CardSelect = ({ text, isFirst, ...rest }: IProps) => {
  return (
    <TouchableOpacity {...rest} style={[styles.container, isFirst && styles.firstCard]}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
