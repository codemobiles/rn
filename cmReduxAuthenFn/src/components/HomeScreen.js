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
import {useSelector, useDispatch} from 'react-redux';
import * as loginActions from './../actions/login.action';
import AsyncStorage from '@react-native-community/async-storage';

import {Button as ElButton} from 'react-native-elements';

const HomeScreen = props => {
  const [account, setAccount] = useState({username: '', password: ''});
  const dispatch = useDispatch();
  const loginReducer = useSelector(({loginReducer}) => loginReducer);

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
    dispatch(loginActions.login({...account, ...props}));
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

        {/* Error Alert  */}
        {loginReducer.isError && (
          <View
            style={{
              width: null,
              backgroundColor: '#f2dede',
              borderColor: '#ebccd1',
              borderRadius: 5,
              padding: 8,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 16,
            }}>
            <Text style={{color: '#a94442', fontSize: 15}}>
              {loginReducer.result}
            </Text>
          </View>
        )}

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
