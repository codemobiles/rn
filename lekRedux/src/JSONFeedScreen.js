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
import {useDispatch, useSelector} from 'react-redux';
import * as jsonActions from './actions/json.action';

const renderRow = ({item, index, navigation}) => (
  <TouchableOpacity
    style={styles.listCard}
    onPress={() => navigation.navigate('youtube', {item})}>
    {/* Top section - Row */}
    <View style={styles.listCardView}>
      {/* Avatar */}
      <Image source={{uri: item.avatar_image}} style={styles.listAvatar} />
      {/* Title and subtitle */}
      <View style={{flexDirection: 'column', flex: 1}}>
        <Text style={{fontWeight: 'bold'}}>{item.title}</Text>
        <Text>{item.subtitle}</Text>
      </View>
    </View>

    {/* Bottom section */}
    <Image
      resizeMode="cover"
      source={{
        uri: item.youtube_image,
      }}
      style={styles.listYoutbeImage}
    />
  </TouchableOpacity>
);

renderHeader = () => (
  <Image
    source={require('./assets/img/header_react_native.png')}
    resizeMode="contain"
    style={{height: 100, width: '100%'}}
  />
);

const JSONFeedScreen = props => {
  const dispatch = useDispatch();
  const jsonReducer = useSelector(({jsonReducer}) => jsonReducer);
  const loginReducer = useSelector(({loginReducer}) => loginReducer);

  useEffect(() => {
    dispatch(jsonActions.feed());
  }, []);

  return (
    <ImageBackground
      style={styles.container}
      source={require('./assets/img/bg.png')}>
      <FlatList
        refreshing={jsonReducer.isFetching}
        ListHeaderComponent={renderHeader}
        onRefresh={() => dispatch(jsonActions.feed())}
        data={jsonReducer.result ? jsonReducer.result : []}
        renderItem={({item, index}) =>
          renderRow({item, index, navigation: props.navigation})
        }
        keyExtractor={item => item.id}
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
