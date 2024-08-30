import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
     flex: 1,
     width: undefined,
     height: undefined,
    },

    formBox:{
        // marginTop:50,
        justifyContent:'center',
        alignItems:'center',
        height:'100%',

    },
    txtTitle:{
        fontSize:20,
        color: '#FFFFFF',
        fontWeight: 'bold',
        borderBottomColor: 'rgba(122, 195, 64, 1)',
        // alignItems: 'center',
        // justifyContent: 'center',
        // paddingHorizontal: 5,
        // paddingTop: 20,
        borderBottomWidth: 2,
        // marginBottom:5
      
      },

      containerForm:{
        backgroundColor: "rgba(217, 217, 217, 0.60)",
        width:'90%',
        alignItems:'center',
        borderRadius:10,
        marginBottom:30,
        marginTop:30,
        paddingBottom:20,
        paddingTop:10,
      },

      imgPoint: {
       
        width: 70, 
        height: 70, 
        borderRadius: 5, 
      },

    boxImg:{
        
        alignItems:'center',
        marginBottom:10,
      },

     


    txt:{
        fontSize:16,
        color: '#000000',
        marginBottom:5,
        
      },


    input: {
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
        width: 300,
      },

      box:{
        flexDirection: 'row',
        
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
      btnTxt:{
        fontSize:16,
        color: '#FFFFFF',
        fontWeight:'bold',
      },
})