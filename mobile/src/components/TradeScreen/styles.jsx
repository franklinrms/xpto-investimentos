import { StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerCompany: {
    marginTop: 20,
    width: '85%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  label: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: theme.fonts.medium,
    color: theme.colors.brand,
  },
  value: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_on_brand_color,
  },
  title: {
    marginVertical: 20,
    width: '85%',
    fontSize: 14,
    color: theme.colors.text_primary,
    fontFamily: theme.fonts.medium,
    textAlign: 'left',
  },
  details: {
    textAlign: 'right',
    width: '85%',
    fontSize: 14,
    color: theme.colors.text_primary,
    fontFamily: theme.fonts.medium,
  },
  total: {
    marginVertical: 30,
    // textAlign: 'left',
    // width: '85%',
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.text_primary,
    fontFamily: theme.fonts.medium,
  },
  input: {
    textAlign: 'left',
    width: '85%',
    padding: 12,
    color: theme.colors.text_primary,
    fontFamily: theme.fonts.medium,
    fontSize: 18,
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderBottomColor: theme.colors.stroke,
    marginBottom: 15,
  },
  button: {
    height: 60,
    width: '85%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    marginTop: 30,
  },
  buttonTitle: {
    fontSize: 18,
    color: theme.colors.text_primary,
    fontWeight: 'bold',
    fontFamily: theme.fonts.medium,
  },
});
export default styles;
