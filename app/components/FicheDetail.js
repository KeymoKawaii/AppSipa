import React, { Component } from 'react';
import { View, StyleSheet} from 'react-native';
import DescriptionFicheDetail from './DescriptionFicheDetail';
import FicheDetailAdresse from './FicheDetailAdresse';
import BoutonClose from './BoutonClose';



export default class FicheDetail extends Component {

  	constructor (props) {
      super(props);
    }

	render() {

		return (

			<View style={styles.container}>
        <BoutonClose close={this.props.close} style={{width:40, height:40}}/>
          <View style={styles.PopupContainer}>
           <DescriptionFicheDetail element={this.props.element}/>
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
    borderRadius:20,
    minHeight:220,
    paddingBottom:20,
  },
	PopupContainer:{
    flex: 1,
		width: '100%',
		height:'100%',
		alignItems: 'center',
		justifyContent: 'center',
    backgroundColor: 'white',
    borderColor: 'grey',
    borderRadius: 20,
    flexDirection:'row'	
  },
  divider:{
    width:1,
    height: '40%',
    borderRightWidth: 2,
    borderRightColor: 'rgb(224, 224, 224)',
    padding:15,
  }
	
});
