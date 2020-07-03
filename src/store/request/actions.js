import * as actionTypes from './actionTypes';

export const start = (requestId) => ({
  type: actionTypes.START,
  requestId,
});

export const succeed = (requestId) => ({
  type: actionTypes.SUCCEED,
  requestId,
});

export const fail = (requestId, error) => ({
  type: actionTypes.FAIL,
  requestId,
  error,
});
