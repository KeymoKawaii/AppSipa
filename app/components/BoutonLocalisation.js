import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity,Text } from 'react-native';



export default class BoutonLocalisation extends Component {
  	
	render(){

		return (

     <View >
       <TouchableOpacity onPress={this.props.mapButton} style={styles.touchable}>
        <Text style={styles.text}>Localiser l'ensemble des sociétés</Text>
       </TouchableOpacity>   
     </View>

		)
	}
}

const styles = StyleSheet.create({
	
  touchable:{
    width:400,
    height:44,
    borderRadius:3,
    backgroundColor: '#E2001A',
    margin:10,
    marginBottom:100,
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    fontSize: 16,
    color:'white',
    fontWeight:'bold'
  }
});
