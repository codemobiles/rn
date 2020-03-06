import React from 'react';
import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import AppNavigator from './src/components/AppNavigator';

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
