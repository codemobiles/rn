import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {ifIphoneX} from 'react-native-iphone-x-helper';

const renderRow = ({item, index}) => (
  <Text>
    {index + 1}. {item}
  </Text>
);

const JSONFeedScreen = () => {
  return (
    <ImageBackground
      style={styles.container}
      source={require('./assets/img/bg.png')}>
      <FlatList
        data={['Angular', 'React', 'Vue']}
        renderItem={renderRow}
        keyExtractor={item => item}
      />
    </ImageBackground>
  );
};

export default JSONFeedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
