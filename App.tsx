/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {ApplicationProvider} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import {Provider} from 'react-redux';

import AppTabs from './navigation';

import store from './redux/store';

type expenseCategories =
  | 'food'
  | 'shopping'
  | 'transport'
  | 'home'
  | 'bills'
  | 'entertainment'
  | 'car'
  | 'healthcare';

type incomeCategories = 'salary' | 'business' | 'gifts' | 'loan';

interface ITransaction {
  id: number;
  type: 'income' | 'expenses';
  description?: string;
  amount: number;
  created_at: Date;
}

const App = () => {
  return <AppTabs />;
};

export default () => {
  return (
    <Provider store={store}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <App />
      </ApplicationProvider>
    </Provider>
  );
};
