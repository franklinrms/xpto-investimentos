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
});

export default styles;
