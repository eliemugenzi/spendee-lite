import React from 'react';
import {TouchableOpacity, StyleProp, ViewStyle} from 'react-native';
import Icons from '../../icons';
import colors from '../../colors';
import styles from './styles';

interface Props {
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

const FAB: React.FC<Props> = ({style, onPress}) => {
  return (
    <TouchableOpacity style={[styles.wrapper, style]} onPress={onPress}>
      <Icons.Add width={18} height={18} color={colors.white} />
    </TouchableOpacity>
  );
};

export default FAB;
