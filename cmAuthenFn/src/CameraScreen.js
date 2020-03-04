import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  NativeModules,
  Alert,
  Button,
} from 'react-native';
import {ifIphoneX} from 'react-native-iphone-x-helper';

import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios';

const CameraScreen = () => {
  return (
    <ImageBackground
      source={require('./assets/img/bg.png')}
      style={{flex: 1, flexDirection: 'column', width: '100%'}}>
      <Image
        style={{marginLeft: 20, marginRight: 20, height: 100, width: null}}
        resizeMode="contain"
        source={require('./assets/img/banner_react_qr_camera.png')}
      />
    </ImageBackground>
  );
};

export default CameraScreen;
