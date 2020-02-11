import React from 'react';
import { StyleSheet, View, ImageBackground, Text} from 'react-native';
import PopupAccueil from './PopupAccueil'


export default class Home extends React.Component {
  render () {

    return(
      <View style={styles.main}>
        <Text style={styles.texte}>Les différents groupes appartenant à SIPA Ouest-France</Text>
        <ImageBackground source={require('../../img/brittany-1146351_960_720.jpg')} style={{position:"absolute", top:0, left:0,right:0, bottom:0, zIndex:-1}}></ImageBackground>
        <View style={styles.popup}>
        <PopupAccueil group="Ouest France" />
        <PopupAccueil group="Additi" />
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({

  main:{
    flex:1,
    backgroundColor:'white',
    width:'100%'
  },
  container:{
    width:'100%',
    alignItems:'flex-end'
  },
  blocLogo:{  
    flex:1,  
    width:'100%',
    justifyContent:'space-around',
    flexDirection:'row',
    alignItems:'center',
    elevation:2,
    height:'20%',
    backgroundColor:'rgb(255,255,255)'
  },
  logo:{
    width:300,
    height:'80%',
    resizeMode:'cover', 
  },
  texte: {
    fontSize:30,
    textAlign:'center',
    padding:10,
    backgroundColor:'rgba(255,255,255,0.4)',
    color:'#083E98'
  },
  containertouchable:{
    height:150,
    justifyContent:'center'
  },
  popup:{
    display: "flex",
    position: "absolute",
    flexDirection: 'row',
    bottom: 0,
    backgroundColor: "white",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center"
  }
})