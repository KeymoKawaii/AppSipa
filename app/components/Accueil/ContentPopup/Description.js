import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import BoutonLocalisation from '../../BoutonLocalisation';



const Description = (props) => {
  if (props.group === 'Additi'){

		return (

      <View>
              <ScrollView showsVerticalScrollIndicator={true}>
              <Text style={styles.text}>ADDITI regroupe les savoir-faire de Précom et de ses filiales, et celles de Ouest-France Multimédia, spécialiste des marchés d’annonces en ligne. A chaque besoin en communication de proximité, ADDITI propose aux annonceurs une offre publicitaire unique, basée sur des médias puissants et des solutions digitales ciblées.
                Au plus près de leur marché, leurs équipes accompagnent le développement des acteurs locaux grâce à des solutions publicitaires et marketing efficaces pour répondre à la diversité des enjeux : trafic, référencement, visibilité, image de marque...
              </Text>
              </ScrollView>
      </View>

    );

  } else {

    return (
        <View>
              <ScrollView showsVerticalScrollIndicator={true}>
              <Text style={styles.text}>Ouest-France est un quotidien régional français, édité à Rennes et vendu dans les régions de l'ouest de la France, ainsi qu'à Paris. Il est, depuis 1975, le premier quotidien français en termes de diffusion, avec en moyenne 693 794 exemplaires diffusés chaque jour en 20164. Il est édité par le groupe SIPA - Ouest-France,
               propriété de l'Association pour le soutien des principes de la démocratie humaniste (ASPDH), contrôlée par la famille Hutin. 
              </Text>
              </ScrollView>
      </View>

    );
  }
}

export default Description;

const styles = StyleSheet.create({
  text: {
    fontSize: 26,
    width:'100%',
    
  },
});
