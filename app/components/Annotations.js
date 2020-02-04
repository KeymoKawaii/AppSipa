import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Mapbox from '@react-native-mapbox-gl/maps';
import PopupCarte from './PopupCarte';



export default class Annotations extends Component {

  render(){

    let items = this.props.data

     return (

      <View style={styles.container}>
          {items.map((item,k) => {
          if (item.coordonnees[0] !== '') {
            return (<Mapbox.PointAnnotation
              key={k}
              id={'PointAnnotation'+k}
              coordinate={item.coordonnees.reverse()}>
                <Mapbox.Callout>
                  <PopupCarte sendAdresse={this.props.sendAdresse} donnees={item}/>
                </Mapbox.Callout>
            </Mapbox.PointAnnotation>) } else { return null }
          }

        )}
      </View>

  )}
}

const styles = StyleSheet.create({

	container:{
		flex: 1
  },
  fiche:{
    width:400
  }
});