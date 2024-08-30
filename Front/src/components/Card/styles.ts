import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: 165,
    height: 176,
    borderRadius: 10,
    backgroundColor: '#8E8E8E',
    ...Platform.select({
      ios: {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  imageContainer: {
    width: 165,
    height: 100,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    position: 'relative',
    backgroundColor: 'blue',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  garbages: {
    position: 'absolute',
    width: 10,
    height: 10,
    top: 0,
    right: 10,
    flexDirection: 'row',
    gap: 3,
    zIndex: 1,

    borderWidth: 1,
  },
  garbage: {
    width: 10,
    height: 10,
  },
  textContainer: {
    paddingHorizontal: 5,
    height: 76,
  },
  text: {
    color: 'white',
    fontSize: 12,
  },
});
