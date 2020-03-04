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

  const CMQRCode = props => {
    const {value} = props
    return (
      <View style={{margin: 8}}>
        <QRCode {...props} value={value != "" ? value : "www.codemobiles.com"} />
      </View>
    );
  };


  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <TextInput
        placeholder="QR Value"
        onChangeText={text => setQRValue(text)}
      />

      <ScrollView
        contentContainerStyle={{
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => (
          <CMQRCode
            style={{marginTop: 16}}
            key={item.toString()}
            value={qrValue != '' ? qrValue : 'www.codemobiles.com'}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default TabQRcode;
