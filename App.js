
import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  ImageBackground,
  Text,
  ScrollView,
  View,
  StatusBar
} from 'react-native';

import {createBottomTabNavigator,createStackNavigator} from 'react-navigation'
import HomeScreen from './src/screens/HomeScreen/index'
import FavoritesScreen from './src/screens/FavoritesScreen/index'
import InfoScreen from './src/screens/InfoScreen/index'


console.disableYellowBox=true

const BottomTab = createBottomTabNavigator({
  Home:{
    screen: HomeScreen
  },
  Favorites:{
    screen:FavoritesScreen
  },

},{
  initialRouteName:"Home"
});

const Stack = createStackNavigator({
  BottomTab:{
    screen:BottomTab
  },
  Info:{
    screen:InfoScreen
  }
},{
  headerMode:'none',
  initialRouteName:"BottomTab"
}
)

export default class App extends Component {
  
  render() {
   
    return (
      <View style={{flex:1}}>
      <StatusBar hidden/>
      <Stack/>
      </View>
    );
  }
}
