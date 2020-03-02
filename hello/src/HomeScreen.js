import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  Platform,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';

// import AsyncStorage from '@react-native-community/async-storage';

import {Button as ElButton} from 'react-native-elements';

const HomeScreen = () => {
  const [account, setAccount] = useState({username: '', password: ''});

  return (
    <ImageBackground source={require('./assets/img/bg.png')} style={{flex: 1}}>
      <View
        style={{
          backgroundColor: '#FFF3',
          marginTop: 32,
          marginLeft: 32,
          marginRight: 32,
          borderRadius: 10,
          paddingLeft: 32,
          paddingRight: 32,
          paddingTop: 32,
        }}>
        {/* Username section */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name="user" size={35} color="#000A" />
          <Input
            keyboardType="email-address"
            onChangeText={text => setAccount({...account, username: text})}
            style={{marginLeft: 16, flex: 1}}
            placeholder="Username"
          />
        </View>

        {/* Password section */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name="lock" size={35} color="#000A" />
          <Input
            keyboardType="email-address"
            onChangeText={text => setAccount({...account, password: text})}
            style={{marginLeft: 16, flex: 1}}
            placeholder="Password"
          />
        </View>

        <View style={{marginTop: 32}}>
          <Button title="Login" />
        </View>

        <View style={{height: 8}} />
        <ElButton style={{marginTop: 8}} title="Register" />
        <View style={{height: 16}} />
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
