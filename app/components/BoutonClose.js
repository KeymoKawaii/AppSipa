import React, { Component } from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';



export default class BoutonClose extends Component {
 
	render(){

		return (

      <TouchableOpacity onPress={this.props.close}>
         <Image source={require('../img/BOUTONS/close.png')} style={styles.image} />
      </TouchableOpacity>

    )
    
	}
}

const styles = StyleSheet.create({
	
  image:{
    width:30,
    height:30,
    resizeMode:'contain',
    marginLeft:'92%',
    marginTop:10
  }
});



