import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({
    container:{
            margin:10,
            backgroundColor:'#dcdcdc',
            padding:20,
            borderRadius:20,
            borderWidth:1,
            borderColor:"#bdbdbd",
            shadowColor:'black',
            shadowOpacity:0.7,
            flexDirection:'row'
        

    },
    image:{
      width:100,
      height:100, 
      borderRadius:10,
      marginRight:10,
    },
    body_container:{
            flexDirection:"column",
            flex:1,
            justifyContent:'center'
            
    
    },
    title:{
        fontSize:14,
        marginBottom:10,
        color:'black'
    },
    price:{
        fontWeight:'bold',
        textAlign:'right'
    }

})