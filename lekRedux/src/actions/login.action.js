import {LOGIN_FETCHING, LOGIN_FAILED, LOGIN_SUCCESS} from '../constants';

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
