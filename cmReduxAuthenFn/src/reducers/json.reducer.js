import {FEED_FETCHING, FEED_FAILED, FEED_SUCCESS} from '../constants';

const initialState = {
  isFetching: false,
  isError: false,
  result: null,
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case FEED_FETCHING:
      return {...state, isFetching: true, isError: false, result: null};
    case FEED_FAILED:
      return {...state, isFetching: false, isError: true, result: null};
    case FEED_SUCCESS:
      return {...state, isFetching: false, isError: false, result: payload};
    default:
      return state;
  }
};
