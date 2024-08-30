import styled from 'styled-components/native';

import { StyleSheet } from 'react-native';

export const Container = styled.View``;

export const Text = styled.Text``;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },

  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageForeground: {
    width: 240,
    height: 240,
    position: 'absolute',
    top: 100,
    marginLeft: 'auto',
    marginRight: 'auto',
  },

  text: {
    top: 110,
    left: 0,
    zIndex: 1,
    color: 'white',
    fontSize: 20,
    fontWeight: 'normal',
    textAlign: 'center',
    marginBottom: 160,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    width: 280,
    marginBottom: 10,
    alignSelf: 'center',
    height: 40,
    backgroundColor: 'rgba(116, 185, 45, 1)',
  },

  buttonText: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 1)',
  },
  containerr: {
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },
});
