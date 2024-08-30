import * as Location from 'expo-location';
import { Dispatch, SetStateAction } from 'react';

export type Address = {
  street: string | null;
  streetNumber: string | null;
  city: string | null;
  latitude?: number;
  longitude?: number;
};

type SetAddressFunction = Dispatch<SetStateAction<Address | null>>;

export const getAddressAsync = async (setAddress: SetAddressFunction) => {
  try {
    // Verifica se a permissão de localização foi concedida
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permissão de localização negada.');
      return;
    }

    // Obtém a localização atual do usuário
    const location = await Location.getCurrentPositionAsync({});

    // Obtém o endereço com base na latitude e longitude
    const addressResponse = await Location.reverseGeocodeAsync({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });

    // Extrai o primeiro resultado do endereço e define no estado
    if (addressResponse.length > 0) {
      const firstAddress = addressResponse[0];

      setAddress({
        street: firstAddress.street,
        streetNumber: firstAddress.streetNumber,
        city: firstAddress.subregion,
      });
    }
  } catch (error) {
    console.error('Erro ao obter endereço:', error);
  }
};
