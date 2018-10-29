
import React, { Component } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';
import FastImage from 'react-native-fast-image'
import ic_Home from '../../../assets/logo/ic_Home.png'
import ListImageContainer from '../../store'
import { Subscribe } from 'unstated';
import styles from './styles'

class HomeScreen extends Component {

  static navigationOptions = {
    tabBarLabel: "Home",
    title: 'Home',
    header: null,
    tabBarIcon: <Image source={ic_Home} style={{ width: 25, height: 25 }} />

  };


  constructor(props) {
    super(props);
    this.state = {
      isRefeshing: false,

    }
  }

  onRefresh(listState) {
    this.setState({
      isRefeshing: true,
    }, () => {
      listState.randomList_Data();
      this.setState({
        isRefeshing: false,
      })
    })
  }

  openInfoScreen(listState, item) {
    if (listState.setImg_Seclected({ isSelected: item.url })) {
      this.props.navigation.navigate("Info");
    }
    else {
      alert("ECS ECS")
    }
  }

  renderItem = (listState, item) => {
    return (
      <TouchableOpacity
        style={{ flex: 1, padding: 5, alignItems: 'center' }}
        onPress={() => this.openInfoScreen(listState, item)}>
        <FastImage
          style={{ height: 250, width: 150 }}
          source={{ uri: item.url }}
          key={item.url}
          resizeMethod="resize" />
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Subscribe to={[ListImageContainer]}>
          {listState =>
            <FlatList
              removeClippedSubviews = {true}
              disableVirtualization = {true}
              keyExtractor={item => item.url}
              refreshing={this.state.isRefeshing}
              numColumns={2}
              data={listState.getList_State().data}
              onRefresh={() => { this.onRefresh(listState) }}
              renderItem={({ item }) => this.renderItem(listState, item)}
              bounces={false}
            />
          }
        </Subscribe>
      </View>
    );
  }
}

export default HomeScreen  