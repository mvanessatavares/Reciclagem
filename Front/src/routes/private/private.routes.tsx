import { FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { StyleSheet } from 'react-native';
import { Home, MapScreen, Profile, CreatePoint } from '../../screens';

const { Navigator, Screen } = createBottomTabNavigator();

export const RoutesPrivadas = () => {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarInactiveTintColor: '#8AC449',
        tabBarActiveTintColor: '#478600',
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarIcon: ({ color, size, focused }) => {
          let iconName: string = '';

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Map') {
            iconName = 'map-marker-alt';
          } else if (route.name === 'Profile') {
            iconName = 'user-alt';
          }

          return <FontAwesome5 name={iconName} size={24} color={color} />;
        },
      })}
    >
      <Screen name="Map" component={MapScreen} />
      <Screen name="Home" component={Home} />
      <Screen name="Profile" component={Profile} />
      <Screen name="CreatePoint" component={CreatePoint} />
    </Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: 'transparent',
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
