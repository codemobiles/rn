import React from 'react';
import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import HomeScreen from './src/HomeScreen';
import RegisterScreen from './src/RegisterScreen';
import JSONFeedScreen from './src/JSONFeedScreen';
import AppNavigator from './src/AppNavigator';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView />
      <AppNavigator />
    </View>
  );
};

export default App;
