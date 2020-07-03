import * as actionTypes from './actionTypes';

const INITIAL_STATE = {
  UserList: [],
  PhotoList: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.TEST:
      return {
        ...state,
      };

    default:
      return state;
  }
};
