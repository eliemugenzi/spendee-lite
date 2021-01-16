import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, StyleProp, ViewStyle} from 'react-native';

import styles from './styles';

interface ButtonProps {
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  label?: string;
  onSelect?: (v?: any) => void;
  selected?: boolean;
  check?: boolean;
  value?: any;
  light?: boolean;
}

interface RadioProps {
  multiple?: boolean;
  options?: {value: any; label?: string}[];
  value?: any;
  light?: boolean;
  onValueChange?: (v?: any) => void;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  horizontal?: boolean;
  buttonStyle?: StyleProp<ViewStyle>;
}

const Button: React.FC<ButtonProps> = ({
  disabled = false,
  label,
  value,
  onSelect = (x: any) => x,
  style,
  selected = false,
  check,
  light,
}) => {
  return (
    <TouchableOpacity
      onPress={() => onSelect(value)}
      disabled={disabled}
      style={[styles.button, disabled ? styles.disabled : {}, style]}>
      <View
        style={[
          styles.buttonCircleOuter,
          selected ? styles.selectedBorder : {},
          check ? styles.checkRadius : {},
          light ? styles.buttonCircleOuterLight : {},
        ]}>
        {selected && (
          <View
            style={[
              styles.buttonCircleInner,
              selected ? styles.selectedBackground : {},
              check ? styles.buttonCircleInnerRedius : {},
            ]}
          />
        )}
      </View>
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={[styles.label, selected ? styles.selectedColor : {}]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const checkMultiVal = (multiple: boolean, value: any): any => {
  if (multiple && !Array.isArray(value)) {
    return [];
  }

  return value;
};

const selectMultival = (val: any, newVal: any): any[] => {
  let returnValue = [...val];

  if (returnValue.includes(newVal)) {
    returnValue = returnValue.filter((element) => {
      return element !== newVal;
    });
  } else {
    returnValue.push(newVal);
  }

  return returnValue;
};

const checkSelected = (
  multiple: boolean,
  values: any[],
  value: any,
): boolean => {
  if (multiple) {
    return values.includes(value);
  }

  return values === value;
};

const RadioButton: React.FC<RadioProps> = ({
  multiple = false,
  options,
  value,
  light = false,
  onValueChange = (x) => x,
  style,
  buttonStyle,
  disabled = false,
  horizontal = false,
}) => {
  const [localValue, setLocalValue] = useState(checkMultiVal(multiple, value));

  useEffect(() => {
    setLocalValue(checkMultiVal(multiple, value));
  }, [multiple, value]);

  return (
    <View style={[styles.wrapper, style, horizontal ? styles.horizontal : {}]}>
      {options?.map((option, i) => (
        <View key={i} style={[horizontal ? styles.horizontal : {}]}>
          <Button
            style={buttonStyle}
            light={light}
            label={option.label}
            selected={checkSelected(multiple, localValue, option.value)}
            value={option.value}
            check={multiple}
            disabled={disabled}
            onSelect={(newValue) => {
              if (localValue !== newValue || multiple) {
                onValueChange(
                  multiple ? selectMultival(localValue, newValue) : newValue,
                );
                setLocalValue(
                  multiple ? selectMultival(localValue, newValue) : newValue,
                );
              }
            }}
          />
        </View>
      ))}
    </View>
  );
};

export default RadioButton;
