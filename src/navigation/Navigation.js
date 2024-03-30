import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/FontAwesome5';

import FavoriteScreen from '../screens/Favorite';
import PokedexNavigation from './PokedexNavigation';
import AccountScreen from '../screens/Account';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator initialRouteName="Pokedex">
        <Tab.Screen name='Favorite' component={FavoriteScreen} options={{
            headerTitle: "Preferits",
            headerTitleAlign: 'center',
            tabBarLabel: "Preferits",
            tabBarIcon: ({ color, size }) => (
                <Icon name='heart' color={color} size={size} />
            )
        }} />
        <Tab.Screen name='Pokedex' component={PokedexNavigation} options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: () => renderPokeball()
        }} />
        <Tab.Screen name='Account' component={AccountScreen} options={{
            headerTitle: "Compte",
            headerTitleAlign: 'center',
            tabBarLabel: "Compte",
            tabBarIcon: ({ color, size }) => (
                <Icon name='user' color={color} size={size} />
            )
        }} />
    </Tab.Navigator>
  )
}

function renderPokeball() {
    return (
        <Image source={require('../assets/pokeball.png')} style={{ width: 50, height: 50 }} />
    )
}
