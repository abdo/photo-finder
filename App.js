import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import React from 'react';

import Navigator from './src/routes/navigator';
import store from './src/store/createStore';

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
