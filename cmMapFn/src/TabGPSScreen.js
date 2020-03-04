import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform,
  PermissionsAndroid,
} from 'react-native';

// https://github.com/react-community/react-native-maps/blob/master/docs/mapview.md
import MapView, {Marker, AnimatedRegion} from 'react-native-maps';
const LATITUDE = 29.95539;
const LONGITUDE = 78.07513;
const LATITUDE_DELTA = 0.009;
const LONGITUDE_DELTA = 0.009;

import SegmentedControlTab from 'react-native-segmented-control-tab';

const TabGPSScreen = () => {
  let watchId = null
  const [mapType, setMapType] = useState('standard');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [latitude, setLatitude] = useState(LATITUDE);
  const [longitude, setLongitude] = useState(LONGITUDE);
  const [coordinate, setCoordinate] = useState(
    new AnimatedRegion({
      latitude: LATITUDE,
      longitude: LONGITUDE,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    }),
  );

  useEffect(() => {
    if (Platform.OS == 'android') {
      requestLocationPermission();
    } else {
      startLocationTracking();
    }
    return ()=>{
      console.log("Unmounted", JSON.stringify(watchId))
      navigator && navigator.geolocation.clearWatch(watchId)
    }
  }, []);

  function startLocationTracking() {
    navigator.geolocation = require('@react-native-community/geolocation');
    watchId = navigator.geolocation.watchPosition(
      position => {
        console.log(JSON.stringify(position));

        coordinate.timing(position.coords).start(); // the coordinate is made from AnimatedRegion
        const {latitude, longitude} = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      error => {
        console.log(JSON.stringify(error));
      },
      {
        enableHighAccuracy: true,
        maximumAge: 500,
        timeout: 5000,
      },
    );
    }

  async function requestLocationPermission() {
    const chckLocationPermission = PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    if (chckLocationPermission === PermissionsAndroid.RESULTS.GRANTED) {
      startLocationTracking();
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Cool Location App required Location permission',
            message:
              'We required Location permission in order to get device location ' +
              'Please grant us.',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          startLocationTracking();
        } else {
          alert("You don't have access for the location");
        }
      } catch (err) {
        alert(err);
      }
    }
  }

  function changeMapType(index) {
    setSelectedIndex(index);

    if (index == 0) {
      setMapType('standard');
    } else if (index == 1) {
      setMapType('satellite');
    } else {
      setMapType('hybrid');
    }
  }

  return (
    <View style={styles.container}>
      <MapView
        mapType={mapType}
        style={styles.map}
        showUserLocation
        followUserLocation
        showsMyLocationButton
        loadingEnabled
        region={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}>
        <Marker.Animated coordinate={coordinate}>
          <Image
            source={require('./assets/img/logo.png')}
            style={{
              height: 60,
              width: 60,
              borderColor: 'white',
              borderRadius: 20,
              borderWidth: 2,
            }}
          />
        </Marker.Animated>
      </MapView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.bubble, styles.button]}>
          <Text style={styles.bottomBarContent}>
            {parseFloat(latitude).toFixed(3)},{parseFloat(longitude).toFixed(3)}{' '}
            °
          </Text>
        </TouchableOpacity>
      </View>

      <SegmentedControlTab
        selectedIndex={selectedIndex}
        values={['Standard', 'Sattile', 'Hybrid']}
        onTabPress={index => changeMapType(index)}
      />
      <Image
        resizeMode="contain"
        style={{
          width: '100%',
          height: 100,
          backgroundColor: '#000000',
          marginTop: 10,
        }}
        source={require('./assets/img/banner_react_map.png')}
      />
    </View>
  );
};

export default TabGPSScreen;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bubble: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },
});
