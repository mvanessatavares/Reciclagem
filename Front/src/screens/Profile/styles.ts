import styled from 'styled-components/native';
import { StyleSheet } from "react-native";

export const Container = styled.View``;

export const Text = styled.Text``;

export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
     flex: 1,
     width: undefined,
     height: undefined,
    },
    userBox:  {
      alignItems: 'center',
      paddingTop: 50,
      marginBottom:15,

     
    },

      textUser: {
        fontSize: 16,
        fontWeight: '400',
        marginTop: 2,
       color: 'rgba(255, 255, 255, 1)',
      },
      imgPerfil: {
        // width: 70,
        // height: 70,
        marginBottom:10,
        width: 100, 
        height: 100, 
        borderRadius: 50, 
        // marginTop: 50
    },

    
      Form:{
        flex: 3,
        backgroundColor: "rgba(217, 217, 217, 0.29)",
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
        paddingBottom:1,
        alignItems: 'center',
       
        
    },
    title:{
      fontSize: 14,
      color: 'rgba(255, 255, 255, 1)',
      borderBottomColor: 'rgba(122, 195, 64, 1)',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 5,
      paddingTop: 20,
      borderBottomWidth: 1,
      marginBottom:5
    
  },

  
  b:{
    
        backgroundColor: 'rgba(132, 196, 65, 1)',
        paddingTop: 2,
        borderRadius: 10,
        width: 190,
        height:50,
        alignItems: 'center',
        alignSelf: 'center',
        marginTop:5,
        marginBottom:5,
       

  },

  bIcon: {
    width:25,
    height:25,
  },

   //modal

   modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems:'center',
  },
  btnSubmmit: {
    backgroundColor:'rgba(132, 196, 65, 1)',
    alignItems:'center',
    justifyContent:'center',
    width:120,
    height:50,
    borderRadius:10,
    marginLeft:20,
    
  },
btnBox:{
  flexDirection:'row',
  marginTop:10,
},
  btnCancel:{
    backgroundColor:'#DC3C46',
    alignItems:'center',
    justifyContent:'center',
    width:120,
    height:50,
    borderRadius:10,
    marginRight:20,
   
    
  },
  btnText:{
    fontSize:16,
    color: '#FFFFFF'
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    width: 300,
  },

  logout:{
    color: '#8AC449',
    textDecorationLine: 'underline'
  }

  
      
  });
