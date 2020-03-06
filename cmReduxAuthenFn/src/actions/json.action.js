import {FEED_FETCHING, FEED_SUCCESS, FEED_FAILED} from '../constants';

export const setStateToFetching = () => ({
  type: FEED_FETCHING,
});

export const setStateToSuccess = payload => ({
  type: FEED_SUCCESS,
  payload,
});

export const setStateToFailed = payload => ({
  type: FEED_FAILED,
  payload,
});

export const feed = () => {
  return dispatch => {
    dispatch(setStateToFetching());
  };
};
