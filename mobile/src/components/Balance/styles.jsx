import { StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.brand,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 250,
    position: 'absolute',
    top: 0,
  },
  title: {
    fontSize: 12,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_on_brand_color,
  },
  value: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_on_brand_color,
    marginTop: 4,
  },
});
export default styles;
