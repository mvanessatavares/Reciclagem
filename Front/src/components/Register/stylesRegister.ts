import { StyleSheet } from 'react-native';
export const stylesRegister = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    gap: 15,
    color: '#8AC449',
  },
  inputsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 13,
    textAlign: 'center',
    marginLeft: 5,
  },
  checkbox: {
    marginTop: 8,
    flexDirection: 'row',
    gap: 2,
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    fontFamily: 'Montserrat_400Regular',
    backgroundColor: '#649140',
    width: 320,
    height: 50,
    borderRadius: 5,
  },
  textEntrar: {
    color: 'white',
    marginTop: 15,
  },
  textSG: {
    color: '#8AC449',
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#eaeaea',
    padding: 10,
    borderRadius: 5,
  },
  modalButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
