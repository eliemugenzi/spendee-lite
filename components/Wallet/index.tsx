import React from 'react';
import {ViewStyle, StyleProp, View, Text, ScrollView} from 'react-native';
import {Card, Text as EvaText} from '@ui-kitten/components';
import {useSelector} from 'react-redux';
import numeral from 'numeral';

import styles from './styles';
import {IRootState} from '../../redux/initialState';

interface ITransaction {
  type: 'expenses' | 'income';
  amount: number;
  description?: string;
}

interface Props {
  transactions: Array<ITransaction>;
  style?: StyleProp<ViewStyle>;
}

const Wallet: React.FC<Props> = ({transactions, style}) => {
  const {sms}: any = useSelector((state: IRootState) => state.sms);
  console.log('SMS', sms);
  const expenses = transactions
    .filter((tr) => tr.type === 'expenses')
    .map((tr) => tr.amount)
    .reduce((acc, value) => acc + value, 0);
  const income = transactions
    .filter((tr) => tr.type === 'income')
    .map((tr) => tr.amount)
    .reduce((acc, value) => acc + value, 0);

  const balanceHeader = () => (
    <View style={styles.cardHeader}>
      <EvaText
        category="s1"
        status={expenses > income ? 'danger' : 'success'}
        appearance="hint">
        Balance
      </EvaText>
    </View>
  );

  const expensesHeader = () => (
    <View style={styles.cardHeader}>
      <EvaText category="s1" status="info" appearance="hint">
        Expenses
      </EvaText>
    </View>
  );

  const incomeHeader = () => (
    <View style={styles.cardHeader}>
      <EvaText category="s1" status="info" appearance="hint">
        Income
      </EvaText>
    </View>
  );

  return (
    <View style={[styles.wrapper, style]}>
      <Text style={styles.walletTitle}>Spendee Lite</Text>
      <ScrollView style={styles.cardHolder} horizontal>
        <Card header={balanceHeader} style={styles.card}>
          <Text
            style={[
              expenses > income ? styles.balanceMinus : styles.balancePlus,
            ]}>
            {numeral(income - expenses).format('0,0')} RWF
          </Text>
        </Card>
        <Card style={styles.card} header={expensesHeader}>
          <Text
            style={[expenses < 0 ? styles.balanceMinus : styles.balancePlus]}>
            {numeral(expenses).format('0,0')} RWF
          </Text>
        </Card>
        <Card style={styles.card} header={incomeHeader}>
          <Text style={[income < 0 ? styles.balanceMinus : styles.balancePlus]}>
            {numeral(income).format('0,0')} RWF
          </Text>
        </Card>
      </ScrollView>
    </View>
  );
};

export default Wallet;
