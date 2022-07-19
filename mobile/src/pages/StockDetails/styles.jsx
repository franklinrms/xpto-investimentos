import { StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
  },
  containerCompany: {
    top: 100,
    width: '85%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_on_brand_color,
  },
  subTitle: {
    fontSize: 12,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_secondary,
  },
});
export default styles;
