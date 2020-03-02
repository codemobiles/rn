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
    <View
      style={{
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
      }}>
      <Icon name="user" size={30} />

      <Image
        source={require('./assets/img/avatar.png')}
        style={{height: 100, width: 100}}
      />

      <Image
        source={{uri: 'http://www.codemobiles.com/biz/img/banner_home.gif'}}
        style={{height: 100, width: 100}}
      />

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
    </View>
  );
};

export default HomeScreen;
