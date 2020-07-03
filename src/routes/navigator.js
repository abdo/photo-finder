import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import screens from '../screens';

const Stack = createStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="UserList" component={screens.UserList} />
        <Stack.Screen name="UserPreview" component={screens.UserPreview} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
