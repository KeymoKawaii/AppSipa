import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import DescriptionFicheDetail from './DescriptionFicheDetail';
import FicheDetailAdresse from './FicheDetailAdresse';



export default class DetailRecherche extends Component {

	render() {
		return (

			<View style={styles.container}>
          <View style={styles.PopupContainer}>
           <DescriptionFicheDetail style={{marginTop:100}} element={this.props.element} retour={this.props.close}/>
           <View style={styles.divider}></View>
           <FicheDetailAdresse element={this.props.element}/>
          </View>
			</View>

		);
	}
}

const styles = StyleSheet.create({

	container:{
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width:'100%',
    height:'100%'
  },
	PopupContainer:{
    flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
    backgroundColor: 'white',
    borderColor: 'grey',
    borderRadius: 20,
    flexDirection:'row'	
  },
  divider :{
    width:1,
    height: '50%',
    borderRightWidth: 2,
    borderRightColor: 'rgb(224, 224, 224)',
    padding:20,
  }
	
});