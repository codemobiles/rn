import React, {Component, useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  TextInput,
} from 'react-native';
import {ifIphoneX} from 'react-native-iphone-x-helper';

import QRCode from 'react-native-qrcode-svg';
const PATH_TO_LOGO = './assets/img/cmdev_icon.png';

const TabQRcode = () => {
  const [qrValue, setQrValue] = useState('');
  return (
    <ImageBackground
      source={require('./assets/img/gradient_bg.png')}
      resizeMode={'stretch'}
      style={styles.container}>
      <Image
        resizeMode={'contain'}
        style={{
          width: '100%',
          height: 120,
          ...ifIphoneX({marginTop: 30}, {marginTop: 0}),
          padding: 0,
        }}
        source={require('./assets/img/header_react_native.png')}
      />

      <TextInput
        placeholder="QRCode Value"
        style={{
          fontSize: 18,
          height: 40,
          textAlign: 'center',
          borderWidth: 1,
          borderColor: '#fff3',
          borderRadius: 5,
          marginLeft: 32,
          marginRight: 32,
          marginBottom: 32,
          marginTop: 32,
        }}
        onChangeText={text => setQrValue(text)}
      />
      <ScrollView
        contentContainerStyle={{
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <CMQRCodeClass value={qrValue} />
        <CMQRCode value={qrValue} logo={require(PATH_TO_LOGO)} logoSize={30} />
        <CMQRCode
          value={qrValue}
          logo={require(PATH_TO_LOGO)}
          logoMargin={10}
        />
        <CMQRCode
          value={qrValue}
          logo={require(PATH_TO_LOGO)}
          logoBorderRadius={15}
        />

        {[1, 2, 3, 4].map((item, index) => (
          <CMQRCode key={index.toString()} value={qrValue} />
        ))}
      </ScrollView>
    </ImageBackground>
  );
};

const CMQRCode = props => {
  const {value} = props;
  return (
    <View style={{margin: 8}}>
      <QRCode {...props} value={value != '' ? value : 'www.codemobiles.com'} />
    </View>
  );
};

class CMQRCodeClass extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {value} = this.props;
    return (
      <View style={{margin: 8}}>
        <QRCode
          {...this.props}
          value={value != '' ? value : 'www.codemobiles.com'}
        />
      </View>
    );
  }
}

export default TabQRcode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'stretch',
    paddingTop: 15,
    paddingBottom: 15,
  },
  section: {
    marginTop: 15,
    marginBottom: 15,
  },
});
