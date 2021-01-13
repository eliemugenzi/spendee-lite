import React from 'react';
import {ViewStyle, StyleProp, View, Text} from 'react-native';

import styles from './styles';

interface ITransaction {
  type: 'expenses' | 'income';
  amount: number;
  description?: string;
}

interface Props {
  transactions: Array<ITransaction>;
  style?: StyleProp<ViewStyle>;
}

const Wallet = ({transactions}: Props) => {
  const expenses = transactions
    .filter((tr) => tr.type === 'expenses')
    .map((tr) => tr.amount)
    .reduce((acc, value) => acc + value, 0);
  const income = transactions
    .filter((tr) => tr.type === 'income')
    .map((tr) => tr.amount)
    .reduce((acc, value) => acc + value, 0);

  return (
    <View style={styles.wrapper}>
      <Text>Wallet</Text>
      <Text>Expenses: {expenses} RWF</Text>
      <Text>Income: {income} RWF</Text>
    </View>
  );
};

export default Wallet;
