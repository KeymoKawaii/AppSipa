import React, { Component, Fragment } from 'react';
import { View, StyleSheet, Text, Animated, TouchableOpacity, Dimensions, Button, ScrollView } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons'
import FilterLink from './FilterLink'


let {width} = Dimensions.get('screen');

export default class Filter extends Component {

  constructor (props) {
    super(props);
    this.state  = {
      left: new Animated.Value(-(width*.3)),
      btnright: new Animated.Value(0),
      visible: false
    }

  }

  ButtonClicked (){

    let {visible} = this.state;
    if (!visible) {
      this.setState({
        visible: true
      }, () => this.animate());
    } else {
      this.setState({
        visible: false
      }, () => this.animateOut());
    }
  }

  animate () {
    Animated.timing(
      this.state.left,
      {
        toValue: 0,
        duration: 200,
      }
    ).start()
    Animated.timing(
      this.state.btnright,
      {
        toValue: (width * .3),
        duration: 200,
      }
    ).start()
    
  }
  animateOut () {
    Animated.timing(
      this.state.left,
      {
        toValue: -(width * .3),
        duration: 200,
      }
    ).start()
    Animated.timing(
      this.state.btnright,
      {
        toValue: 0,
        duration: 200,
      }
    ).start()
    
  }

  render() {

    return (

      <Fragment>
        <Animated.View style={[styles.container, {right: this.state.left}]}>

          <ScrollView contentContainerStyle={styles.containerFilter}>
            <Text style={styles.filtre}>Filtres</Text>
            <Text style={styles.groupFilter}>Groupe</Text>

            <View style={{justifyContent:'center',alignItems:'center'}}>
              <FilterLink name='Additi' style={(this.props.filterName == 'Ouest-France,Additi')? styles.textFilter : styles.textFilterActive} filtre={this.props.filtre} type="groupe" />
             
              <FilterLink name='Les Journaux de Loire' style={(this.props.filterName == 'Les Journaux de Loire')? styles.textFilter : styles.textFilterActive} filtre={this.props.filtre} type="groupe" />
              <FilterLink name='Publihebdos' style={(this.props.filterName == 'Publihebdos')? styles.textFilter : styles.textFilterActive} filtre={this.props.filtre} type="groupe" />
              <FilterLink name='Radios Régie Régions' style={(this.props.filterName == 'Radios Régie Régions')? styles.textFilter : styles.textFilterActive} filtre={this.props.filtre} type="groupe" />
              <FilterLink name='Spir Communication' style={(this.props.filterName == 'Spir Communication')? styles.textFilter : styles.textFilterActive} filtre={this.props.filtre} type="groupe" />
              <FilterLink name='Sofiouest' style={(this.props.filterName == 'Sofiouest')? styles.textFilter : styles.textFilterActive} filtre={this.props.filtre} type="groupe" />
              <FilterLink name='Infomer' style={(this.props.filterName == 'Infomer')? styles.textFilter : styles.textFilterActive} filtre={this.props.filtre} type="groupe" />
            </View>

            <Text style={styles.groupFilter}>Type</Text>

            <View style={{justifyContent:'center',alignItems:'center'}}>
              <FilterLink name='Rédaction' style={(this.props.filterName == 'Rédaction,Imprimerie')? styles.textFilter : styles.textFilterActive} filtre={this.props.filtre} type="type" />
          
              <FilterLink name='Edition' style={(this.props.filterName == 'Edition')? styles.textFilter : styles.textFilterActive} filtre={this.props.filtre} type="type" />
              <FilterLink name='Agence' style={(this.props.filterName == 'Agence')? styles.textFilter : styles.textFilterActive} filtre={this.props.filtre} type="type" />
              <FilterLink name='Siège' style={(this.props.filterName == 'Siège')? styles.textFilter : styles.textFilterActive} filtre={this.props.filtre} type="type" />
            </View>

          </ScrollView>

          <Button style={{fontWeight:700}} onPress={() => this.props.filtre()} title="Réinitialiser" color="#E2001A"/>

        </Animated.View>
        <Animated.View style={[styles.myButton, {right: this.state.btnright}]}>
          <TouchableOpacity onPress={()=>this.ButtonClicked()} >
            {
              (this.state.visible) ?
              <Icons name="ios-arrow-dropright-circle" size={50} color="#083E98" />
              :
              <Icons name="ios-arrow-dropleft-circle" size={50} color="#083E98" />
            }

          </TouchableOpacity>
        </Animated.View>
      </Fragment>

    );
  }
}





const styles = StyleSheet.create({

myButton:{
  paddingHorizontal:20,
  paddingVertical:15,
  backgroundColor:'transparent',
  position: "absolute",
  top: '50%',
  right: 0
},
container:{
  flex: 1,
  width: '30%',
  height: '100%',
  justifyContent:'space-between',
  backgroundColor: '#fff',
  position:"absolute",
  top:0,
  borderLeftWidth: 2,
  borderLeftColor: '#b6bab6'
},
containerFilter : {
 justifyContent:'center'
},
groupFilter:{
  fontSize:18,
  fontWeight:'700',
  backgroundColor:'#083E98',
  textAlign:'center',
  width:'100%',
  color:'white',
  marginBottom:40,
  padding:5
},
textFilter:{
  fontSize:18,
  fontWeight:'700',
  padding:15
},
textFilterActive:{
  fontSize:18,
  fontWeight:'700',
  padding:15,
  color: '#083E98'
},
filtre:{
  fontSize:30,
  fontWeight:'700',
  textAlign:'center',
  padding:10
}
});