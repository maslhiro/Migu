
import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  View
} from 'react-native';

import ic_Heart from '../../../assets/logo/ic_Heart.png'
// import styles from './styles'
// import {setWallpaper} from 'react-native-wallpaper-manager'

class FavoriteScreen extends Component {
 
  static navigationOptions = {
    tabBarLabel : "Favorites",
    title : 'Favorites',
    header: null,
    tabBarIcon : <Image source={ic_Heart} style={{width:25,height:25}}/>

 };
  

  render() {

    return (
      
      <View style={styles.container}>
        <Text>FavoriteScreen</Text>
      </View>

   
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
    padding: 5,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
 
});

export default  FavoriteScreen