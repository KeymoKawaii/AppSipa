import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const FilterLink = (props) => {
  return (
    <TouchableOpacity onPress={() => props.filtre(props.name, props.type)}>
      <Text style={props.style}>{props.name}</Text>
    </TouchableOpacity>
  )
}

export default FilterLink;