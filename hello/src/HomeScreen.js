import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import AsyncStorage from '@react-native-community/async-storage';

import {Button} from 'react-native-elements';

const HomeScreen = () => {
  const [account, setAccount] = useState({username: '', password: ''});

  return (
    <ImageBackground source={require('./assets/img/bg.png')} style={{flex: 1}}>
      <View
        style={{
          height: 300,
          backgroundColor: '#FFF3',
          marginTop: 32,
          marginLeft: 32,
          marginRight: 32,
        }}></View>

      <TextInput
        placeholder="Username"
        onChangeText={text => setAccount({...account, username: text})}
      />
      <TextInput
        placeholder="Password"
        onChangeText={text => setAccount({...account, password: text})}
      />
      <Button title="RUN" />
      <Text>{JSON.stringify(account)}</Text>
    </ImageBackground>
  );
};

export default HomeScreen;
