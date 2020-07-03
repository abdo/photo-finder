import * as actionTypes from './actionTypes';

const INITIAL_STATE = {
  calls: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.START:
      return {
        ...state,
        calls: {
          ...state.calls,
          [action.requestId]: {
            ...state.calls[action.requestId],
            success: false,
            failure: false,
            error: false,
            loading: true,
          },
        },
      };
    case actionTypes.SUCCEED:
      return {
        ...state,
        calls: {
          ...state.calls,
          [action.requestId]: {
            ...state.calls[action.requestId],
            success: true,
            failure: false,
            error: false,
            loading: false,
          },
        },
      };
    case actionTypes.FAIL:
      return {
        ...state,
        calls: {
          ...state.calls,
          [action.requestId]: {
            ...state.calls[action.requestId],
            success: false,
            failure: true,
            error: action.error || true,
            loading: false,
          },
        },
      };
    default:
      return state;
  }
};
