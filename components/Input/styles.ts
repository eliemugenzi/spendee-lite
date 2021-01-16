import {StyleSheet} from 'react-native';
import colors from '../../colors';
import dimensions from '../../dimensions';

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    backgroundColor: colors.white,
    marginBottom: dimensions.padding * 0.6,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 4,
  },
  wrapperLast: {
    marginBottom: dimensions.padding / 2,
  },
  wrapperLight: {
    backgroundColor: colors.light,
  },
  wrapperDisabled: {
    opacity: 0.3,
  },
  inputRow: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    paddingRight: dimensions.padding,
    paddingLeft: dimensions.padding,
  },
  inputCol: {
    flex: 1,
  },
  textInput: {
    width: '100%',
    height: dimensions.inputHeight,
    color: colors.dark,
    fontSize: dimensions.inputFontSize,
    paddingTop: 0,
    paddingBottom: 0,
    paddingVertical: 0,
    paddingLeft: 0,
  },
  textInputNH: {
    width: '100%',
    color: colors.dark,
    fontSize: dimensions.inputFontSize,
    paddingTop: 0,
    paddingBottom: 0,
    paddingVertical: 0,
    paddingLeft: 0,
  },
  textInputMultiline: {
    paddingTop: dimensions.inputHeight * 0.3,
  },
  textInputLight: {
    color: colors.white,
  },
  placeholder: {
    width: '100%',
    position: 'absolute',
    top: 0,
    right: 0,
    color: colors.primary,
    lineHeight: dimensions.inputHeight - 1,
  },
  placeholderHeight: {
    color: colors.light,
  },
  label: {
    minHeight: dimensions.inputFontSize,
    lineHeight: dimensions.inputFontSize,
    fontSize: dimensions.inputFontSize - 2,
    color: colors.dark,
    paddingLeft: dimensions.padding,
  },
  labelMain: {
    height: dimensions.inputFontSize,
  },
  labelList: {
    color: colors.white,
  },
  info: {
    color: colors.dark,
  },
  infoLight: {
    color: colors.white,
  },
  success: {
    color: colors.info,
  },
  error: {
    color: colors.danger,
  },
  line: {
    height: 1,
    backgroundColor: colors.primary,
  },
  lineLight: {
    backgroundColor: colors.light,
  },
  lineFocused: {
    backgroundColor: colors.dark,
  },
  lineLightFocused: {
    backgroundColor: colors.white,
  },
  lineError: {
    backgroundColor: colors.danger,
  },
});

export default styles;
