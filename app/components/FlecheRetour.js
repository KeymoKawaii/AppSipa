import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';



export default class FlecheRetour extends Component {

	render() {

		return (

      <View >
        <TouchableOpacity onPress={this.props.retour}><Icon style={styles.icon} name='arrowleft' color='#E2001A' size={35}/></TouchableOpacity> 
      </View>

		)
	}
}


const styles = StyleSheet.create({

  icon:{
    marginBottom:40
  }
});



