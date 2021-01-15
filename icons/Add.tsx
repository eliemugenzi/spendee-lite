import React from 'react';
import {ViewStyle, StyleProp} from 'react-native';
import {Svg, Path} from 'react-native-svg';

interface Props {
  width?: number;
  height?: number;
  style?: StyleProp<ViewStyle>;
  color?: string;
}

const Add: React.FC<Props> = ({width, height, style, color}) => {
  return (
    <Svg
      fill={color || '#000000'}
      viewBox="0 0 24 24"
      width={width || 24}
      height={height || 24}
      style={style}>
      <Path
        fill-rule="evenodd"
        d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
      />
    </Svg>
  );
};

export default Add;
