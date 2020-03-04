import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  TextInput,
  Text,
} from 'react-native';
import {ifIphoneX} from 'react-native-iphone-x-helper';

import QRCode from 'react-native-qrcode-svg';
const PATH_TO_LOGO = './assets/img/cmdev_icon.png';

const TabQRcode = () => {
  const [qrValue, setQRValue] = React.useState('');

  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <TextInput
        placeholder="QR Value"
        onChangeText={text => setQRValue(text)}
      />

      <ScrollView
        contentContainerStyle={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <QRCode value={qrValue != '' ? qrValue : 'www.codemobiles.com'} />
      </ScrollView>
    </View>
  );
};

export default TabQRcode;
