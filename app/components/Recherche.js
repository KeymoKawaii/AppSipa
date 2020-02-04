import React from 'react';
import { Text, StyleSheet, View } from 'react-native';




export default class Recherche extends React.Component {

  render() {

    return (

      <View style={styles.bouton}>
        <Text style={styles.texteBouton}>Rechercher</Text>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({

  bouton:{
    width:200,
    height:50,
    backgroundColor:'#083E98',
    borderRadius:10,
    justifyContent:'center',
    margin:7,
  },
  texteBouton:{
    color:'white',
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center'
  }
})