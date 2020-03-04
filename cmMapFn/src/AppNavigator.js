import React, { Component } from "react";
import {
  Image,
} from "react-native";

import TabMapScreen from "./TabMapScreen";
import TabGPSScreen from "./TabGPSScreen";

import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from 'react-navigation-tabs';



export default createAppContainer(createBottomTabNavigator({
  tab1: {screen: TabMapScreen, navigationOptions: {
    tabBarLabel: "Map",
    tabBarIcon: ({ focused }) => (
      <Image
        style={{
          height: 28,
          width: 28
        }}
        resizeMode="contain"
        source={
          focused
            ? require("./assets/img/ic_map_press.png")
            : require("./assets/img/ic_map_normal.png")
        }
      />
    )
  }},
  tab2: {screen: TabGPSScreen,   navigationOptions: {
    tabBarLabel: "GPS",
    tabBarIcon: ({ focused }) => (
      <Image
        style={{
          height: 28,
          width: 28
        }}
        resizeMode="contain"
        source={
          focused
            ? require("./assets/img/ic_location_press.png")
            : require("./assets/img/ic_location_normal.png")
        }
      />
    )
  }},
}, {
  initialRouteName:"tab1"
}));
