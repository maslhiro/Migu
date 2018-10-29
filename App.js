
import React, { Component } from 'react';
import {
  View,
  StatusBar
} from 'react-native';
import { Provider } from 'unstated';
import RouteConfig from './src/config/RouteConfig'

class App extends Component {
  
  render() {
    return (
      <Provider>
        <View style={{flex:1}}>
        <StatusBar hidden/>
        <RouteConfig/>
        </View>
      </Provider>
    );
  }
}

export default App