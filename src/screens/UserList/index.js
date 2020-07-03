import { Button, Text, View } from 'react-native';
import React from 'react';

const UserListScreen = ({navigation}) => (
  <View>
    <Text>UserListScreen</Text>
    <Button title="Go to user" onPress={() => navigation.navigate('UserPreview')}></Button>
  </View>
);

export default UserListScreen;
