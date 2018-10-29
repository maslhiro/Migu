
import React, { Component } from 'react';
import {
  Text,
  Button,
  Image,
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';
import FastImage from 'react-native-fast-image'
import ic_Pin from '../../../assets/logo/ic_Pin.png'
import ic_Home from '../../../assets/logo/ic_Home.png'
import ListImageContainer from '../../store'
import { Subscribe } from 'unstated';
// import styles from './styles '
// import {setWallpaper} from 'react-native-wallpaper-manager'

class InfoScreen extends Component {

  static navigationOptions = {
    tabBarLabel: "Info",
    title: 'Info',
    header: null,
    tabBarIcon: <Image source={ic_Home} style={{ width: 25, height: 25 }} />

  };


  render() {

    return (
      <Subscribe to={[ListImageContainer]}>
        {listState =>
          <View style={styles.container}>
            <FastImage
              source={{uri:listState.getList_State().isSelected}}
              style={{ height: 500, width: 280 }} />

            <Text />

            <View style={{ width: 200, flexDirection: 'row', justifyContent: "space-between", alignItems: 'center' }}>
              <Text />
              <Button
                title="Set"
                onPress={() => { }}
              />


              <TouchableOpacity
                style={{
                  borderRadius: 25,
                  width: 50,
                  height: 50,
                  backgroundColor: 'yellow',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onPress={() => { }}>
                <Image
                  source={ic_Pin}
                  style={{
                    height: 25,
                    width: 25
                  }} />
              </TouchableOpacity>
            </View>


          </View>
        }
      </Subscribe>


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

export default InfoScreen 