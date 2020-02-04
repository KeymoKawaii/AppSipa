import React, { Component } from 'react';
import { View, StyleSheet} from 'react-native';
import Description from './Description';
import Filiales from './Filiales';
import BoutonClose from './BoutonClose';




export default class Popup extends Component {
 	
	render() {

		return (

			<View style={styles.container}>
        <View style={styles.PopupContainer}>
        <BoutonClose close={this.props.close}/>
          <View style={styles.PopupSousContainer}>
           <Description mapButton={this.props.mapButton} group={this.props.group}/>
           <View style={styles.divider}></View>
            <View style={styles.blocGauche}>
              <Filiales group={this.props.group} />
            </View>
          </View>
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
    backgroundColor: 'grey'
  },
	PopupContainer:{
    flex: 1,
		width: '90%',
		height:'80%',
		alignItems: 'center',
		justifyContent: 'center',
    backgroundColor: 'white',
    borderColor: 'grey',
    borderRadius: 20,
    flexDirection:'column'
  },
  PopupSousContainer:{
    flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
    flexDirection:'row',
    marginLeft: 40
  },
  divider:{
    width:1,
    height: '50%',
    borderRightWidth: 2,
    borderRightColor: 'rgb(224, 224, 224)',
    padding:20
  },
  blocGauche:{
    flexDirection:'column',
    justifyContent:'flex-end'
  },
});
