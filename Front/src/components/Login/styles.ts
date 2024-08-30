import {StyleSheet} from 'react-native'
import { ControllerTextInput } from '../ControllerTextInput'
import { ButtonSocialGoogle } from '../ButtonSocialGoogle/ButtonSocialGoogle'
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    gap: 20,
    color: '#8AC449'
  },
  inputsContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    marginBottom: 20,
  },
  text: {
    marginTop: 8,
    color: 'white',
    fontSize: 13
  },
  button: {
    alignItems: 'center',
    fontFamily: "Montserrat_400Regular",
    backgroundColor: "#649140",
    width: 320,
    height: 50,
    borderRadius: 5,
  },
  textEntrar:{
    color: 'white', 
    marginTop: 15
  },
  textSG:{
    color: '#8AC449'
  }
})
