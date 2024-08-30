import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  containerContent: {
    width: 345,
    height: '100%',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  addressContainer: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  addressText: {
    color: 'white',
    marginLeft: 10,
  },
  flatListContainer: {
    flex: 1,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginVertical: 10,
  },
});
