import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Busca, Button, Container, ContainerBusca, IconSearch, InfoPoint, Input, Lista, PointFound, PointsSearch } from './styles';

import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';
import { useEffect, useState } from 'react';
import { API } from '../../api';
import { Point } from '../../@types/types';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from '@expo/vector-icons/Feather';

import DefaultImage from '../../assets/image.png';


export const MapScreen = () => {

  const [region, setRegion] = useState({
    latitude: -6.8895271,
    longitude: -38.5478304,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [seletedPoint, setSelectedPoint] = useState<Point | null>(null);

  const [points, setPoints] = useState<Point[]>([]);
  const [filtredPoints, setFiltredPoints] = useState<Point[]>([]);

  function handleSetRegion(point: Point) {
    
    console.log(point);

    setSelectedPoint(point);
    
    setRegion({
      latitude: parseFloat(point.latitude),
      longitude: parseFloat(point.longitude),
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });


  }

  async function handleSearchPoints(busca: string) {


    if (busca) {

      const findPoints = points.filter((point) => point.name.toLocaleLowerCase().includes(busca.toLocaleLowerCase()));

      if (findPoints) {

        setFiltredPoints(findPoints);

      }

    } else {

      setFiltredPoints([]);

    }



  }

  async function handleGetAllPoints() {

    try {
  console.log('alow');
      const response = await API.get('/points');
      console.log(response.data);
      setPoints(response.data as Array<Point>);

    } catch (error) {

      console.log(error);

    }

  }

  useEffect(() => {
    handleGetAllPoints()
  }, []);

  return (

    <Container>
      <ContainerBusca>
        <Busca>
          <IconSearch
            name="search"
          />
          <Input
            onChangeText={(e: string) => handleSearchPoints(e)}
            placeholder="Digite para buscar"
          />
        </Busca>
        {
          filtredPoints.length > 0 && (
            <Lista>
              <FlatList
                data={filtredPoints}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <Button onPress={() => handleSetRegion(item)}>
                    <PointFound>{item.name}</PointFound>
                  </Button>
                )}
              />
            </Lista>
          )
        }
      </ContainerBusca>
      <MapView
        style={{ width: '100%', height: '100%', zIndex: 0 }}
        provider={PROVIDER_GOOGLE}
        region={region}
      // initialRegion={region}
      >
        {
          points.map((point, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: parseFloat(point.latitude),
                longitude: parseFloat(point.longitude),
              }}
              title={point.name}
              description="Ponto"
            />
          ))
        }
      </MapView>
      {
        seletedPoint && (
          <PointsSearch>
            <View style={{width: '100%',  flexDirection: 'row', justifyContent: 'flex-end'}}>
              <IconSearch
                name="x"
                onPress={() => setSelectedPoint(null)}
              />

            </View>
            <InfoPoint>
              <Image
                source={seletedPoint.photo ?? DefaultImage}
                style={{ height: 100, width: 100 }}
              />
              <View style={{ marginLeft: 10 }}>
                <Text style={{ color: '#FFF', fontSize: 20 }}>{seletedPoint.name}</Text>
                <Text style={{ color: '#FFF' }}>{seletedPoint.city} - {seletedPoint.state}</Text>
              </View>

            </InfoPoint>
          </PointsSearch>
        )
      }
    </Container>

  );


};
