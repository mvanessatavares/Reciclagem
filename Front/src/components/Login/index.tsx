import {
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { useMyContext } from '../../context/hook';
import { ButtonSocialGoogle } from '../ButtonSocialGoogle/ButtonSocialGoogle';
import { ControllerTextInput } from '../ControllerTextInput';
import { styles } from './styles';

type FormDataLogin = {
  email: string;
  password: string;
};

export const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataLogin>();

  const { login } = useMyContext();

  const handleSignIn = async (data: FormDataLogin) => {
    
    const { email, password }  = data;

    await login(email, password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputsContainer}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView behavior="position" enabled>
            <ControllerTextInput
              name="email"
              label="Email"
              control={control}
              rules={{ required: 'Email é obrigatorio' }}
            />
            <ControllerTextInput
              name="password"
              label="Senha"
              control={control}
              rules={{ required: ' Senha é obrigatorio' }}
              secureTextEntry
            />
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={handleSubmit(handleSignIn)}>
          <Text style={styles.textEntrar}>ENTRAR</Text>
        </TouchableOpacity>
        <Text style={styles.text}>Esqueceu sua senha?</Text>
      </View>
      <View>
        <Text style={styles.textSG}>Faça login com</Text>
        <ButtonSocialGoogle />
      </View>
    </View>
  );
};
