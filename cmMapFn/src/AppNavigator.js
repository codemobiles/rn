import React, {Component} from 'react';
import {Image} from 'react-native';

import TabMapScreen from './TabMapScreen';
import TabGPSScreen from './TabGPSScreen';

import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

const op1 = {
  tabBarLabel: 'Map',
  tabBarIcon: ({focused}) => (
    <Image
      style={{
        height: 28,
        width: 28,
      }}
      resizeMode="contain"
      source={
        focused
          ? require('./assets/img/ic_map_press.png')
          : require('./assets/img/ic_map_normal.png')
      }
    />
  ),
};

const op2 = {
  tabBarLabel: 'GPS',
  tabBarIcon: ({focused}) => (
    <Image
      style={{
        height: 28,
        width: 28,
      }}
      resizeMode="contain"
      source={
        focused
          ? require('./assets/img/ic_location_press.png')
          : require('./assets/img/ic_location_normal.png')
      }
    />
  ),
};

const AppStack = createBottomTabNavigator(
  {
    tab1: {screen: TabMapScreen, navigationOptions: () => op1},
    tab2: {screen: TabGPSScreen, navigationOptions: () => op2},
  },
  {
    initialRouteName: 'tab1',
  },
);

export default createAppContainer(AppStack);
