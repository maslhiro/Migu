
import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  View
} from 'react-native';

import data from './src/data/data'
// import {setWallpaper} from 'react-native-wallpaper-manager'

export default class App extends Component {

  // componentDidMount(){
  //   setWallpaper(icX, (res)=> console.log(res));
  // }

  

  render() {
    console.log(data.slice(0,10))
    return (
      
      <View style={styles.container}>
        <FlatList 
        data={data.slice(0,10)}
       
        renderItem={({item})=>{
          console.log(item.key)
          return(
         <Image style={{height:100,width:100}} source={item.data} key={item.key}/>)
      
      }}/>
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
