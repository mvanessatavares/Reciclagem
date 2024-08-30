import styled from 'styled-components/native';
import { StyleSheet } from "react-native";

export const Container = styled.View``;

export const Text = styled.Text``;

export const styles = StyleSheet.create({

  containerPoint: {
    flexDirection: 'row',
    backgroundColor: 'grey',
    width: 350,
    height:100,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderRadius: 10,
    marginTop:5,
    marginBottom:5,
    
    
  },

  imgPonit: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },

kindTrash: {
  flexDirection: 'row',
  borderWidth: 1
},

  imgTrash: {
  borderWidth: 1,
  width:20,
  height:20,
  marginTop:5,
  marginRight: 2,
  marginBottom:1,
},

textsContainer: {
  width: '57%',
  paddingLeft:10,
  
},


texts:{
  fontSize: 14,
  color: 'rgba(255, 255, 255, 1)',

},

bEdit:{
  backgroundColor: 'rgba(132, 196, 65, 1)',
  width: 40,
  height: 40,
  borderRadius: 10,
  alignItems:'center',
  justifyContent: 'center',
  marginTop: 7,
  marginLeft:5,
  

},

  bRemove :{
    backgroundColor:'#DC3C46',
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    marginLeft:5,

  }
  
      
  });
