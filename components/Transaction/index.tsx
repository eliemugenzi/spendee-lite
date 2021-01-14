import React from 'react';
import {View, Text, ViewStyle, StyleProp} from 'react-native';
import moment from 'moment';

import styles from './styles';
import formatNumber from '../../helpers/formatNumber';

interface Props {
  type: 'income' | 'expenses';
  description?: string;
  amount: number;
  style?: StyleProp<ViewStyle>;
  created_at: Date;
}

const Transaction: React.FC<Props> = ({
  type,
  description,
  amount,
  style,
  created_at,
}) => {
  return (
    <View style={[styles.wrapper, style]}>
      <View>
        {description && (
          <Text style={styles.transactionText}>{description}</Text>
        )}
        <Text style={styles.transactionDate}>
          {moment(created_at).format('MMM Do, YYYY HH:mm A')}
        </Text>
      </View>
      <Text
        style={[
          type === 'expenses' ? styles.expensesAmount : styles.incomeAmount,
        ]}>
        {formatNumber(amount)} RWF
      </Text>
    </View>
  );
};

export default Transaction;
