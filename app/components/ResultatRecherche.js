import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, ScrollView} from 'react-native';
import BoutonClose from './BoutonClose';




export default class ResultatRecherche extends Component {

  	constructor (props) {
      super(props);
    }


	render() {

    let item = this.props.element;

		return (

			<View style={styles.container}>
          <BoutonClose close={this.props.close} style={{width:40, height:40}}/>
          <View style={styles.PopupContainer}>
            <View style={styles.descriptifContainer}>
              <View style={styles.vieww}>
                <Image style={styles.image} source={item.logo} />
                <Text h1 style={styles.titre}>{item.societe}</Text>
                <Text style={{marginBottom:5, fontSize:25, marginRight:'10%'}}>Dirigeant : {item.dirigeantPrenom} {item.dirigeant}</Text>
                  <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.containerText}>
                  <Text style={styles.paragraphe}>{item.description}</Text>
                  </ScrollView>
              </View>
            </View>
            
            <View style={styles.divider}></View>
              <View style={styles.contentContainer}>
                <Text h2 style={styles.titreAdresse}>{item.type}</Text>
                <Text style={styles.adresse}>{item.adresse}{"\n"}{item.codepostal} {item.ville}</Text>
              </View>
          </View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
	PopupContainer: {
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
  divider :{
    width:1,
    height: '40%',
    borderRightWidth: 2,
    borderRightColor: 'rgb(224, 224, 224)',
    
    marginRight:'5%',
  },
  descriptifContainer: {
    flex:1,
    marginLeft:'3%',
    marginTop:'5%',
  },
  titre: {
    fontSize: 30,
    marginTop:'5%',
    marginRight:'10%'
  },
  paragraphe:{
    textAlign :'justify',
    marginTop:'5%',
    marginRight:'25%',
    fontSize:20,
    marginRight:'10%'
   
  },
  image:{
    width:300,
    height:100,
    resizeMode:'cover',
    marginTop:'10%'
  },
  contentContainer:{
    height:'100%',
    width:'40%',
    alignItems:'center',
    },
    titreAdresse:{
    fontSize:30,
    marginTop:'35%',
    marginRight:'35%'
    },
    close: {
      color: '#E2001A',
      fontSize:20,
      textDecorationLine:'underline',
    },

    adresse: {
      marginTop:'5%',
      marginRight:'35%',
      fontSize:20,
    },
    vieww:{
      marginLeft:100,
      marginTop:-200,
    }

   

});

