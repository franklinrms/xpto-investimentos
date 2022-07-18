import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    backgroundColor: theme.colors.surface_primary,
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: getBottomSpace(),
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
});
export default styles;
