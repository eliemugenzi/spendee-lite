/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, ViewStyle, StyleProp} from 'react-native';
import moment from 'moment';
import numeral from 'numeral';
import stc from 'string-to-color';
import {capitalize} from 'lodash';

import styles from './styles';

interface Props {
  type: 'income' | 'expenses';
  description?: string;
  amount: number;
  style?: StyleProp<ViewStyle>;
  created_at: Date;
  category: string;
}

const Transaction: React.FC<Props> = ({
  type,
  description,
  amount,
  style,
  created_at,
  category,
}) => {
  return (
    <View style={[styles.wrapper, style]}>
      <View>
        {description && (
          <Text style={styles.transactionText}>{description}</Text>
        )}
        <Text style={{color: stc(category), fontSize: 12}}>
          {capitalize(category)}
        </Text>
        <Text style={styles.transactionDate}>
          {moment(created_at).format('MMM Do, YYYY HH:mm A')}
        </Text>
      </View>
      <Text
        style={[
          type === 'expenses' ? styles.expensesAmount : styles.incomeAmount,
        ]}>
        {numeral(amount).format('0,0')} RWF
      </Text>
    </View>
  );
};

export default Transaction;
