import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Checkbox from 'expo-checkbox';
import { ControllerTextInput } from '../ControllerTextInput';

import React, { useState } from 'react';
import { Controller, useForm, useWatch } from 'react-hook-form';
import { ResponseLoginData } from '../../@types/types';
import { API } from '../../api';
import { stylesRegister } from './stylesRegister';
import { useMyContext } from '../../context/hook';

type FormRegister = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  termosDeUso: boolean;
  politicaPrivacidade: boolean;
  role: boolean | string;
};

export const Register = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isRegistrationSuccessful, setIsRegistrationSuccessful] = useState(false);

  const { loadStorage } = useMyContext();

  const toggleModal = (success: boolean) => {
    setIsRegistrationSuccessful(success);
    setIsModalVisible(!isModalVisible);
  };

  const closeModal = () => {
    toggleModal(false);
    loadStorage();
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormRegister>();

  const password = useWatch({
    control,
    name: 'password',
    defaultValue: '',
  });

  const passwordMatchValidator = (value: string) => {
    return password === value || 'As senhas não correspondem';
  };

  const onSubmit = async (data: FormRegister) => {
    data.role ? (data.role = 'Admin') : (data.role = 'User');

    try {
      const result = await API.post('/users', data);

      const { user, token } = result.data as ResponseLoginData;

      API.defaults.headers.common.Authorization = `Bearer ${token}`;

      await AsyncStorage.setItem('Auth.user', JSON.stringify(user));
      await AsyncStorage.setItem('Auth.token', token);

      toggleModal(true);
    } catch (e) {
      toggleModal(false);
    }
  };

  return (
    <View style={stylesRegister.container}>
      <View style={stylesRegister.inputsContainer}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView behavior="position" enabled>
            <ControllerTextInput
              name="name"
              label="Nome completo"
              control={control}
              rules={{ required: 'Nome é obrigatorio' }}
            />
            <ControllerTextInput
              name="email"
              label="Email"
              control={control}
              rules={{ required: "Email é obrigatorio" }}
            />
            <ControllerTextInput
              name="password"
              label="Senha"
              control={control}
              rules={{ required: " Senha é obrigatorio" }}
              secureTextEntry
            />
            <ControllerTextInput
              name="confirmPassword"
              label="Confirmar senha"
              defaultValue=""
              control={control}
              rules={{
                required: ' Confirmação de senha é obrigatoria!',
                validate: passwordMatchValidator,
              }}
              secureTextEntry
            />
            <View style={stylesRegister.checkbox}>
              <Controller
                control={control}
                name="role"
                defaultValue={'User'}
                render={({ field: { onChange, value } }) => (
                  <Checkbox
                    value={value === 'User'}
                    onValueChange={(newValue) => onChange(newValue)}
                  />
                )}
              />
              <Text style={stylesRegister.text}>Coletor</Text>
            </View>
            <View style={stylesRegister.checkbox}>
              <Controller
                name="termosDeUso"
                control={control}
                defaultValue={false}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <Checkbox value={value} onValueChange={(newValue) => onChange(newValue)} />
                )}
              />
              <Text style={stylesRegister.text}>Termos de uso</Text>
            </View>
            <View style={stylesRegister.checkbox}>
              <Controller
                name="politicaPrivacidade"
                control={control}
                defaultValue={false}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <Checkbox value={value} onValueChange={(newValue) => onChange(newValue)} />
                )}
              />
              <Text style={stylesRegister.text}>Políticas de privacidade</Text>
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </View>
      <View>
        <TouchableOpacity style={stylesRegister.button} onPress={handleSubmit(onSubmit)}>
          <Text style={stylesRegister.textEntrar}>REGISTRAR</Text>
        </TouchableOpacity>
      </View>
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => toggleModal(false)}
      >
        <View style={stylesRegister.modalContainer}>
          <View style={stylesRegister.modalContent}>
            <Text style={stylesRegister.modalText}>
              {isRegistrationSuccessful ? 'Cadastro realizado com sucesso!' : 'Erro ao cadastrar.'}
            </Text>
            <TouchableOpacity style={stylesRegister.modalButton} onPress={closeModal}>
              <Text style={stylesRegister.modalButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};
