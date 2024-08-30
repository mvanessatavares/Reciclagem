import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

const LocationCoordinates = (setLatitude: any, setLongitude: any) => {

    Geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (error) => {
        console.error('Error getting current position:', error);
        Alert.alert('Error', 'Unable to retrieve your current location.');
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  // Use a variável "latitude" e "longitude" conforme necessário

};

export default LocationCoordinates;
