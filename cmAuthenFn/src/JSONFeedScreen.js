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
  <TouchableOpacity onPress={() => alert('1234')} style={styles.listCard}>
    {/* Top section */}
    <View style={styles.listCardView}>
      {/* Avatar */}
      <Image
        source={require('./assets/img/cmdev_icon.png')}
        style={styles.listAvatar}
      />
      {/* Title and subtitle */}
      <View style={{flexDirection: 'column', flex: 1}}>
        <Text style={{fontWeight: 'bold'}}>Title</Text>
        <Text>Subtitle</Text>
      </View>
    </View>
  </TouchableOpacity>
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
  list_header: {
    width: '100%',
    height: 100,
  },
  listCard: {
    overflow: 'hidden',
    flexDirection: 'column',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 0,
  },
  listCardView: {
    flexDirection: 'row',
    marginBottom: 16,
    height: 45,
    alignItems: 'center',
  },
  listAvatar: {
    width: 45,
    height: '100%',
    marginRight: 16,
  },
  listTitleSubtitleContainer: {
    flexDirection: 'column',
    marginRight: 16,
    flex: 1,
  },
  listTitle: {
    fontWeight: '700',
  },
  listSubTitle: {
    fontWeight: '100',
  },
  listYoutbeImage: {
    width: '100%',
    height: 190,
  },
});
