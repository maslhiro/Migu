import React, { Component } from 'react';
import {
  FlatList,
  View,
  TouchableOpacity
} from 'react-native';
import ic_Heart from '../../assets/logo/ic_Heart.png'
import styles from './styles'

import { createImageProgress } from 'react-native-image-progress';
import FastImage from 'react-native-fast-image'
import {showAlert_Warning,showAlert_Error,showAlert_Success} from '../../component/Alert'

import ListImageContainer from '../../store'
import { Subscribe } from 'unstated';
const Image = createImageProgress(FastImage);

class FavoriteScreen extends Component {

  static navigationOptions = {
    tabBarLabel: "Favorites",
    title: 'Favorites',
    header: null,
    tabBarIcon: <FastImage source={ic_Heart} style={{ width: 25, height: 25 }} />

  };

  constructor() {
    super();

  }

  
  openInfoScreen(listState, item) {
    if (listState.setImg_Seclected({ isSelected: item.uri })) {
      this.props.navigation.navigate("Info");
    }
    else {
     showAlert_Error()
    }
  }

  renderItem = (listState, item) => {
    return (
      <TouchableOpacity
        style={{ flex: 1, padding: 5, alignItems: 'center' }}
        onPress={() => this.openInfoScreen(listState, item)}>
        <Image
          style={{ height: 250, width: 150 }}
          source={{ uri: item.uri }}
          key={item.uri}
          resizeMethod="resize"
        />

      </TouchableOpacity>
    );
  }


  render() {

    return (
      <View style={styles.container}>
        <Subscribe to={[ListImageContainer]}>
          {listState =>
            <View>
              <FlatList
                removeClippedSubviews={true}
                disableVirtualization={true}
                keyExtractor={item => item.uri}
                numColumns={2}
                data={listState.getList_State().listFavo}
                renderItem={({ item }) => this.renderItem(listState, item)}
                bounces={false}
              />
            </View>
          }
        </Subscribe>
       
      </View>

    );
  }
}

export default FavoriteScreen