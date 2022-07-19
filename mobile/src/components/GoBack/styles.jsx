import { StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 16,
    top: 35,
    flexDirection: 'row',
  },
  label: {
    color: theme.colors.text_secondary,
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 8,
  },
});
export default styles;
