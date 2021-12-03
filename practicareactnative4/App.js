import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator1 from './Navigations/BottomTabNavigator1';
import Estructuraprovider from './Context/Estructura'

export default function App() {
  return (
    <Estructuraprovider>
      <NavigationContainer>
        <BottomTabNavigator1/>
      </NavigationContainer>
    </Estructuraprovider>
  );
}