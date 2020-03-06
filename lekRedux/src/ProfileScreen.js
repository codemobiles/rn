import React from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Avatar, Button} from 'react-native-elements';

const ProfileScreen = props => {
  const loginReducer = useSelector(({loginReducer}) => loginReducer);
  const dispatch = useDispatch();

  const {isError, result} = loginReducer;
  return (
    <ImageBackground
      source={require('./assets/img/bg.png')}
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={require('./assets/img/header_react_native.png')}
        resizeMode="contain"
        style={{height: 100, width: '100%'}}
      />
      <View
        style={{
          justifyContent: 'center',
          backgroundColor: '#FFF3',
          marginTop: 32,
          marginLeft: 32,
          marginRight: 32,
          borderRadius: 10,
          padding: 32,
        }}>
        <Avatar
          containerStyle={{alignSelf: 'center'}}
          size={100}
          rounded
          source={{
            uri:
              'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          }}
        />
        <View style={{margin: 16, alignSelf: 'center'}}>
          {/* {!isError && result && <Text>{JSON.stringify(result)}</Text>} */}
        </View>
        <Button
          // onPress={() => dispatch(loginActions.logout(props))}
          type="solid"
          title="Logout"
        />
      </View>
    </ImageBackground>
  );
};

export default ProfileScreen;
