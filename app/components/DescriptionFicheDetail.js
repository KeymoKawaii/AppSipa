import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';




export default class DescriptionFicheDetail extends Component {
  
	render() {

    let item = this.props.element;

		return (

      <View style={styles.descriptifContainer}>
            <Image style={styles.image} source={item.logo} />
            <Text h1 style={styles.titre}>{item.societe}</Text>
            {
              (item.dirigeant != '') &&
                <Text>Dirigeant : {item.dirigeant}</Text>
            }
            {
              (item.poste_1 != '') &&
                <Text style={{marginBottom:5}}>Poste : {item.poste_1}</Text>
            }
            {
              (item.dirigeant_bis != '') &&
                <Text style={{marginBottom:5}}>Poste : {item.dirigeant_bis}</Text>
            }
            {
              (item.poste_2 != '') &&
                <Text style={{marginBottom:5}}>Poste : {item.poste_2}</Text>
            }
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.containerText}>
              <Text style={styles.paragraphe}>{item.description}</Text>
            </ScrollView>
        </View>
        
		);
	}
}

const styles = StyleSheet.create({
	
  descriptifContainer: {
    flex:7,
    width: '50%',
    marginLeft:40,
    marginTop:10
  },
  titre: {
    fontSize: 20,
    marginBottom:10
  },
  paragraphe:{
    textAlign :'justify',
    marginBottom :5,
  },
  image:{
    width:200,
    height:80,
    resizeMode:'cover',
    marginTop:-50
  }
});
