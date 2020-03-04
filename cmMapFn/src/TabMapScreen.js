import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  Platform,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import CustomCallout from './CustomCallout';
import openMap from 'react-native-open-maps';
const {width, height} = Dimensions.get('window');

import Axios from 'axios';

const ASPECT_RATIO = width / height;
// 13.6970244,100.5130343 codemobiles office
const LATITUDE = 13.7853726;
const LONGITUDE = 100.5714823;
const LATITUDE_DELTA = 0.0022;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const TabMapScreen = () => {
  const [markers, setMarkers] = useState([]);
  const [region, setRegion] = useState({
    latitude: LATITUDE,
    longitude: LONGITUDE,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });

  useEffect(() => {
      loadMarkers()
  }, [])

  async function loadMarkers(){
    let result = await Axios.get(
      'http://192.168.0.107:5000/position'
    );          
    
    let tmpMarkers = []
    result.data.forEach(coordinate=>{ 
      tmpMarkers = [...tmpMarkers, {coordinate, key: coordinate.id}];
    })    
    setMarkers(tmpMarkers)
  }

  async function addMarker(coordinate) {
    setRegion({...region, ...coordinate});
    setMarkers([...markers, {coordinate, key: JSON.stringify(coordinate)}]);

    debugger
    console.log(markers)

    let result = await Axios.post(
      'http://192.168.0.107:5000/record_position',
      coordinate,
    );
    console.log(JSON.stringify(result));
  }


  function onClickCallout({latitude, longitude}){
    openMap({query: `${latitude}, ${longitude}`, provider: 'google'});
  };

  return (
    <View style={styles.container}>
      <MapView
        onPress={e => addMarker(e.nativeEvent.coordinate)}
        initialRegion={region}
        style={styles.map}
        mapType="standard" // NORMAL, SATELLITE, HYBRID
      >
        {markers.map(({key, coordinate}) => (
          <Marker 
          onCalloutPress={() => onClickCallout(coordinate)}
          key={key} coordinate={coordinate}>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('./assets/img/cmdev_icon.png')}
                style={{
                  height: 30,
                  width: 30,
                  borderColor: 'white',
                  borderRadius: 15,
                  borderWidth: 2,
                }}
              />
              <Text
                style={{
                  color: '#FFF',
                  fontSize: 12,
                  backgroundColor: '#0007',
                  borderRadius: 3,
                }}>
                {coordinate.latitude.toFixed(2)}°,{' '}
                {coordinate.longitude.toFixed(2)}°{' '}
              </Text>
            </View>

            <MapView.Callout tooltip style={styles.customView}>
              <CustomCallout>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                  }}>
                  {/** Showing image in android is not possible now (Lib. Bug) */}
                  {Platform.OS == 'ios' ? (
                    <Image
                      resizeMode="cover"
                      source={require('./assets/img/cmdev_icon.png')}
                      style={{height: 20, width: 20, marginRight: 8}}
                    />
                  ) : null}

                  <Text style={{fontWeight: 'bold'}}>Pos: </Text>
                  <Text>
                    {parseFloat(coordinate.latitude).toFixed(2)} °,{' '}
                    {parseFloat(coordinate.longitude).toFixed(2)} °
                  </Text>
                </TouchableOpacity>
              </CustomCallout>
            </MapView.Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

export default TabMapScreen;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    height: '100%',
    width: '100%',
  },
  banner: {
    height: 80,
    width: '100%',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  customView: {
    width: Platform.OS == 'ios' ? 190 : 160,
    height: 100,
  },
});