import React, {useState, useEffect} from 'react';
import {TouchableOpacity, TextInputProps, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import Input from '../Input';
import RadioButton from '../RadioButton';
import Modal from '../Modal';
import Button from '../Button';
import colors from '../../colors';
import dimensions from '../../dimensions';

interface Props {
  options?: {label: string; value?: string | number}[];
  value?: string | number;
  onValueChange?: (v?: any) => void;
  multiple?: boolean;
  disabled?: boolean;
  label?: string;
  placeholder?: string;
  listItem?: boolean;
  after?: React.ReactElement | React.ReactElement[];
  light?: boolean;
  chevronColor?: string;
  inputProps?: TextInputProps;
}

const newLabel = (
  multiple: boolean,
  options: any[],
  value: string | number,
) => {
  let valueLabel = '';

  options.map((option) => {
    if (value === option.value && !multiple) {
      valueLabel = option.label;
    } else if (
      Array.isArray(value) &&
      value.includes(option.value) &&
      multiple
    ) {
      valueLabel =
        valueLabel === '' ? option.label : `${valueLabel}, ${option.label}`;
    }
    return option;
  });

  return valueLabel;
};

const formatOptions = (options: any[]): any => {
  const newOptions = [...options];
  if (typeof options[0] !== 'object') {
    return [
      ...newOptions.map((option) => ({
        value: option,
        label: option,
        key: option,
      })),
    ];
  }

  return newOptions;
};

const Select: React.FC<Props> = ({
  options = [],
  value = 0,
  disabled,
  label,
  placeholder,
  onValueChange = (x: any) => x,
  multiple = false,
  listItem,
  after,
  light,
  chevronColor = colors.dark,
  inputProps,
}) => {
  const [localValue, setLocalValue] = useState<any>(value);
  const [localLabel, setLocalLabel] = useState(
    newLabel(multiple, options, localValue),
  );

  const [inputHeight, setInputHeight] = useState(dimensions.inputHeight - 1);

  useEffect(() => {
    setLocalValue(value);
    setLocalLabel(newLabel(multiple, options, value));
  }, [value, options, multiple]);

  let closeFn = () => {};

  const cv = light ? colors.white : chevronColor;

  return (
    <Modal
      title={label !== null ? label : 'Choose'}
      headerExtra={
        multiple ? (
          <Button
            onPress={() => setLocalValue([])}
            disabled={!Array.isArray(localValue) || localValue.length === 0}>
            Clear
          </Button>
        ) : (
          <View />
        )
      }
      trigger={
        <TouchableOpacity
          disabled={disabled || options.length === 0 || listItem}>
          <Input
            {...inputProps}
            disabled={disabled || options.length === 0}
            inputStyle={{
              height:
                multiple && [null, ''].includes(localLabel)
                  ? dimensions.inputHeight - 1
                  : inputHeight,
            }}
            inputProps={{
              pointerEvents: 'none',
              editable: false,
              multiline: multiple,
              onContentSizeChange: (e) => {
                if (multiple) {
                  const contSize = e.nativeEvent.contentSize.height;
                  setInputHeight(
                    contSize > dimensions.inputHeight
                      ? contSize
                      : dimensions.inputHeight,
                  );
                }
              },
            }}
            light={light}
            value={localLabel}
            placeholder={placeholder}
            label={label}
            after={[
              !listItem && (
                <Icon
                  key="chev"
                  name="chevron-down"
                  size={dimensions.padding}
                  color={disabled ? colors.darkGray : cv}
                />
              ),
              after,
            ]}
          />
        </TouchableOpacity>
      }
      beforeTrigger={() => options.length > 0}
      close={(fn) => {
        closeFn = fn;
      }}
      footer={
        multiple && (
          <Button
            primary
            onPress={() => {
              setLocalLabel(newLabel(true, options, localValue));
              onValueChange(localValue);
              closeFn();
            }}>
            Done
          </Button>
        )
      }>
      <RadioButton
        multiple={multiple}
        value={localValue}
        options={formatOptions(options)}
        onValueChange={(v) => {
          setLocalValue(v);
          if (!multiple) {
            setLocalLabel(newLabel(false, formatOptions(options), v));
            onValueChange(v);
            closeFn();
          }
        }}
      />
    </Modal>
  );
};

export default Select;
