import { combineReducers } from 'redux';
import main from './main/reducer';
import request from './request/reducer';

export default combineReducers({
  main,
  request,
});
