
import React, { Component } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';

import FastImage from 'react-native-fast-image'
import data from '../../data/data'
import ic_Home from '../../../assets/logo/ic_Home.png'
// import styles from './styles '
// import {setWallpaper} from 'react-native-wallpaper-manager'

class HomeScreen extends Component {

  static navigationOptions = {
    tabBarLabel : "Home",
    title : 'Home',
    header: null,
    tabBarIcon : <Image source={ic_Home} style={{width:25,height:25}}/>

 };

 constructor(props){
   super(props);
   this.state={
     data:data.slice(0,10),
     isRefeshing: false
    }
 }

 onRefresh(){
    this.setState({
      isRefeshing: true
    })

    this.setState({
      data:reviceData(10),
      isRefeshing: false
    })
 }

 openInfoScreen(item){
  this.props.navigation.navigate("Info",
  {
    data: item.data
  });
 }

  render() {
    console.log(reviceData(10))
    return (
      
      <View style={styles.container}>
        <FlatList 
        refreshing={this.state.isRefeshing}
        numColumns={2}
        data={this.state.data}
        onRefresh={()=>{this.onRefresh()}}
        renderItem={({item})=>{
          // console.log(item.key)
          return(
            <TouchableOpacity 
              style={{flex:1,padding:5,alignItems:'center'}}
              onPress={()=>this.openInfoScreen(item)}>
               <FastImage style={{height:250,width:150}} source={item.data} key={item.key}/>  
            </TouchableOpacity>
      )}}/>
      </View>

   
    );
  }
}

function reviceData(num){
  let arr =  Array.from({length: num}, () => Math.floor(Math.random() * data.length));
  let arrReturn = [] 
  arr.map((item)=>{
    arrReturn.push({
      key:item,
      data:data[item].data
    })
  })

  return arrReturn  
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

export default  HomeScreen 