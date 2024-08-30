import { useRef } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import {
  StyleProp,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
} from 'react-native/types';

import { styles } from './styles';

export interface TextInputProps extends RNTextInputProps {
  label: string;
  errorMessage?: string;
}

export function TextInputField({ label, errorMessage, ...rest }: TextInputProps) {
  const inputRef = useRef<RNTextInput>(null);

  const $wrapperStyles = {
    borderColor: errorMessage ? 'red' : '#8AC449',
    borderWidth: errorMessage ? 2 : 1,
  };

  return (
    <TouchableOpacity style={styles.container}>
      <Text style={{ color: '#8AC449' }}>{label}</Text>
      <View {...$wrapperStyles} style={styles.input}>
        <TextInput style={styles.textInput} autoCapitalize="none" ref={inputRef} {...rest} />
      </View>
      {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
    </TouchableOpacity>
  );
}
