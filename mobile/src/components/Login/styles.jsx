import { StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    width: '85%',
  },
  input: {
    height: 60,
    width: '100%',
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.stroke,
    color: theme.colors.text_primary,
    fontFamily: theme.fonts.regular,
  },
  button: {
    height: 60,
    width: '100%',
    backgroundColor: theme.colors.brand,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  buttonDisabled: {
    opacity: 0.7,
    height: 60,
    width: '100%',
    backgroundColor: theme.colors.brand,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  buttonTitle: {
    fontSize: 14,
    color: theme.colors.text_primary,
    fontWeight: 'bold',
    fontFamily: theme.fonts.medium,
  },
});

export default styles;
