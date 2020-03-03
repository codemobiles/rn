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

const JSONFeedScreen = () => {
  const [dataArray, setDataArray] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  const loadData = async () => {
    setIsFetching(true);
    console.log('JSON Created');

    let url = 'http://codemobiles.com/adhoc/youtubes/index_new.php';
    let regUsername = 'admin'; // await AsyncStorage.getItem('username')
    let regPassword = 'password'; // await AsyncStorage.getItem('password')
    let data = `username=${regUsername}&password=${regPassword}&type=foods`;

    let result = await axios.post(url, data);

    // Destructuring
    const {youtubes} = result.data;
    setDataArray(youtubes);

    setTimeout(() => {
      setIsFetching(false);
    }, 1000);
  };

  useEffect(async () => {
    // code called when component is updated
    await loadData();
  }, []);

  return (
    <ImageBackground
      style={styles.container}
      source={require('./assets/img/bg.png')}>
      <FlatList
        refreshing={isFetching}
        onRefresh={() => loadData()}
        data={dataArray ? dataArray : []}
        renderItem={renderRow}
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
