import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  Text,
  TextInputProps,
  StyleProp,
  ViewStyle,
} from 'react-native';

import styles from './styles';

interface Props {
  wrapperStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<ViewStyle>;
  inputProps?: TextInputProps;
  placeholder?: string;
  label?: string;
  onValueChange?: (value?: any) => void;
  value?: any;
  format?: (v?: any) => any;
  before?: React.ReactElement;
  after?: any;
  error?: string;
  hasError?: boolean;
  success?: string;
  info?: string;
  light?: boolean;
  disabled?: boolean;
  noLine?: boolean;
  secureTextEntry?: boolean;
  listItem?: boolean;
  persistingPlaceholder?: boolean;
  validator?: (x?: any) => boolean;
  multiline?: boolean;
  last?: boolean;
  onFocus?: (v?: any) => void;
  textContentType?: string;
}

const Input: React.FC<Props> = ({
  wrapperStyle,
  inputStyle,
  inputProps,
  placeholder,
  label,
  onValueChange,
  value,
  before,
  after,
  error,
  hasError = false,
  success,
  info,
  light,
  disabled = false,
  noLine,
  onFocus,
  secureTextEntry,
  listItem,
  validator = (x?: any) => x,
  multiline,
  last,
}) => {
  const [focused, setFocused] = useState(false);
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  return (
    <View
      style={[
        styles.wrapper,
        light ? styles.wrapperLight : {},
        last ? styles.wrapperLast : {},
        disabled ? styles.wrapperDisabled : {},
        wrapperStyle,
      ]}>
      {![null, undefined, ''].includes(label) && (
        <Text
          style={[
            styles.textInput,
            styles.label,
            styles.labelMain,
            light ? styles.labelList : {},
          ]}>
          {label}
        </Text>
      )}
      <View style={styles.inputRow}>
        {before}
        <View style={styles.inputCol}>
          {placeholder && [null, undefined, ''].includes(localValue) && (
            <Text
              style={[
                styles.textInput,
                styles.placeholder,
                light ? styles.placeholderHeight : {},
              ]}>
              {placeholder}
            </Text>
          )}
          <TextInput
            style={[
              styles.textInput,
              multiline ? styles.textInputMultiline : {},
              light ? styles.textInputLight : {},
              inputStyle,
            ]}
            textContentType="none"
            secureTextEntry={secureTextEntry}
            onChangeText={(v) => {
              if (validator(v) || v === '') {
                setLocalValue(v);
                if (onValueChange) {
                  onValueChange(v);
                }
              }
            }}
            returnKeyType="done"
            value={localValue}
            onFocus={() => {
              setFocused(true);
              if (onFocus) {
                onFocus();
              }
            }}
            onBlur={() => setFocused(false)}
            editable={!disabled && !listItem}
            {...inputProps}
          />
        </View>
        {after}
      </View>
      {!noLine && (
        <View
          style={[
            styles.line,
            light ? styles.lineLight : {},
            focused && light ? styles.lineLightFocused : {},
            focused && !light ? styles.lineFocused : {},
            ![null, '', undefined].includes(error) || hasError
              ? styles.lineError
              : {},
          ]}
        />
      )}
      {![null, '', undefined].includes(info) && (
        <View>
          <Text
            style={[
              styles.textInputNH,
              styles.label,
              styles.info,
              light ? styles.infoLight : {},
            ]}>
            {info}
          </Text>
        </View>
      )}
      {![null, undefined, ''].includes(success) && (
        <View>
          <Text style={[styles.textInputNH, styles.label, styles.success]}>
            {success}
          </Text>
        </View>
      )}
      {![null, undefined, ''].includes(error) && (
        <View>
          <Text style={[styles.textInputNH, styles.label, styles.error]}>
            {error}
          </Text>
        </View>
      )}
    </View>
  );
};

export default Input;
