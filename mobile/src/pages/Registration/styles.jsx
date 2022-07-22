import { StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 60,
    width: '85%',
    padding: 12,
    marginBottom: 15,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: theme.colors.stroke,
    color: theme.colors.text_primary,
    fontFamily: theme.fonts.regular,
  },
  button: {
    height: 60,
    width: '85%',
    backgroundColor: theme.colors.brand,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
  buttonDisabled: {
    opacity: 0.7,
    height: 60,
    width: '85%',
    backgroundColor: theme.colors.brand,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
  buttonTitle: {
    fontSize: 14,
    color: theme.colors.text_primary,
    fontWeight: 'bold',
    fontFamily: theme.fonts.medium,
  },
  image: {
    width: 130,
    height: 50,
    marginTop: 80,
  },
  register: {
    marginBottom: 30,
    fontSize: 14,
    color: theme.colors.text_on_brand_color,
    fontFamily: theme.fonts.regular,
  },
});

export default styles;
