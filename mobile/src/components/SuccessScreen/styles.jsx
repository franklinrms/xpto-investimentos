import { StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  check: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.brand,
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 60,
  },
  title: {
    fontSize: 18,
    fontFamily: theme.fonts.regular,
    color: theme.colors.text_primary,
  },
});
export default styles;
