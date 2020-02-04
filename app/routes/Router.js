import React, {Component} from 'react';
import {View, StyleSheet, BackHandler} from 'react-native';

import Home from '../components/Home';
import Popup from '../components/Popup';
import Entete from '../components/Entete';
import Map from '../components/Map';
import SearchableList from '../components/SearchableList';
import FicheDetail from '../components/FicheDetail';

export default class Router extends Component {
  constructor () {
    super();
    this.state = {
      page: false,
      previous: false
    }
  }
 

  componentDidMount () {
    let t = this;
    BackHandler.addEventListener('hardwareBackPress', () => {
      if(t.state.page){
        this.setState({
          page: this.state.previous,
          previous: false,
        })
        return true;
      }
    });
  }


  renderEntete () {
    
    let {page} = this.state;
    return (
      <Entete 
        search={() => {this.setState({page:'search', previous: page}) }} 
        home={() => {this.setState({page:false, previous: page}) }} 
        map={() => {this.setState({page:'map', previous: page})}}
      />
    )
  }

  renderPage () {

    let {page} = this.state;

    if(this.state.page === 'map') {
      return <View style={{flex:1}}>
        {this.renderEntete()}
        <Map/>
      </View>

    } else if (this.state.page === 'ouestfrance' || this.state.page === 'additi') {
      return <View style={{flex:1}}>
        {this.renderEntete()}
      <Popup mapButton={() => {this.setState({page:'map', previous: page})}} group={this.state.page} close={() => {this.setState({page: false})}}/>
      </View>

    } else if (this.state.page === 'search') {
      return <View style={{flex:1}}>
        {this.renderEntete()}
      <SearchableList resultat={() => {this.setState({page:'info', previous: page}) }}/>
      </View>
      
    }else {
      return <View style={{flex:1}}>
        {this.renderEntete()}
        <Home OuestFrance={() => {this.setState({page:'ouestfrance'}) }} Additi={() => {this.setState({page:'additi'}) }}/>
      </View>
    }
  }


  render () {

    return (
      <View style={styles.main}>
        {this.renderPage()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex:1,
    backgroundColor:'white',
  },
  return: {
    width:100,
  },
})