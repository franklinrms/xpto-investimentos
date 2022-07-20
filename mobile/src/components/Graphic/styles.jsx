import { StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    height: '40%',
    alignItems: 'center',
  },
  button: {
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 15,
    // marginTop: -1,

  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: theme.fonts.medium,
  },
});
export default styles;
