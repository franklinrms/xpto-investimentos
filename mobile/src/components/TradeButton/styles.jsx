import { StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  button: {
    height: 60,
    width: '85%',
    backgroundColor: theme.colors.brand,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    marginTop: 100,
  },
  title: {
    fontSize: 18,
    color: theme.colors.text_on_brand_color,
    fontWeight: 'bold',
    fontFamily: theme.fonts.medium,
  },
});
export default styles;
