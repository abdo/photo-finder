import {
  Button,
  Image,
  ScrollView,
  Text,
  TextInput,
  View,
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';

import { colors } from '../../style/base';
import * as mainActions from '../../store/main/actions';
import styles from './styles';

const UserListScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const dispatch = useDispatch();

  const UserList = useSelector((state) => state.main.UserList);
  const isGettingUserList = useSelector(
    (state) => state.request.calls.getUsers?.loading,
  );

  const getUsers = () => {
    dispatch(mainActions.getUsers({ searchQuery }));
  };

  return (
    <ScrollView>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder='Type here...'
          onChangeText={(query) => setSearchQuery(query.trim())}
        />
        <View style={styles.searchButton}>
          <Button
            title='Search unsplash users!'
            color={colors.primary}
            disabled={!searchQuery}
            onPress={getUsers}
          ></Button>
        </View>
      </View>
      {isGettingUserList ? (
        <ActivityIndicator size='large' style={styles.loadingIndicator} />
      ) : (
        UserList.map((user) => (
          <View style={styles.userContainer} key={user.username}>
            <View>
              <Text>{user.name}</Text>
              <Text>Username: {user.username}</Text>
            </View>
            <Image
              style={{ width: 80, height: 80 }}
              source={{ uri: user.userImage }}
            />
          </View>
        ))
      )}
    </ScrollView>
  );
};

export default UserListScreen;
