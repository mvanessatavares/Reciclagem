// import { Container, Text } from './styles';
import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
const Stack = createBottomTabNavigator();
import * as ImagePicker from 'expo-image-picker';
import {
  ImageBackground,
  Image,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  ListRenderItemInfo,
  FlatList,
  Modal,
  TextInput,
  Alert,
  Text,
} from 'react-native';
import launchImageLibraryAsync from 'react-native-image-picker';

import { styles } from '../Profile/styles';
import { CollectPoint } from '../../components/CollectPoint';
// import { Point, pointList } from '../../../data/pointList';
import { API } from '../../api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useMyContext } from '../../context/hook';

const dadosUsuario = {
  img: 'img',
  nome: 'João Pedro',
  email: 'joaopedro@email.com',
};

export type IPoint = {
  id: string;
  name: string;
  tipoLixo: number[];
  latitude: number;
  longitude: number;
  city: string;
  state: string;
  photo?: File;
  horario: string;

  onEdit: () => void;
  onDelete: () => void;
};

export const Profile = () => {
  const [image, setImage] = useState(
    'https://th.bing.com/th/id/R.a4ac01af50f9ee6fcf5635464b76fb92?rik=LXcNrNWjxAXZAA&riu=http%3a%2f%2fwww.apte-autisme.net%2fwp-content%2fuploads%2f2017%2f02%2fPicto-Professeur.png&ehk=Xo2Hk1tgCACsW67wYF6v%2b65Veoo9nTU6kPOZi%2bNTOCA%3d&risl=&pid=ImgRaw&r=0'
  );
  const [data, setData] = useState<IPoint[] | null>(null);

  const [modalVisible, setModalVisible] = useState(false);
  const [newPointName, setNewPointName] = useState('');
  const [newPointImage, setNewPointImage] = useState('');
  const [newPointTime, setNewPointTime] = useState('');

  const [editItem, setEditItem] = useState<IPoint | null>(null);

  const { user, logout } = useMyContext();

  const handleGetPoints = async () => {
    const result = await API.get('/points');
    console.log('chamou');
    const points = result.data as IPoint[] | null;
    console.log(points);

    setData(points);
  };

  useEffect(() => {
    
    handleGetPoints();



  }, []);

  const handleImagePicker = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      aspect: [4, 4],
      allowsEditing: true,
      base64: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };



  function handleEditPoint(item: IPoint) {
    setEditItem(item);
    setModalVisible(true);
  }

  const setEditItemName = (value: string) => {
    if (editItem) {
      setNewPointName(value);
    }
  };

  const setEditItemTime = (value: string) => {
    if (editItem) {
      setNewPointTime(value);
    }
  };
//Pront
  const handleDeletePoint = (id: string) => {
    Alert.alert('Confirmação', 'Tem certeza que deseja excluir este ponto de coleta?', [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      {
        text: 'Excluir',
        style: 'destructive',
        onPress: async () => {
          const pointDeleted = await API.delete(`/points/${id}`)
          handleGetPoints()
        },
      },
    ]);
  };

  const navigation = useNavigation();

  function handleAddPoint() {
    // setEditItem(null);
    // setNewPointName('');
    // setNewPointTime('');
    // setModalVisible(true);
    navigation.navigate('CreatePoint');
  }

  function handleSubmitPoint() {
    console.log("Add point")
  }

  
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/fundo.png')} style={styles.image}>
        <View style={styles.userBox}>
          <TouchableOpacity onPress={handleImagePicker}>
            <Image source={{ uri: image }} style={styles.imgPerfil} />
              </TouchableOpacity>
          {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
      
    </View> */}

          <Text style={styles.textUser}>{user?.name}</Text>
          <Text style={styles.textUser}>{user?.email}</Text>
          <TouchableOpacity onPress = {logout}>
            <Text style={styles.logout}>Sair</Text>
          </TouchableOpacity>
        </View>

        <Animatable.View delay={600} animation="fadeInUp" style={styles.Form}>
          <Text style={styles.title}>Locais de coleta</Text>

          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CollectPoint
                photo={item.photo}
                horario={item.horario}
                id={item.id}
                name={item.name}
                key={item.id}
                city={item.city}
                state={item.state}
                tipoLixo={item.tipoLixo}
                latitude={item.latitude}
                longitude={item.longitude}
                onEdit={() => handleEditPoint(item)}
                onDelete={() => handleDeletePoint(item.id)}
              />
            )}
            ListEmptyComponent={
              <View>
                <Text style={{ color: 'white' }}>Nenhum ponto cadastrado ainda</Text>
              </View>
            }
          />

          <View>
            <TouchableOpacity onPress={handleAddPoint} style={styles.b}>
              <Image
                style={styles.bIcon}
                source={require('../../assets/iconsPerfil/icon_add_point.png')}
              />
              <Text style={{ color: '#fff' }}>Adicionar pontos de coleta</Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </ImageBackground>

      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.input}
              placeholder="Nome do ponto de coleta"
              value={newPointName}
              onChangeText={setNewPointName}
            />
            {/* <TextInput
              style={styles.input}
              placeholder="url da imagem"
              value={newPointImage}
              onChangeText={setNewPointImage}
            /> */}
            <TextInput
              style={styles.input}
              placeholder="Horário"
              value={newPointTime}
              onChangeText={setNewPointTime}
            />
            <View style={styles.btnBox}>
              <TouchableOpacity style={styles.btnCancel} onPress={() => setModalVisible(false)}>
                <Text style={styles.btnText}> Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnSubmmit} onPress={handleSubmitPoint}>
                <Text style={styles.btnText}>Adicionar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
