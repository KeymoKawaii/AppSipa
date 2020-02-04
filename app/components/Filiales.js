import React, { Component } from 'react';
import { View, StyleSheet, Image, ScrollView, Text } from 'react-native';



const Filiales = (props) => {

    if (props.group === 'additi'){

		return (

      <View style={styles.contentContainer}>
        <Text style={styles.textFiliale}>Filiales</Text>
        <ScrollView>
          <Image style={styles.image}source={require('../img/PRECOM/logo-500x172_precom-alimentation.jpg')} />
          <Image style={styles.image}source={require('../img/REGIE-RADIOS-REGION/logo-500x172_cocktail-fm.jpg')} />
          <Image style={styles.image}source={require('../img/Medialex.png')} />
          <Image style={styles.image}source={require('../img/Happy Prod.png')} />
          <Image style={styles.image}source={require('../img/Precontact.png')} />
          <Image style={styles.image}source={require('../img/logo-500x172_ouest-france-multimedia.jpg')} />
          <Image style={styles.image}source={require('../img/nantesMedia.png')} />
          <Image style={styles.image}source={require('../img/Dans_nos_cœurs.jpg')} />
          <Image style={styles.image}source={require('../img/Affiouest.jpg')} />
        </ScrollView>
      </View>

    );
    
	} else if(props.group === 'ouestfrance') {

    return (

      <View style={styles.contentContainer}>
      <Text style={styles.textFiliale}>Filiales</Text>
        <ScrollView>
          <Image style={styles.image}source={require('../img/logo-500x172_OF_Rouge.jpg')} />
          <Image style={styles.image}source={require('../img/INFOMER/logo-500x172_chasse-maree.jpg')} />
          <Image style={styles.image}source={require('../img/INFOMER/logo-500x172_le-marin.jpg')} />
          <Image style={styles.image}source={require('../img/logo-pdm.png')} />
          <Image style={styles.image}source={require('../img/INFOMER/logo-500x172_chasse-maree.jpg')} />
          <Image style={styles.image}source={require('../img/logo-500x172_voiles-et-voiliers.jpg')} />
          <Image style={styles.image}source={require('../img/logo-500x172_editions-ouest-france.jpg')} />
        </ScrollView>
      </View>

      );
  }
}

export default Filiales;

const styles = StyleSheet.create({

	contentContainer:{
    height:'80%',
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    padding:40
  },
  image:{
    width:250,
    resizeMode:'contain',
  },
  textFiliale:{
    fontSize:25,
    fontWeight:'700',
    textAlign:'center',
    width:'100%',
    textDecorationLine:'underline'
  }
});
