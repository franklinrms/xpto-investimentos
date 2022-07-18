import { StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    marginTop: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: theme.colors.text_on_brand_color,
    fontFamily: theme.fonts.medium,
    fontSize: 14,
    marginLeft: 4,
  },
});
export default styles;
