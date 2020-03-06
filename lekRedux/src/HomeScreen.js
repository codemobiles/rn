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
import {Input, Divider, Badge} from 'react-native-elements';

import AsyncStorage from '@react-native-community/async-storage';

import {Button as ElButton} from 'react-native-elements';

const HomeScreen = props => {
  const [account, setAccount] = useState({username: '', password: ''});

  const checkLogin = async () => {
    let _already_logged_in = await AsyncStorage.getItem('already_logged_in');
    if (_already_logged_in && _already_logged_in == 'yes') {
      let _regUsername = await AsyncStorage.getItem('username');
      let _regPassword = await AsyncStorage.getItem('password');
      setAccount({username: _regUsername, password: _regPassword});
    }
  };

  React.useEffect(() => {
    checkLogin();
  }, []);

  const submit = async () => {
    let _regUsername = await AsyncStorage.getItem('username');
    let _regPassword = await AsyncStorage.getItem('password');
    const {username, password} = account;
    if (_regUsername == username && _regPassword == password) {
      await AsyncStorage.setItem('already_logged_in', 'yes');
      props.navigation.navigate('AppScene');
    } else {
      alert('Authentication failed!');
    }
  };

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
          <Icon name="user" size={35} type="ionicon" color="#517fa4" reverse />
          <Input
            autoCapitalize="none"
            value={account.username}
            keyboardType="email-address"
            onChangeText={text => setAccount({...account, username: text})}
            style={{marginLeft: 16, flex: 1}}
            placeholder="Username"
          />
        </View>

        {/* Password section */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icon name="lock" size={35} type="ionicon" color="#517fa4" />
          <Input
            value={account.password}
            secureTextEntry
            onChangeText={text => setAccount({...account, password: text})}
            style={{marginLeft: 16, flex: 1}}
            placeholder="Password"
          />
        </View>

        <View style={{marginTop: 32}}>
          <Button title="Login" onPress={submit} />
        </View>

        <ElButton
          type="outline"
          style={{marginTop: 8}}
          title="Register"
          onPress={() => props.navigation.navigate('register')}
          titleStyle={{color: '#FFF'}}
          containerStyle={{marginTop: 10}}
        />
        <View style={{height: 16}} />
      </View>

      <Image
        source={require('./assets/img/header_react_native.png')}
        style={{height: 80, width: '100%', marginTop: 16}}
        resizeMode="contain"
      />
    </ImageBackground>
  );
};

export default HomeScreen;

HomeScreen.navigationOptions = ({navigation}) => {
  return {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#119CED',
    },
    headerTintColor: '#FFFFFF',
    headerTitleStyle: {color: '#fff'},
    headerBackTitle: ' ',
    headerRight: () => (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => alert('www.codemobiles.com')}
        style={{padding: 10}}>
        <Icon
          name="address-card"
          size={20}
          color="#fff"
          style={{
            height: 24,
            width: 24,
          }}
        />
      </TouchableOpacity>
    ),
  };
};
