import {LOGIN_FETCHING, LOGIN_FAILED, LOGIN_SUCCESS} from '../constants';
import AsyncStorage from '@react-native-community/async-storage';

export const setStateToFetching = () => ({
  type: LOGIN_FETCHING,
});

export const setStateToFailed = payload => ({
  type: LOGIN_FAILED,
  payload,
});

export const setStateToSuccess = payload => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const login = ({username, password, navigation})=>{

   return dispatch=>{
       dispatch(setStateToFetching())
      

       let _regUsername = await AsyncStorage.getItem('username');
       let _regPassword = await AsyncStorage.getItem('password');
       if (_regUsername == username && _regPassword == password) {
         await AsyncStorage.setItem('already_logged_in', 'yes');
         dispatch(setStateToSuccess({result: 'ok', username}));
         navigation.navigate('AppScene');
       } else {
         dispatch(setStateToFailed('Error, invalid account'));
       }
   }
  
}
