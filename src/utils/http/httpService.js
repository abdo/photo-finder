import axios from 'axios';

import * as requestActions from '../../store/request/actions';
import store from '../../store/createStore';

const http = {
  get: async (...args) => request('get', args),
  post: async (...args) => request('post', args),
  put: async (...args) => request('put', args),
  patch: async (...args) => request('patch', args),
  delete: async (...args) => request('delete', args),
};

export default http;

const request = (type, args) => {
  const [config, ...httpArgs] = args;
  const { requestId, fullResponse } = config;
  store.dispatch(requestActions.start(requestId));

  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios[type](...httpArgs);
      store.dispatch(requestActions.succeed(requestId));
      const result = fullResponse ? response : response.data;
      resolve(result);
    } catch (error) {
      const response = error?.response;
      const code = response?.status;
      const statusText = response?.statusText;
      const internalCode = response?.data?.error_code;
      const errorMessage = {
        message: 'An error happened, please try again',
        ...response?.data,
      };

      const errorDesc = {
        ...response,
        ...errorMessage,
        internalCode,
        code,
        statusText,
      };
      store.dispatch(requestActions.fail(requestId, errorDesc));

      reject(errorDesc);
    }
  });
};
