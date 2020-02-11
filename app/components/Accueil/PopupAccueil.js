import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Image, StyleSheet, ScrollView} from 'react-native';
import Description from './ContentPopup/Description'
import Filiales from './ContentPopup/Filiales'



export default class PopupAccueil extends Component {
    
  
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View>
        <Modal
          animationType="fade"
          transparent={false}
          visible={this.state.modalVisible}>
          <View>
          <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                  <Image source={require('../../img/BOUTONS/close.png')} style={styles.image} />
              </TouchableHighlight>
            <View style={styles.container}>
            <Text style={styles.Title}>{this.props.group}</Text>
            <Description  style={styles.description} group={this.props.group}/>
            <Filiales style={styles.filiales} group={this.props.group}/>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          {
           (this.props.group === "Ouest France") ?
            (<Image source={require('../../img/logo-500x172_OF_Rouge.jpg')}/>)
            : (<Image source={require('../../img/Additi-logo.gif')}/>) 
            
              
          }
        </TouchableHighlight>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
    padding: 50,
    
  },
  image:{
    width:33,
    height:33,
    resizeMode:'contain',
    marginLeft:'92%',
    marginTop:10
  },
  Title: {
    fontSize: 36,
    textAlign: "center",
    color: "red"
  },
  filiales:{
    position: "absolute",
  },
  description: {
    
    position: "absolute",

  }
});