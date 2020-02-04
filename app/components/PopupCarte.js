import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';



export default class PopupCarte extends Component {

  constructor(){
    super();
    this.state = {
      page : 'carte',
    }
  }


  render () {

    let item = this.props.donnees;
    return(

      <View style={styles.container}>
        <Text style={styles.societe}>{item.societe}</Text>
        <Text style={styles.type}>{item.type}</Text>
        <Text>{item.adresse}</Text>
        <Text>{item.codepostal} {item.ville}</Text>
        <TouchableOpacity onPress={() => this.props.sendAdresse(item)}><Text style={styles.info}>Plus d'infos...</Text></TouchableOpacity>
      </View>

    )
  }
}

const styles = StyleSheet.create({

	container:{
    flex: 1,
    backgroundColor:'#fff',
    padding:8,
    borderRadius:5,
    width:250,
    height:120
	},
  societe:{
    fontSize:15,
    textDecorationLine:'underline',
    fontWeight:'bold'
  },
  type:{
    marginBottom:2,
  },
  info:{
    color:'blue',
    textAlign:'right'
  }
});