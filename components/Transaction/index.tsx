import React from 'react';
import {View, Text, ViewStyle, StyleProp} from 'react-native';

import styles from './styles';

interface Props {
  type: 'income' | 'expenses';
  description?: string;
  amount: number;
  style?: StyleProp<ViewStyle>;
}

const Transaction = ({type, description, amount, style}: Props) => {
  return (
    <View style={[styles.wrapper, style]}>
      <View>
        {description && (
          <Text style={styles.transactionText}>{description}</Text>
        )}
      </View>
      <Text
        style={[
          type === 'expenses' ? styles.expensesAmount : styles.incomeAmount,
        ]}>
        {amount} RWF
      </Text>
    </View>
  );
};

export default Transaction;
