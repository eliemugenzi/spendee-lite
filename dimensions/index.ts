import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default {
  width,
  height,
  containerWidth: width * 0.8,
  padding: 16,
  toolbarHeight: 56,
  inputHeight: 40,
  inputFontSize: 14,
  badgeSize: 16,
  listItemFontSize: 16,
  listItemIconSize: 24,
};
