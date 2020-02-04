import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Mapbox from '@react-native-mapbox-gl/maps';
import Annotations from './Annotations';
import Filter from './Filters';
import FicheDetail from './FicheDetail';
import PLACES from '../consts/Places';



Mapbox.setAccessToken(
	'pk.eyJ1IjoicGFjdGVzcyIsImEiOiJjazBjNmsydmMweXJlM21wZTh6NGl4cml3In0.QtCHsu5sWL6tKXP6so4bbA'
);

export default class Map extends Component {

	constructor (props) {
		super(props);
		this.state = {
			detailAdress: false,
			data: PLACES,
			filterType: null,
			filterName: null
		}
		this.arrayholder = PLACES;
	}


	getAdresse (adresse) {
		this.setState({
			detailAdress: adresse
		})
	}

  searchFilterFunction = (text, context) => {
    const newData = this.arrayholder.filter(item => {
			let hasFilter = false;
			if (item[context] === text || item[context].match(text) != null) {
				hasFilter = true;	
			}
			return hasFilter;
		});
    this.setState({
			data: newData,
			filterName: text,
			filterType: context,
			detailAdress: false
		});
  };


	render() {

		return (

			<View style={styles.container}>
				<Mapbox.MapView
					styleURL={Mapbox.StyleURL.Street}
					style={styles.container}
					rotateEnabled={false}>
              <Mapbox.Camera
                zoomLevel={6.5}
								centerCoordinate={[-1, 48.08]}
              />		
					<Annotations data={this.state.data} sendAdresse={this.getAdresse.bind(this)}/>
				</Mapbox.MapView>	

				{
					(this.state.detailAdress) &&
					<View style={styles.info}>
						<FicheDetail close={() => {this.setState({detailAdress : false})}} element={this.state.detailAdress}/>
					</View>
				}

					<Filter filterName={this.state.filterName} filtre={this.searchFilterFunction.bind(this)}/>
			</View> 

		);
	}
}

const styles = StyleSheet.create({

	container:{
		flex: 1
	},
	map:{
		height: 400,
		marginTop: 80
	},
	annotationContainer:{
		width: 30,
		height: 30,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'white',
		borderRadius: 15
	},
	annotationFill:{
		width: 30,
		height: 30,
		borderRadius: 15,
		backgroundColor: 'blue',
		transform: [{ scale: 0.6 }]
	},
	info:{
		position:'absolute',
		top:'58%',
		left:'2%',
		width:'45%',
		flex:1,
		justifyContent:'center',
		alignItems:'center'
	}
});
