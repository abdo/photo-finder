import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import { colors } from '../style/base';
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
        <Stack.Screen
          name='PhotoPreview'
          component={screens.PhotoPreview}
          options={{
            headerTitle: 'Photo Preview',
            headerStyle: {
              backgroundColor: colors.semiTransparent,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
