import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import PLACES from '../consts/Places'
import ResultatRecherche from './ResultatRecherche';



class SearchableList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: PLACES,
      error: null,
      value: '',
      detailAdress: false
    };
    this.arrayholder = PLACES;
  }


getAdresse (adresse) {
this.setState({
  detailAdress: adresse
})
}


renderSeparator = () => {
  return (
    <View style={{height: 1, width: '100%', backgroundColor: '#CED0CE'}}/>
  );
};


neutralText (txt) {
  txt = txt.toLowerCase();
  txt = txt.replace(/(é|è|e|ë|ê)/g,"e");
  txt = txt.replace(/(à|á|â|ã|ä|å)/g,"a");
  txt = txt.replace(/(æ)/g,"ae");
  txt = txt.replace(/(ç)/g,"c");
  txt = txt.replace(/(ì|í|î|ï)/g,"i");               
  txt = txt.replace(/(ò|ó|ô|õ|ö)/g,"o");
  txt = txt.replace(/(ù|ú|û|ü)/g,"u");
    return txt;
}


searchFilterFunction = text => {
  this.setState({
    value: text
  });

  const newData = this.arrayholder.filter(item => {
    let item2 = {
      adresse: item.adresse,
      type: item.type,
      societe: item.societe,
      codepostal: item.codepostal,
      ville: item.ville,
      groupe: item.groupe,
    }

    let toInspect = JSON.stringify(item2); 
    toInspect = this.neutralText(toInspect);

    let textData = this.neutralText(text); 
    textData = textData.trim(); 
    textData = textData.split(' ');
    let hasWord = true;
    for (let i =0; i < textData.length; i++) {
      if(textData[i] != '') {
        if (toInspect.match(textData[i]) == null) {
          hasWord = false;
        }
      }
    }
      return hasWord;
    });
    this.setState({
      data: newData,
    });
};


renderHeader = () => {
  return (
    <SearchBar
    placeholder="Rechercher"
    backgroundColor='#fff'
    inputContainerStyle={{backgroundColor: '#fff', borderRadius: 15, borderColor:'red', borderWidth: 2, borderBottomColor:'red', borderBottomWidth: 2}}
    containerStyle={{backgroundColor: 'transparent'}}
    inputStyle={{borderWidth: 0, borderColor: 'transparent', flex:1}}
    lightTheme
    round
    onChangeText={text => this.searchFilterFunction(text)}
    autoCorrect={false}
    value={this.state.value}
    />
  );
};



  render() {

    if (this.state.loading) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator />
        </View>
      );
    }



  
    return (

      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => (
            <ListItem
              title={`${item.type} ${item.societe} `}
              subtitle={`${item.adresse} ${item.codepostal} ${item.ville}`}
              onPress={() => this.getAdresse(item)}
            />
          )}
          keyExtractor={(item, index) => String(index)}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />

      {
      (this.state.detailAdress) &&
        <View style={styles.info}>
          <ResultatRecherche close={() => {this.setState({detailAdress : false})}} element={this.state.detailAdress}/>
        </View>
      }
      </View>

    );
  }
}


const styles = StyleSheet.create({

	info:{
		position:'absolute',
		top:'0%',
		left:'0%',
    width:'100%',
    height:'100%',
		flex:1,
		justifyContent:'center',
		alignItems:'center'
  }
});


export default SearchableList;