import {FEED_FETCHING, FEED_FAILED, FEED_SUCCESS} from '../constants';
import axios from 'axios';

export const setStateToFetching = () => ({
  type: FEED_FETCHING,
});

export const setStateToFailed = payload => ({
  type: FEED_FAILED,
  payload,
});

export const setStateToSuccess = payload => ({
  type: FEED_SUCCESS,
  payload,
});

export const feed = () => {
  return dispatch => {
    dispatch(setStateToFetching());
    doFeed(dispatch);
  };
};

const doFeed = async dispatch => {
  console.log('JSON Created');

  let url = 'http://codemobiles.com/adhoc/youtubes/index_new.php';
  let regUsername = 'admin'; // await AsyncStorage.getItem('username')
  let regPassword = 'password'; // await AsyncStorage.getItem('password')
  let data = `username=${regUsername}&password=${regPassword}&type=foods`;

  let result = await axios.post(url, data);
  // Destructuring
  const {youtubes} = result.data;
  dispatch(setStateToSuccess(youtubes));
};
