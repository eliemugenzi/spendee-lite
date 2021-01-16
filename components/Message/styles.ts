import {StyleSheet} from 'react-native';
import colors from '../../colors';
import dimensions from '../../dimensions';

const styleSheet = StyleSheet.create({
  wrapper: {
    padding: dimensions.padding,
    paddingLeft: dimensions.padding * 0.75,
    backgroundColor: colors.white,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: colors.dark,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.35,
    shadowRadius: 2.62,
    elevation: 4,
    borderLeftWidth: dimensions.padding * 0.25,
    borderLeftColor: colors.white,
  },
  wapperWarning: {borderLeftColor: colors.warning},
  wapperError: {borderLeftColor: colors.danger},
  wapperSuccess: {borderLeftColor: colors.success},
  ribbon: {
    borderRadius: 0,
    shadowOpacity: 0,
    borderBottomWidth: 1,
    borderBottomColor: colors.danger,
  },
  inner: {
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    fontSize: dimensions.padding,
    fontWeight: '600',
    color: colors.dark,
  },
  message: {
    fontSize: dimensions.padding * 0.8,
    color: colors.danger,
  },
  action: {
    borderLeftColor: colors.grey,
    borderLeftWidth: 1,
    paddingLeft: dimensions.padding,
    marginLeft: dimensions.padding,
  },
  actionTitle: {
    fontSize: dimensions.padding,
    fontWeight: '600',
    color: colors.primaryLight,
  },
  successMessage: {
    color: colors.primaryLight,
  },
  ribbonSuccess: {
    borderRadius: 0,
    shadowOpacity: 0,
    borderBottomWidth: 1,
    borderBottomColor: colors.success,
  },
  warningMessage: {
    color: colors.warning,
  },
});

export default styleSheet;
