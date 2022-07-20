import { StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    width: '95%',
    height: 60,
    borderLeftWidth: 3,
    borderLeftColor: theme.colors.brand,
    borderRadius: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  containerCompany: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 10,
    fontFamily: theme.fonts.regular,
    color: theme.colors.text_secondary,
    paddingHorizontal: 20,
  },
  id: {
    paddingHorizontal: 20,
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: theme.fonts.medium,
    color: theme.colors.brand,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_primary,
  },
});
export default styles;
