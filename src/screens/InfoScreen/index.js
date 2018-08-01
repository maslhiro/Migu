
import React, { Component } from 'react';
import {
  Text,
  Button,
  Image,
  StyleSheet,
  View
} from 'react-native';

import FastImage from 'react-native-fast-image'

import ic_Home from '../../../assets/logo/ic_Home.png'
// import styles from './styles '
// import {setWallpaper} from 'react-native-wallpaper-manager'

class InfoScreen extends Component {

  static navigationOptions = {
    tabBarLabel : "Info",
    title : 'Info',
    header: null,
    tabBarIcon : <Image source={ic_Home} style={{width:25,height:25}}/>

 };


  render() {
    // console.log("DATA : "+this.props.navigation.getParam("data"))
    return (
      
      <View style={styles.container}>
      <FastImage 
        source={this.props.navigation.getParam("data")}
        style={{height:500,width:280}}/>

      <Text/>

      <View style={{width:200}}>
      <Button 
        title="Set" 
        onPress={()=>{}}
        />
      </View>
      </View>

   
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10,
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

export default  InfoScreen 