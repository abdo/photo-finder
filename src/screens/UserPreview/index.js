import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';

import { colors } from '../../style/base';
import * as mainActions from '../../store/main/actions';
import styles from './styles';

const UserPreviewScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();

  const user = route.params.user;

  useEffect(() => {
    dispatch(mainActions.getUserPhotos({ username: user?.username }));
  }, []);

  const PhotoList = useSelector((state) => state.main.PhotoList);
  const isGettingPhotoList = useSelector(
    (state) => state.request.calls.getUserPhotos?.loading,
  );

  const onPressPhoto = ({ photo }) => {
    navigation.navigate('PhotoPreview', { photo });
  };

  return (
    <ScrollView>
      <View style={styles.userInfoContainer}>
        <Text style={styles.username}>{user?.username}</Text>
        <Image style={styles.userImage} source={{ uri: user?.userImage }} />

        {isGettingPhotoList ? (
          <ActivityIndicator
            size='large'
            style={styles.loadingIndicator}
            color={colors.primary}
          />
        ) : PhotoList.length === 0 ? (
          <Text style={styles.noPhotosText}>No photos found</Text>
        ) : (
          PhotoList.map((photo) => (
            <TouchableOpacity
              key={photo.url}
              onPress={() => onPressPhoto({ photo })}
            >
              <Image style={styles.photo} source={{ uri: photo.url }} />
            </TouchableOpacity>
          ))
        )}
      </View>
    </ScrollView>
  );
};

export default UserPreviewScreen;
