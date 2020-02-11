import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet, Picker ,TouchableOpacity,Text} from 'react-native';
import { ListItem, SearchBar} from 'react-native-elements';
import PLACES from '../consts/Places'
import departements from '../consts/departements'
import regions from '../consts/regions'
import types from '../consts/types'

import ResultatRecherche from './ResultatRecherche';

// import Autocomplete from 'react-native-autocomplete-input';
// import regions from './files';
// import departements from './../consts/departements';


class SearchableList extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: PLACES,
      error: null,
      value: '',
      detailAdress: false,
      villes : ['Rennes', 'Brest', 'saint malo'],
      selectedRegion: '',
      selectedDepartement:'',
      selectedType:''
     
    };
    
    // this.departements = departements;
    // this.myRegions = regions;
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
      region: item.region,
      departement: item.departement
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
  
    <View>
    <SearchBar
    style={{position: 'absolute', top: 0, flex: 1, alignSelf: 'stretch', right: 0, left: 0}}
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
{/* <Text style={{height:50, fontSize: 20, color: '#4F4F4F', textAlign:'center', padding:10} }>Filtres:</Text> */}
   
   <View style={{height: 80,  
	
    width:'100%',
    display:"flex",
    flexDirection:'row',
    justifyContent:"space-around",
    alignItems:'center',
    // paddingHorizontal:10
    
	}}>
   
    {/* selection de departement*/}
    <View>
      <Text style={styles.textPicker}>DEPARTEMENT</Text>
      <Picker
  
        selectedValue={this.state.selectedDepartement}
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => {
          if (itemValue != "0"){
              this.setState({selectedDepartement: itemValue})
              this.searchFilterFunction(itemValue)
          }
          
      }}>
     
      {/* <Picker.Item style={styles.picker_item} label=" PAR DEPARTEMENT " value="0" /> */}
      {departements.map((item, key) => (
                                            <Picker.Item  color='#636363' label={item} value={item} key={key} />)
                                        )}
    </Picker> 
    </View>
        
    <View
            style={{
                height: 50,
                width: 1,
                backgroundColor: "#D81458",
                opacity:0.7
            }}
        />
   

     {/* selection de regions */}
     <View>
       <Text style={styles.textPicker}> REGION</Text>
       <Picker
            
            selectedValue={this.state.selectedRegion}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => {
              if (itemValue != "0"){
                  this.setState({selectedRegion: itemValue})
                  this.searchFilterFunction(itemValue)
              }
              
          }}>

        
          {regions.map((item, key) => (
                                                <Picker.Item  color='#636363' label={item} value={item} key={key} />)
                                            )}
      </Picker> 
    </View>
    
          
    <View
            style={{
                height: 50,
                width: 1,
                backgroundColor: "#D81458",
                opacity:0.7
              
            }}
        />
   
      {/* selection de types */}
    <View>
       <Text style={styles.textPicker} > TYPE </Text>
        <Picker
            selectedValue={this.state.selectedType}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => {
              if (itemValue != "0"){
                  this.setState({selectedType: itemValue})
                  this.searchFilterFunction(itemValue)
              }
              
          }}>

            
          {types.map((item, key) => (
                                                <Picker.Item  styles={styles.picker_item} color='#636363' label={item} value={item} key={key} />)
                                            )}
        </Picker> 
   </View>
     

    </View>
    </View>
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
  },
  picker:{
    width:200,
    // backgroundColor: '#FFF',
    // fontSize:5,
    borderLeftColor:'#007aff'

   
  },
  textPicker:{
   textAlign: 'center',
    color:'#007aff',
    alignSelf:'center',

    },
 
  
});


export default SearchableList;