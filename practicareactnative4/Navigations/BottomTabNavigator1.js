import React, { useContext } from 'react';
import { Text, View } from 'react-native'
import { Badge, Icon, withBadge } from 'react-native-elements'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../Screens/HomeScreen';
import Wishlist from '../Screens/Wishlist';
import Carrito from '../Screens/Carrito';
import { Estructura } from '../Context/Estructura';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator1(){
   const { cantidad, carrito } = useContext(Estructura);

  return(
    <Tab.Navigator
      initialRouteName="Libreria"
      tabBarOptions={{
        activeTintColor:"#2291b3",
        inactiveTintColor:"#060606",
        showLabel:true,
        labelStyle:{
            fontSize:12
        },
        style:{
            paddingBottom:5,
            backgroundColor:"#f3f3f1"
        }
      }}
    >   
    
    <Tab.Screen
      name = "Libreria"
      component={HomeScreen}
      options={{
          tabBarLabel:"Inicio",
          tabBarIcon:({color})=>(
          <Ionicons name={"home"} size={20} color={color}/>
          )
      }}
    />

    <Tab.Screen
      name = "Whishlist"
      component={Wishlist}
      options={{
          tabBarLabel:"Wishlist",
          tabBarIcon:({color})=>(
          <Ionicons name={"heart-circle"} size={25} color={color}/>
          )
      }}
    />

    
    <Tab.Screen
      name = "Carrito"
      component={Carrito}
      options={{
          tabBarLabel:"Carrito",
          tabBarIcon:({color})=>(<View>
          <Ionicons name={"cart"} size={20} color={color}/> 
          <Badge 
          status="error"
          value={carrito.cantidad}
          containerStyle={{ position: 'absolute', top: -4, right: 10 }}/>)
          </View>
          )
      }}
    />


    </Tab.Navigator>
  )
}