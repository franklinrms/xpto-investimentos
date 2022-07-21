import { StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: theme.colors.background,
    borderRadius: 20,
    top: 200,
  },
  title: {
    margin: 25,
    fontSize: 14,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_on_brand_color,
  },
  stocks: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default styles;
