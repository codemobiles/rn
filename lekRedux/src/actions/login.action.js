import {LOGIN_FETCHING, LOGIN_SUCCESS, LOGIN_FAILED} from '../constants';

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

export const login = value => {
  return dispatch => {
      
  };
};
