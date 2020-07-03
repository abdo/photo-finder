import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import Navigator from './src/routes/navigator';

export default function App() {
  return (
    <Navigator/>
  );
}
