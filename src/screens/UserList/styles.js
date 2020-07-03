import { StyleSheet } from 'react-native';
import { colors } from '../../style/base';

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  searchButton: {
    width: '80%',
    marginTop: 40,
  },
  loadingIndicator: {
    marginTop: 40,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    margin: 20,
    height: 200,
    borderWidth: 2,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
});

export default styles;
