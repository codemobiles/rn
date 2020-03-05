import React, {useState, useEffect, useRef} from 'react';

import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';

const ScannerScreen = props => {
  const scannerRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  const showScanner = () => {
    return (
      <View style={{flex: 1, backgroundColor: 'black'}}>
        {isReady ? (
          <QRCodeScanner
            ref={scannerRef}
            showMarker
            style={{flex: 1}}
            bottomContent={
              <TouchableOpacity
                onPress={() => scannerRef.current.reactivate()}
                style={styles.buttonTouchable}>
                <Text style={styles.buttonText}>SCAN</Text>
              </TouchableOpacity>
            }
          />
        ) : (
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 25, fontWeight: 'bold', color: '#FFF'}}>
              Loading...
            </Text>
          </View>
        )}
      </View>
    );
  };

  return <View style={styles.container}>{showScanner(props, scannerRef)}</View>;
};

export default ScannerScreen;

ScannerScreen.navigationOptions = ({navigation}) => {
  return {
    title: 'Scanner',
    headerStyle: {
      backgroundColor: '#3F51B5',
    },
    headerTintColor: '#FFFFFF',
    headerTitleStyle: {color: '#fff'},
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  buttonText: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#FFF',
  },
  buttonTouchable: {
    height: 50,
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fa4a4d',
  },
});
