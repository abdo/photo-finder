import * as actionTypes from './actionTypes';

const INITIAL_STATE = {
  UserList: [],
  PhotoList: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_USERS:
      return {
        ...state,
        UserList: action.payload,
      };

    case actionTypes.GET_USER_PHOTOS:
      return {
        ...state,
        PhotoList: action.payload,
      };

    default:
      return state;
  }
};
