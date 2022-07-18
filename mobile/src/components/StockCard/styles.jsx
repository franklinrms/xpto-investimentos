import { StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    width: 90,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    borderRadius: 8,
    backgroundColor: theme.colors.surface_primary,
    margin: 5,
  },
  name: {
    fontSize: 10,
    fontFamily: theme.fonts.regular,
    color: theme.colors.text_secondary,
  },
  id: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: theme.fonts.medium,
    color: theme.colors.brand,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_primary,
  },
});

export default styles;
