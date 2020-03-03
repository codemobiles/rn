import React, {Component} from 'react';
import {Image} from 'react-native';

import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import HomeScreen from './HomeScreen';
import RegisterScreen from './RegisterScreen';
import JSONFeedScreen from './JSONFeedScreen';
import CameraScreen from './CameraScreen';
import YoutubeScreen from './YoutubeScreen';

const jsonTabOp = {
  tabBarOptions: {activeTintColor: 'red'},
  tabBarLabel: 'Feed',
  tabBarIcon: ({focused}) => (
    <Image
      style={{
        height: 28,
        width: 28,
      }}
      resizeMode="contain"
      source={
        focused
          ? require('./assets/img/ic_profile_select.png')
          : require('./assets/img/ic_profile.png')
      }
    />
  ),
};

const cameraTabOp = {
  tabBarLabel: 'Camera',
  tabBarIcon: ({focused}) => (
    <Image
      style={{
        height: 28,
        width: 28,
      }}
      resizeMode="contain"
      source={
        focused
          ? require('./assets/img/ic_card_select.png')
          : require('./assets/img/ic_card.png')
      }
    />
  ),
};

const AuthenStack = createStackNavigator(
  {
    home: {screen: HomeScreen},
    register: {screen: RegisterScreen},
  },
  {
    initialRouteName: 'home',
  },
);

const TabScreens = createBottomTabNavigator(
  {
    json: {screen: JSONFeedScreen, navigationOptions: jsonTabOp},
    camera: {screen: CameraScreen, navigationOptions: cameraTabOp},
  },
  {
    initialRouteName: 'json',
  },
);

const AppStack = createStackNavigator(
  {
    tab: {screen: TabScreens},
  },
  {
    initialRouteName: 'tab',
  },
);

// HOC
export default createAppContainer(
  createSwitchNavigator(
    {
      AuthenScene: AuthenStack,
      AppScene: AppStack,
    },
    {
      initialRouteName: 'AuthenScene',
    },
  ),
);
