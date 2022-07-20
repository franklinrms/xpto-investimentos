import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    backgroundColor: theme.colors.background,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    position: 'absolute',
    bottom: getBottomSpace(),
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 60,
  },
});
export default styles;
