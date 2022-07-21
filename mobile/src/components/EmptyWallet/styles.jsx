import { StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: theme.colors.background,
    borderRadius: 20,
    top: 200,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 150,
  },
  image: {
    width: 180,
    height: 140,
    opacity: 0.8,
  },
  title: {
    marginTop: 20,
    fontSize: 14,
    fontFamily: theme.fonts.regular,
    color: theme.colors.text_primary,
  },
  button: {
    height: 60,
    width: '65%',
    borderWidth: 1,
    borderColor: theme.colors.brand,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    marginTop: 40,
  },
  buttonTitle: {
    fontSize: 14,
    color: theme.colors.brand,
    fontWeight: 'bold',
    fontFamily: theme.fonts.medium,
  },
});
export default styles;
