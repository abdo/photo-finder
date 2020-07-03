import { ImageBackground } from 'react-native';
import React from 'react';

const PhotoPreviewScreen = ({ route }) => {
  const photo = route.params.photo;

  return (
    <ImageBackground
      source={{ uri: photo.url }}
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default PhotoPreviewScreen;
