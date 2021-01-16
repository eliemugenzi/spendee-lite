import React from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  View,
  ViewStyle,
  StyleProp,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import colors from '../../colors';
import dimensions from '../../dimensions';

import styleSheet from './styles';

interface IcProps {
  icon?: string;
  iconRight?: any;
  children: React.ReactNode;
  small?: boolean;
  danger?: boolean;
  primary?: boolean;
  success?: boolean;
  color?: string;
  loading?: boolean;
}

interface ButtonProps {
  disabled?: boolean;
  danger?: boolean;
  primary?: boolean;
  success?: boolean;
  transparent?: boolean;
  block?: boolean;
  small?: boolean;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  icon?: string;
  iconRight?: any;
  iconSpacer?: any;
  onPress?: (v?: any) => void;
  backgroundColor?: any;
  color?: string;
}

const Ic: React.FC<IcProps> = ({
  icon,
  iconRight,
  children,
  small,
  danger,
  primary,
  success,
  color,
  loading,
}) => {
  return icon ? (
    <Icon
      name={icon}
      style={[
        children ? styleSheet.iconLeft : {},
        iconRight ? styleSheet.iconRight : {},
        loading ? styleSheet.textLoading : {},
      ]}
      size={
        small
          ? styleSheet.smallText.lineHeight * 0.6
          : styleSheet.text.lineHeight * 0.6
      }
      color={
        color ||
        (danger || primary || success
          ? styleSheet.textLight.color
          : styleSheet.text.color)
      }
    />
  ) : (
    <View />
  );
};

const CustomButton: React.FC<ButtonProps> = (props) => {
  const {
    disabled,
    danger,
    primary,
    success,
    transparent,
    block,
    small,
    loading = false,
    style,
    children,
    icon,
    iconRight,
    iconSpacer,
    onPress,
    backgroundColor = colors.primary,
    color = colors.white,
  } = props;
  return (
    <TouchableOpacity
      {...props}
      disabled={!onPress || loading || disabled}
      style={[
        styleSheet.button,
        small ? styleSheet.smallButton : {},
        danger ? styleSheet.danger : {},
        primary ? styleSheet.primary : {},
        success ? styleSheet.success : {},
        transparent ? styleSheet.transparent : {},
        disabled ? styleSheet.disabled : {},
        block ? styleSheet.block : {},
        backgroundColor ? {backgroundColor} : {},
        style,
      ]}>
      {!iconRight && (
        <>
          <Ic
            {...{
              icon,
              iconRight,
              children,
              small,
              danger,
              primary,
              success,
              color,
              loading,
            }}
          />
          {iconSpacer && <View style={styleSheet.iconSpacer} />}
        </>
      )}
      <Text
        numberOfLines={1}
        style={[
          styleSheet.text,
          small ? styleSheet.smallText : {},
          danger || primary || success ? styleSheet.textLight : {},
          loading ? styleSheet.textLoading : {},
          color ? {color} : {},
        ]}>
        {children}
      </Text>
      {iconRight && (
        <>
          {iconSpacer && <View style={styleSheet.iconSpacer} />}
          <Ic
            {...{
              icon,
              iconRight,
              children,
              small,
              danger,
              primary,
              success,
              color,
              loading,
            }}
          />
        </>
      )}
      <ActivityIndicator
        animating={loading}
        style={styleSheet.indicator}
        size={
          small ? dimensions.inputHeight * 0.4 : dimensions.inputHeight * 0.6
        }
        color={
          color ||
          (danger || primary || success ? colors.white : colors.primary)
        }
      />
    </TouchableOpacity>
  );
};

export default CustomButton;
