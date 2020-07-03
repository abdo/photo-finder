import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import screens from '../screens';

const Stack = createStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='UserList'
          component={screens.UserList}
          options={{
            headerTitle: 'User List',
          }}
        />
        <Stack.Screen
          name='UserPreview'
          component={screens.UserPreview}
          options={{
            headerTitle: 'User Preview',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
