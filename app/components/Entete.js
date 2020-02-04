import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text} from 'react-native';
import Recherche from './Recherche.js';



export default class Entete extends Component {

render() {
 
    return (

      <View style={styles.container}>
       <View style={styles.RectangleShapeView} >
         <TouchableOpacity onPress={this.props.home}><Image source={require('../img/logo-500x172_OF_Rouge.jpg')} style={styles.Image} /></TouchableOpacity>
            <View style={{ width: 350, marginRight: 50, flexDirection: "row"}}>
              <View  style={{ width: 300, }}>
                <TouchableOpacity onPress={this.props.search}><Recherche/></TouchableOpacity>
              </View>
              <TouchableOpacity onPress={this.props.map}><Image source={require('../img/BOUTONS/placeholder.png')} style={styles.logoRouge}/></TouchableOpacity>
          </View>
         </View> 
      </View>

    );
  }
}

const styles = StyleSheet.create({
 
  container: {    
    backgroundColor: '#F5FCFF',
    flexDirection:'row',
  },
  RectangleShapeView: {  
    width: '100%' ,
    height: 65,
    backgroundColor: '#fff',
    borderBottomColor: '#B6BAB6',
    borderBottomWidth: 2,
    flexDirection: 'row', 
    justifyContent: 'space-between',
  },
  Image: {
    width:150,
    height:63,
    resizeMode:"cover",
  },
  logoRouge: {
    width: 50,
    height:60,
    flexDirection:'row',
    resizeMode:"contain",
    marginRight:30,
  }
});

 
