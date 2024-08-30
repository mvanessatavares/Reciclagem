import React, { useCallback, useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, SafeAreaView, TextInput, ImageBackground , Image, Alert} from 'react-native';
import { styles } from '../CreatePoint/styles';
import { Checkbox } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import LocationCoordinates from '../../services/geo';
import { getAddressAsync, Address } from '../../services/utils';
import { useFocusEffect } from '@react-navigation/native';
import Geolocation from 'react-native-geolocation-service';
import { Point } from '../../@types/types';
import { useMyContext } from '../../context/hook';
import { API } from '../../api';
import { useNavigation } from '@react-navigation/native';



export const CreatePoint = () => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [address, setAddress] = useState<Address | null>(null);

  const navigation = useNavigation();

    const [image, setImage] = useState(
        'https://img.freepik.com/premium-vector/gallery-icon-picture-landscape-vector-sign-symbol_660702-224.jpg'
      );

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

  const [pointName, setPointName] = useState('');
  const [collectionTime, setCollectionTime] = useState('');
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const handleTypeSelection = (type: string) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((item) => item !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  const handleSubmit = async () => {

   

    const dados = {
      city: address?.street! + ' ' + address?.streetNumber!,
      state: address?.city!,
      latitude: Number(latitude),
      longitude: Number(longitude),
      name: pointName,
    }

    try {

      const response = await API.post("/points", dados);
      
      navigation.navigate('Profile');

    } catch (err) {
      console.log(err)
    }

  };

  useFocusEffect(
    useCallback(() => {
      getAddressAsync(setAddress);
    }, [])
  );
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/fundo.png')} style={styles.image}>
        <View style={styles.formBox}>

        <Text style={styles.txtTitle}> Ponto de coleta</Text>

        <View style={styles.containerForm}>
            <View style={styles.boxImg}>
            
            <TouchableOpacity style={styles.boxImg} onPress={handleImagePicker}>
            <Image source={{ uri: image }} style={styles.imgPoint} />
            <Text >Adicionar imagem</Text>
              </TouchableOpacity>
            </View>
        
        <View>
          <Text style={styles.txt}>Nome do Local</Text>
          <TextInput style={styles.input} value={pointName} onChangeText={setPointName} placeholder="Nome do Local" />
          <Text style={styles.txt}>Latitude</Text>
          <TextInput style={styles.input} value={latitude} onChangeText={setLatitude} placeholder="Latitude" />
          <Text style={styles.txt}>Longitude</Text>
          <TextInput style={styles.input} value={longitude} onChangeText={setLongitude} placeholder="Longitude" />
        </View>
        {/* <Text style={styles.txt}>Tipo de lixo:</Text>
        
        <View style={styles.box}>
            <View>
            <Checkbox.Item 
            label="Plástico"
            status={selectedTypes.includes('Plástico') ? 'checked' : 'unchecked'}
            onPress={() => handleTypeSelection('Plástico')}
          />
          <Checkbox.Item
            label="Papel"
            status={selectedTypes.includes('Papel') ? 'checked' : 'unchecked'}
            onPress={() => handleTypeSelection('Papel')}
          />
          <Checkbox.Item
            label="Metal"
            status={selectedTypes.includes('Metal') ? 'checked' : 'unchecked'}
            onPress={() => handleTypeSelection('Metal')}
          />
            </View>

            <View>
            <Checkbox.Item
            label="Orgânico"
            status={selectedTypes.includes('Orgânico') ? 'checked' : 'unchecked'}
            onPress={() => handleTypeSelection('Orgânico')}
          />
          <Checkbox.Item
            label="Vidro"
            status={selectedTypes.includes('Vidro') ? 'checked' : 'unchecked'}
            onPress={() => handleTypeSelection('Vidro')}
          />
          <Checkbox.Item
            label="Bateria/Pilha"
            status={selectedTypes.includes('Bateria/Pilha') ? 'checked' : 'unchecked'}
            onPress={() => handleTypeSelection('Bateria/Pilha')}
          />
            </View>
          
         
        </View> */}
        </View>

        <TouchableOpacity style={styles.btnSubmmit} onPress={handleSubmit}>
          <Text style={styles.btnTxt}>Criar </Text>
        </TouchableOpacity>
        </View>


        {/* imagem */}

        
      </ImageBackground>
    </View>
  );
};
