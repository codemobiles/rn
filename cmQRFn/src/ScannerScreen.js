import React, {useState, useEffect, useRef} from 'react';

import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';

const ScannerScreen = (props) => {
  const [isReady, setIsReady] = useState(false);
  const scannerRef = useRef(null)

  
  // component did mounted
  useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 3000);
  }, []);


const success = (e)=>{
  let callback = props.navigation.getParam("onResult")
  callback(e.data)
  props.navigation.goBack()
}

const showScanner = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <QRCodeScanner
        ref={scannerRef}
        showMarker
        style={{flex: 1}}
        onRead={(e) => success(e)}
        bottomContent={
          <TouchableOpacity
            onPress={()=>scannerRef.current.reactivate()}
            style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>SCAN</Text>
          </TouchableOpacity>
        }
      />
    </View>
  );
}

  return (
    <View style={styles.container}>
      {isReady ? (
        showScanner(props, scannerRef)
      ) : (
        <Text
          style={{
            flex: 1,
            backgroundColor: 'black',
            color: 'white',
            textAlign: 'center',
            textAlignVertical: 'center',
          }}>
          Loading...
        </Text>
      )}
    </View>
  );
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
