import { StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 60,
    width: '85%',
    backgroundColor: theme.colors.brand,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    marginTop: 50,
  },
  buttonTitle: {
    fontSize: 18,
    color: theme.colors.text_primary,
    fontWeight: 'bold',
    fontFamily: theme.fonts.medium,
  },
  title: {
    marginTop: 30,
    marginBottom: 20,
    width: '85%',
    fontSize: 14,
    color: theme.colors.text_primary,
    fontFamily: theme.fonts.medium,
    textAlign: 'left',
  },
  inputValue: {
    alignItems: 'center',
    width: '85%',
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  input: {
    width: '50%',
    padding: 12,
    color: theme.colors.brand,
    fontFamily: theme.fonts.medium,
    fontSize: 24,
    fontWeight: 'bold',
  },
  value: {
    color: theme.colors.brand,
    fontFamily: theme.fonts.medium,
    fontSize: 24,
    fontWeight: 'bold',
  },
});
export default styles;
