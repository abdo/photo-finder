import { Button, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import * as mainActions from '../../store/main/actions';
import { useDispatch } from 'react-redux';

const UserListScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(mainActions.getUsers({ searchQuery: 'ali' }));
  }, []);

  return (
    <View>
      <Text>UserListScreen</Text>
    </View>
  );
};

export default UserListScreen;
