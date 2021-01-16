import {StyleSheet, Platform} from 'react-native';

import colors from '../../colors';
import dimensions from '../../dimensions';

const style = StyleSheet.create({
  modal: {padding: 0, margin: 0},
  backdrop: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    height: dimensions.height,
    width: dimensions.width,
    zIndex: 0,
    top: 0,
    left: 0,
  },
  wrapper: {
    marginHorizontal: dimensions.padding * 2,
    marginVertical: dimensions.padding * 3,
    backgroundColor: colors.white,
    borderRadius: 4,
    flexDirection: 'column',
  },
  header: {
    flexDirection: 'row',
    paddingLeft: dimensions.padding,
    alignItems: 'center',
    borderBottomColor: colors.grey,
    borderBottomWidth: 1,
  },
  title: {flex: 1},
  titleText: {
    fontWeight: Platform.OS === 'android' ? 'bold' : '800',
    color: colors.primaryLight,
  },
  close: {
    height: dimensions.padding * 3,
    paddingHorizontal: dimensions.padding,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeDisabled: {opacity: 0.3},
  loader: {marginLeft: dimensions.padding},
  content: {
    padding: dimensions.padding,
    flexDirection: 'column',
  },
  noPadding: {padding: 0},
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: dimensions.padding,
    borderTopColor: colors.grey,
    borderTopWidth: 1,
  },
});

export default style;
