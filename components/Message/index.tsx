/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleProp, ViewStyle, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import styleSheet from './styles';

interface Props {
  visible?: boolean;
  message: string;
  style?: StyleProp<ViewStyle>;
  action?: {title: string; onPress: (v?: any) => void};
  ribbon?: boolean;
  success?: boolean;
  error?: boolean;
  warning?: boolean;
  title?: string;
}

const Message: React.FC<Props> = ({
  visible = true,
  success,
  error,
  warning,
  action,
  title = '',
  message,
  style,
  ribbon = true,
}) => {
  return !visible ? null : (
    <Animatable.View
      animation="bounceInRight"
      duration={1000}
      style={[
        styleSheet.wrapper,
        warning ? styleSheet.wapperWarning : {},
        error ? styleSheet.wapperError : {},
        success ? styleSheet.wapperSuccess : {},
        ribbon ? (success ? styleSheet.ribbonSuccess : styleSheet.ribbon) : {},
        style,
      ]}>
      <View style={styleSheet.inner}>
        {title && <Text style={styleSheet.title}>{title}</Text>}
        {message && (
          <Text
            style={[
              styleSheet.message,
              success ? styleSheet.successMessage : {},
              warning ? styleSheet.warningMessage : {},
            ]}>
            {message}
          </Text>
        )}
      </View>
      {action && (
        <TouchableOpacity style={styleSheet.action} onPress={action.onPress}>
          <Text style={styleSheet.actionTitle}>
            {action.title.toUpperCase()}
          </Text>
        </TouchableOpacity>
      )}
    </Animatable.View>
  );
};

export default Message;
