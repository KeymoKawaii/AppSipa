import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';


export default class FicheDetailAdresse extends Component {

  constructor (props) {
    super(props);
  }
	
	render() {

    let item = this.props.element;

		return (

    <View style={styles.contentContainer}>
      <Text h2 style={styles.titreAdresse}>{item.type}</Text>
      <Text style={styles.adresse}>{item.adresse}{"\n"}{item.codepostal} {item.ville}</Text>
    </View>

		);
	}
}

const styles = StyleSheet.create({

	contentContainer:{
    height:'100%',
    width:'40%',
    alignItems:'center',
    marginTop:-50
  },
  titreAdresse:{
    fontSize:20,
    marginTop:'35%'
  },
  close: {
    color: '#E2001A',
    fontSize:15,
    textDecorationLine:'underline',
  }

});
