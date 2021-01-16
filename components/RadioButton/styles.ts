import {StyleSheet} from 'react-native';
import colors from '../../colors';
import dimensions from '../../dimensions';

const styles = StyleSheet.create({
  disabled: {
    opacity: 0.3,
  },
  buttonCircleInner: {
    backgroundColor: colors.dark,
    height: dimensions.padding / 2,
    width: dimensions.padding / 2,
    margin: (dimensions.padding - dimensions.padding / 2 - 4) / 2,
    borderRadius: dimensions.padding / 4,
  },
  buttonCircleOuter: {
    marginRight: dimensions.padding,
    borderWidth: 2,
    borderColor: colors.dark,
    width: dimensions.padding,
    height: dimensions.padding,
    borderRadius: dimensions.padding / 2,
  },
  checkRadius: {
    borderRadius: 4,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  wrapper: {
    flexDirection: 'column',
  },
  horizontal: {
    flexDirection: 'row',
  },
  label: {
    color: colors.dark,
    fontSize: 15,
  },
  selectedBorder: {
    borderColor: colors.primaryLight,
  },
  selectedBackground: {
    backgroundColor: colors.primaryLight,
  },
  selectedColor: {
    color: colors.primaryLight,
  },
  check: {
    height: dimensions.padding - 4,
    width: dimensions.padding - 4,
    backgroundColor: colors.primaryLight,
  },
  buttonCircleInnerRedius: {
    borderRadius: 2,
  },
  optionHorizontal: {
    marginRight: dimensions.padding * 2,
  },
  buttonCircleOuterLight: {
    borderColor: colors.white,
  },
});

export default styles;
