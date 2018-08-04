
import React, { Component } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types'
import { withNavigationFocus } from 'react-navigation-is-focused-hoc'
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
  static propTypes = {
    isFocused: PropTypes.bool.isRequired,
 
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.isFocused && nextProps.isFocused) {
      // screen enter (refresh data, update ui ...)
    }
    if (this.props.isFocused && !nextProps.isFocused) {
      // screen exit
    }
  }

  shouldComponentUpdate(nextProps,nextState) {
    // console.log("This "+this.props.isFocused)
    // console.log("Next "+nextProps.isFocused)
    // console.log(this.props.isFocused && nextProps.isFocused)
    
    // Update only once after the screen disappears
    if (this.props.isFocused && !nextProps.isFocused) {
      return true
    }

    // Don't update if the screen is not focused
    if (!this.props.isFocused && !nextProps.isFocused) {
      return false
    }

    // Update the screen if its re-enter
    return this.props.isFocused && nextProps.isFocused
  }


 constructor(props){
   super(props);
   this.state={
     data:data,
     isRefeshing: false,
  
    }
 }

 onRefresh(){
    this.setState({
      isRefeshing: true,
    
     
    })

    this.setState({
      data:reviceData(data.length),
      isRefeshing: false,
     
    })
 }

 openInfoScreen(item){
  this.props.navigation.navigate("Info",
  {
    data: item.data
  });
 }

  renderItem = (item) => {
    return (
      <TouchableOpacity 
      style={{flex:1,padding:5,alignItems:'center'}}
      onPress={()=>this.openInfoScreen(item)}>
       <FastImage 
       style={{height:250,width:150}} 
       source={item.data} 
       key={item.key}
       
       resizeMethod="resize"/>  
    </TouchableOpacity>
    );
  }

  render() {
    console.log("========================")
    this.state.data.map(item=>console.log(item.key +"/"+ item.data))
    return (
      
      <View style={styles.container}>
        <FlatList 
        removeClippedSubviews 
        disableVirtualization
        keyExtractor={item => item.key} 
        refreshing={this.state.isRefeshing}
        numColumns={2}
        data={this.state.data}
        onRefresh={()=>{this.onRefresh()}}
        renderItem={({item})=>this.renderItem(item)}
        bounces={false}
    
        />


      </View>

   
    );
  }
}

function reviceData(num){
  // let arr =  Array.from({length: num}, () => Math.floor(Math.random() * data.length));
  // let arrReturn = [] ;
  // arr.map((item)=>{
  //   if(item)
  //   arrReturn.push({
  //     key:item,
  //     data:data[item-1].data
  //   })
  // })

  return data.sort((a, b)=>{return (0.5 - Math.random())});  
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

export default  withNavigationFocus(HomeScreen,true) 