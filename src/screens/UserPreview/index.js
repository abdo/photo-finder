import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect } from 'react';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import * as mainActions from '../../store/main/actions';

const UserPreviewScreen = ({ route }) => {
  const dispatch = useDispatch();

  const user = route.params.user;

  useEffect(() => {
    dispatch(mainActions.getUserPhotos({ username: user?.username }));
  }, []);

  const PhotoList = useSelector((state) => state.main.PhotoList);
  const isGettingPhotoList = useSelector(
    (state) => state.request.calls.getUserPhotos?.loading,
  );

  return (
    <ScrollView>
      <View style={styles.userInfoContainer}>
        <Text style={styles.username}>{user.username}</Text>
        <Image style={styles.userImage} source={{ uri: user.userImage }} />

        {isGettingPhotoList ? (
          <ActivityIndicator size='large' style={styles.loadingIndicator} />
        ) : PhotoList.length === '0' ? (
          <Text style={styles.noPhotosText}>No users found</Text>
        ) : (
          PhotoList.map((photo) => (
            <TouchableOpacity key={photo.url}>
              <Image style={styles.photo} source={{ uri: photo.url }} />
            </TouchableOpacity>
          ))
        )}
      </View>
    </ScrollView>
  );
};

export default UserPreviewScreen;
