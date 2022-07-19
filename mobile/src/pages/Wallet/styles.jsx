import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  modal: {
    backgroundColor: theme.colors.surface_primary,
    paddingBottom: getBottomSpace() + 16,
  },
  indicator: {
    backgroundColor: theme.colors.text_primary,
    padding: 2,
    marginTop: 4,
  },
});
export default styles;
