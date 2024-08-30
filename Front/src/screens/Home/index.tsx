import { useCallback, useEffect, useState } from 'react';
import { FlatList, Image, ScrollView, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import { styles } from './styles';

import ImgBackground from '../../assets/image-background.png';

import { Search } from '../../components/Search';
import { Address, getAddressAsync } from '../../services/utils';
import { CardSelect } from '../../components/CardSelect';
import { Card, IPonto } from '../../components/Card';
import { API } from '../../api';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';

export const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<IPonto[] | null>(null);
  const [address, setAddress] = useState<Address | null>(null);

  const options = ['All', 'Plastic', 'Paper', 'Metal', 'Organic', 'Glass', 'Batteries'];

  const handleSearch = async () => {
    console.log('handleSearch');
    // try {
    //   // Realize a chamada à API utilizando o searchTerm
    //   // e atualize os resultados da pesquisa com setSearchResults
    //   const response = await fetch(`https://api.example.com/search?q=${searchTerm}`);
    //   const data = await response.json();
    //   setSearchResults(data.results);
    // } catch (error) {
    //   console.error(error);
    // }
  };

  const getPoints = async () => {
    const result = await API.get('points');
    const points = result.data as IPonto[] | null;

    setSearchResults(points);
  };

  useFocusEffect(
    useCallback(() => {
      getAddressAsync(setAddress);
      getPoints();
      setSearchTerm('');
    }, [])
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Image source={ImgBackground} style={styles.backgroundImage} />
        <View style={styles.containerContent}>
          <View style={styles.addressContainer}>
            <FontAwesome5 name="map-marker-alt" size={20} color="white" />
            <Text
              style={styles.addressText}
            >{`Nº${address?.streetNumber}, ${address?.street}, ${address?.city}`}</Text>
          </View>

          <Search onPress={handleSearch} value={searchTerm} onChangeText={handleSearch} />

          <View style={{ marginTop: 5, marginBottom: 15 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {options.map((item, index) => (
                <CardSelect
                  text={item}
                  key={index}
                  isFirst={index === 0}
                  onPress={() => setSearchTerm(item)}
                />
              ))}
            </ScrollView>
          </View>

          <View style={styles.flatListContainer}>
            <FlatList
              showsVerticalScrollIndicator={true}
              data={searchResults}
              renderItem={({ item }) => (
                <Card
                  id={item.id}
                  tipoLixo={item.tipoLixo}
                  photo={item.photo}
                  name={item.name}
                  time={item.time}
                />
              )}
              keyExtractor={(item) => item.id}
              numColumns={2}
              columnWrapperStyle={styles.columnWrapper}
              ListEmptyComponent={
                <View>
                  <Text style={styles.addressText}>Nenhum ponto cadastrado ainda</Text>
                </View>
              }
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
