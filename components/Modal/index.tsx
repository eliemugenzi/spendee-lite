import React, {useState, useEffect, useCallback, ReactElement} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
  Keyboard,
  StyleProp,
  ViewStyle,
} from 'react-native';
import RNModal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Feather';

import styles from './styles';
import dimensions from '../../dimensions';
import colors from '../../colors';

interface ModalProps {
  open?: boolean;
  title?: string;
  headerExtra?: any;
  trigger?: ReactElement;
  beforeTrigger?: () => void;
  onHide?: () => void;
  footer?: any;
  children?: React.ReactNode;
  close?: (value?: any) => void;
  loading?: boolean;
  noHeader?: boolean;
  noPadding?: boolean;
  noScroll?: boolean;
  maxContentHeight?: (value?: any) => void;
  style?: StyleProp<ViewStyle>;
}

const Modal: React.FC<ModalProps> = ({
  open,
  title,
  headerExtra,
  trigger,
  beforeTrigger,
  onHide,
  footer,
  children,
  close,
  loading,
  noHeader,
  noPadding,
  noScroll,
  maxContentHeight,
  style: wrapperStyle,
}) => {
  const [show, setShow] = useState<boolean>(false);

  const ClsFN = useCallback(() => {
    if (onHide) {
      onHide();
    }
    setShow(false);
  }, [onHide]);

  if (close) {
    close(ClsFN);
  }

  useEffect(() => {
    if (open) {
      setShow(open);
    }
  }, [open]);

  const Wrapper = noScroll ? View : ScrollView;

  const [maxHeight, setMaxHeight] = useState(
    dimensions.height - (dimensions.padding * 6 + dimensions.toolbarHeight),
  );

  Keyboard.addListener('keyboardDidShow', (event) => {
    setMaxHeight(
      dimensions.height -
        event.endCoordinates.height -
        (dimensions.padding * 6 + dimensions.toolbarHeight),
    );
  });

  Keyboard.addListener('keyboardDidHide', () => {
    setMaxHeight(
      dimensions.height - (dimensions.padding * 6 + dimensions.toolbarHeight),
    );
  });

  useEffect(() => {
    if (maxContentHeight) {
      maxContentHeight(maxHeight);
    }
  }, [maxContentHeight, maxHeight]);

  return (
    <>
      {trigger &&
        React.cloneElement(trigger, {
          onPress: () => {
            if (beforeTrigger && beforeTrigger()) {
              setShow(true);
            }
          },
        })}
      <RNModal
        isVisible={show}
        onDismiss={() => {
          if (onHide) {
            onHide();
          }
        }}
        onBackButtonPress={() => ClsFN()}
        hasBackdrop={false}
        avoidKeyboard
        style={styles.modal}
        coverScreen>
        <TouchableOpacity onPress={() => ClsFN()} style={styles.backdrop} />
        <SafeAreaView style={[styles.wrapper, wrapperStyle]}>
          {!noHeader && (
            <View style={styles.header}>
              <View style={styles.title}>
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={styles.titleText}>
                  {title}
                </Text>
              </View>
              {headerExtra}
              {loading && (
                <ActivityIndicator
                  size="small"
                  style={styles.loader}
                  color={colors.darkGray}
                />
              )}
              <TouchableOpacity
                disabled={loading}
                onPress={() => ClsFN()}
                style={[styles.close, loading ? styles.closeDisabled : {}]}>
                <Icon name="x" size={dimensions.padding} />
              </TouchableOpacity>
            </View>
          )}
          <Wrapper style={{maxHeight}}>
            <View style={[styles.content, noPadding ? styles.noPadding : {}]}>
              {children}
            </View>
          </Wrapper>
          {footer && <View>{footer}</View>}
        </SafeAreaView>
      </RNModal>
    </>
  );
};

export default Modal;
