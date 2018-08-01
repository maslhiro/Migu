
import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  View
} from 'react-native';
import PropTypes from 'prop-types'
import { withNavigationFocus } from 'react-navigation-is-focused-hoc'
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

  shouldComponentUpdate(nextProps) {
    // Update only once after the screen disappears
    if (this.props.isFocused && !nextProps.isFocused) {
      return true
    }

    // Don't update if the screen is not focused
    if (!this.props.isFocused && !nextProps.isFocused) {
      return false
    }

    // Update the screen if its re-enter
    return !this.props.isFocused && nextProps.isFocused
  }

  render() {

    return (
      
      <View style={styles.container}>
        <Text>FavoriteScreen</Text>
      </View>

   
    );
  }
}

const  styles = StyleSheet.create({
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
 
})

export default  withNavigationFocus(FavoriteScreen,true)