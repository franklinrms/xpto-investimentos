import { StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: theme.colors.surface_secondary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 14,
    color: theme.colors.text_primary,
    fontFamily: theme.fonts.medium,
  },
  button: {
    height: 60,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    marginTop: 100,
    backgroundColor: theme.colors.sell,
  },
  buttonTitle: {
    fontSize: 18,
    color: theme.colors.text_primary,
    fontWeight: 'bold',
    fontFamily: theme.fonts.medium,
  },
});
export default styles;
