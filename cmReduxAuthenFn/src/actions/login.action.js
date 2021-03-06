import {
  LOGIN_FETCHING,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT,
} from '../constants';
import AsyncStorage from '@react-native-community/async-storage';

export const setStateToFetching = () => ({
  type: LOGIN_FETCHING,
});

export const setStateToSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const setStateToFailed = payload => ({
  type: LOGIN_FAILED,
  payload,
});

export const login = ({username, password, navigation}) => {
  return async dispatch => {
    dispatch(setStateToFetching());

    let _regUsername = await AsyncStorage.getItem('username');
    let _regPassword = await AsyncStorage.getItem('password');
    if (_regUsername == username && _regPassword == password) {
      await AsyncStorage.setItem('already_logged_in', 'yes');
      dispatch(setStateToSuccess({result: 'ok', username}));
      navigation.navigate('AppScene');
    } else {
      dispatch(setStateToFailed('Error, invalid account'));
    }
    
  };
};

export const logout = ({navigation}) => {
  return async dispatch => {
    await AsyncStorage.removeItem('already_logged_in');
    dispatch({type: LOGOUT});
    navigation.navigate('AuthenScene');
  };
};
