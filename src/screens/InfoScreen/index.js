
import React, { Component } from 'react';
import {
  Text,
  Button,
  View,
} from 'react-native';
import styles from './styles'

import { createImageProgress } from 'react-native-image-progress';
import FastImage from 'react-native-fast-image'
const Image = createImageProgress(FastImage);

import ListImageContainer from '../../store'
import { showAlert_Warning, showAlert_Error, showAlert_Success } from '../../component/Alert'

import { Subscribe } from 'unstated';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import { setWallpaper } from 'react-native-wallpaper-manager'

class InfoScreen extends Component {

  constructor(props) {
    super(props)

  }

  setWallpaper_Screen = (uri) => {
    setWallpaper({ uri: uri },
      (res) => {
        this.setState(
          {
            isLoading: false
          }, () => {
            if (res.status == 'success') {
              showAlert_Success("Đặt Hình Nền Thành Công :3")
            }
            else {
              showAlert_Error()
            }
          })
      }
    )
  }

  setFavorites_Img = (listState) => {
    switch (listState.setImg_ListFavo({ uri: listState.getList_State().isSelected })) {
      case 1:
        {
          showAlert_Success("Đã Thêm Ảnh Vào Danh Sách Yêu Thích !")
          break
        }
      case 0:
        {
          showAlert_Error()
          break
        }
      case -1:
        {
          showAlert_Warning("Bạn Đã Lưu Ảnh Này Rồi Nhé !")
          break
        }
    }
  }

  render() {

    return (
      <Subscribe to={[ListImageContainer]}>
        {listState =>

          <View style={styles.container}>
            <Image
              source={{ uri: listState.getList_State().isSelected }}
              style={styles.background} />

            <ActionButton
              fixNativeFeedbackRadius

              buttonColor="rgba(231,76,60,1)">
              <ActionButton.Item
                fixNativeFeedbackRadius
                buttonColor='#9b59b6'
                title="Đặt Làm Hình Nền"
                onPress={() => this.setWallpaper_Screen(listState.getList_State().isSelected)}>
                <Icon name="ios-color-wand" style={styles.actionButtonIcon} />
              </ActionButton.Item>
              <ActionButton.Item
                fixNativeFeedbackRadius
                buttonColor='#3498db'
                title="Yêu Thích"
                onPress={() => { this.setFavorites_Img(listState) }}>
                <Icon name="ios-heart" style={styles.actionButtonIcon} />
              </ActionButton.Item>
              {/* <ActionButton.Item
                fixNativeFeedbackRadius
                buttonColor='#1abc9c'
                title="Lưu Ảnh"
                onPress={() => { }}>
                <Icon name="ios-download" style={styles.actionButtonIcon} />
              </ActionButton.Item>  */}
            </ActionButton>

            {/* <Button title="tesst" onPress={() => this.setFavorites_Img(listState)} /> */}
          </View>
        }
      </Subscribe>


    );
  }
}

export default InfoScreen 