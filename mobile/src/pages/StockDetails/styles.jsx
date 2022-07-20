import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
  },
  containerCompany: {
    marginTop: 100,
    marginBottom: 25,
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
