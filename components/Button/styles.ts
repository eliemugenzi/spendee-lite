import {StyleSheet} from 'react-native';
import colors from '../../colors';
import dimensions from '../../dimensions';

const styleSheet = StyleSheet.create({
  button: {
    backgroundColor: colors.white,
    height: dimensions.inputHeight,
    paddingHorizontal: dimensions.padding,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallButton: {
    height: dimensions.inputHeight * 0.65,
  },
  block: {
    width: '100%',
    alignItems: 'center',
  },
  danger: {backgroundColor: colors.danger},
  primary: {backgroundColor: colors.primary},
  success: {backgroundColor: colors.light},
  transparent: {backgroundColor: colors.light},
  disabled: {
    opacity: 0.3,
  },
  indicator: {
    position: 'absolute',
    marginLeft: '40%',
  },
  text: {
    lineHeight: dimensions.inputHeight,
    fontWeight: '600',
    color: colors.primary,
    fontSize: dimensions.padding,
    opacity: 1,
    alignSelf: 'center',
  },
  smallText: {
    lineHeight: dimensions.inputHeight * 0.65,
    fontSize: dimensions.padding * 0.65,
  },
  textLight: {
    color: colors.white,
  },
  textLoading: {opacity: 0.05},
  iconLeft: {
    marginRight: dimensions.padding / 2,
  },
  iconRight: {
    marginRight: 0,
    marginLeft: dimensions.padding / 2,
  },
  iconSpacer: {
    flex: 1,
  },
});

export default styleSheet;
