import React from 'react';
import {useSelector} from 'react-redux';
import {View, Text, StyleSheet, SafeAreaView, StatusBar} from 'react-native';

import Transaction from '../../components/Transaction';
import Wallet from '../../components/Wallet';
import {IRootState} from '../../redux/initialState';
import {ITransaction} from '../../types';
import FAB from '../../components/FAB';

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 15,
  },
  transTitle: {
    marginVertical: 15,
    fontWeight: '700',
    marginHorizontal: 50,
  },
});

const Transactions: React.FC<{}> = () => {
  const {
    transactions: {data},
  }: any = useSelector((state: IRootState) => state.transactions);

  const transactions: ITransaction[] = data;
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.wrapper}>
          <Wallet transactions={transactions} />
          <Text style={styles.transTitle}>Recent Transactions</Text>
          {transactions.map((transaction, index) => (
            <Transaction key={index} {...transaction} />
          ))}
        </View>
      </SafeAreaView>
      <FAB />
    </>
  );
};

export default Transactions;
