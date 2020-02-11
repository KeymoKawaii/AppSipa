import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "../components/Accueil/Accueil"
import Search from '../components/SearchableList'
import Map from '../components/Map'

const Tab = createBottomTabNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Accueil" component={Home}  />
        <Tab.Screen name="Recherche" component={Search} />
        <Tab.Screen name="Carte" component={Map} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
