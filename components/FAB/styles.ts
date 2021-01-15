import {StyleSheet} from 'react-native';
import colors from '../../colors';

export default StyleSheet.create({
  wrapper: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 25,
    right: 20,
  },
});
