import { Dimensions, StyleSheet } from "react-native";
export const style = StyleSheet.create({

    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white'

    },
    boxTop:{
        height:Dimensions.get('window').height/3,
        width:"100%",
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center'
        

    },
    boxMid:{
        height:Dimensions.get('window').height/4,
        width:"100%",
        backgroundColor:'white',
        paddingHorizontal:37
    },
    boxBottom:{
        height:Dimensions.get('window').height/3,
        width:"100%",
        backgroundColor:'white',
        alignItems:'center',
       // justifyContent:'center'
    },
    logo:{
        width:80,
        height:80

    },
    Text:{
        fontWeight:"bold",
        color:"white",
        marginTop:40,
        fontSize:18
    },
    titpleinput:{
        marginLeft:5,
        color:"#807683",
        marginTop:20

    },
    boxInput:{
        width:'100%',
        height:40,
        borderRadius:40,
        borderWidth:1,
        marginTop:10,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:-1,
        backgroundColor:'#CD99D0',
        borderColor:'white',
        borderStyle:"solid"

    },
    input:{
        width:'100%',
        height:'90%',
        borderRadius:40
    },
    button:{
      width:200,
      height:50,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'#250B47',
      borderRadius:40,
      shadowColor:'white',
      shadowOffset:{
        width:0,
        height:3
      },       
    },

    buttonEntrar:{
        fontSize:16,
        color:'white',
        fontWeight:"bold"

    },
    nãoTemConta:{
        fontSize:16,
        color:'#210048'
    }


})