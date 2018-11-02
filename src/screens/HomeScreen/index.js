
import React, { Component } from 'react';
import {
  FlatList,
  View,
  TouchableOpacity
} from 'react-native';

import { createImageProgress } from 'react-native-image-progress';
import FastImage from 'react-native-fast-image'
import ListImageContainer from '../../store'
import { Subscribe } from 'unstated';
import SweetAlert from 'react-native-sweet-alert';
import styles from './styles'
import ic_Home from '../../assets/logo/ic_Home.png'

const Image = createImageProgress(FastImage);

class HomeScreen extends Component {

  static navigationOptions = {
    tabBarLabel: "Home",
    title: 'Home',
    header: null,
    tabBarIcon: <FastImage source={ic_Home} style={{ width: 25, height: 25 }} />

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
    if (listState.setImg_Seclected({ isSelected: item.uri })) {
      this.props.navigation.navigate("Info");
    }
    else {
      SweetAlert.showAlert({
        type: 'normal', // error, success, warning, progress (Android Only).
        title: 'Opp!',
        contentText: 'Có Lỗi Kết Nối Bạn Vui Lòng Thử Lại Nhé !',
      },
        acceptButtonCallback => console.log(acceptButtonCallback)
      )
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
            <FlatList
              removeClippedSubviews={true}
              disableVirtualization={true}
              keyExtractor={item => item.uri}
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