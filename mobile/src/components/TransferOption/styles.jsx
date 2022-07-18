import { StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 40,
    paddingVertical: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: theme.fonts.medium,
  },
});
export default styles;
