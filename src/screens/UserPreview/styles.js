import { StyleSheet } from 'react-native';
import { colors } from '../../style/base';

const styles = StyleSheet.create({
  username: {
    fontSize: 24,
    marginBottom: 20,
  },
  userInfoContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  userImage: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },
  loadingIndicator: {
    marginTop: 40,
  },
  noPhotosText: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  photo: {
    width: 200,
    height: 200,
    margin: 20,
  },
});

export default styles;
