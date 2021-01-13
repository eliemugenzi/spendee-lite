/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar, View, StyleSheet} from 'react-native';
import {ApplicationProvider} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

import Transaction from './components/Transaction';
import Wallet from './components/Wallet';

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 15,
  },
});

interface ITransaction {
  type: 'income' | 'expenses';
  description?: string;
  amount: number;
}

const App = () => {
  const transactions: Array<ITransaction> = [
    {
      type: 'expenses',
      description: 'The art of spending',
      amount: 1000,
    },
    {
      type: 'income',
      description: 'ChipperCash giveaway',
      amount: 100000,
    },
    {
      type: 'expenses',
      description: 'Transport',
      amount: 500,
    },
  ];
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Wallet transactions={transactions} />
        <View style={styles.wrapper}>
          {transactions.map((transaction, index) => (
            <Transaction key={index} {...transaction} />
          ))}
        </View>
      </SafeAreaView>
    </>
  );
};

export default () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <App />
    </ApplicationProvider>
  );
};
