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

const JSONFeedScreen = () => {
  return (
    <ImageBackground style={{flex: 1}} source={require('./assets/img/bg.png')}>
      <FlatList
        data={['Angular', 'React', 'Vue']}
        renderItem={({index, item}) => (
          <Text>
            {index}. {item}
          </Text>
        )}
        keyExtractor={item => item}
      />
    </ImageBackground>
  );
};

export default JSONFeedScreen;
