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

// import AsyncStorage from '@react-native-community/async-storage';

import {Button as ElButton} from 'react-native-elements';

// Sub component
CMEntry = props => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Icon
        name={props.icon}
        size={35}
        type="ionicon"
        color="#517fa4"
        reverse
      />
      <Input
        secureTextEntry={props.isPassword}
        keyboardType="email-address"
        style={{marginLeft: 16, flex: 1}}
        placeholder={props.hint}
      />
    </View>
  );
};

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
        <CMEntry hint="Username" icon="user" />

        {/* Password section */}
        <CMEntry hint="Password" icon="lock" isPassword />

        <View style={{marginTop: 32}}>
          <Button title="Register" />
        </View>

        <ElButton
          type="outline"
          style={{marginTop: 8}}
          title="Cancel"
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
