import {combineReducers} from 'redux';
import loginReducer from './login.reducer';
import jsonReducer from './json.reducer';

export default combineReducers({loginReducer, jsonReducer});
