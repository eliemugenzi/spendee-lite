import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {View, Text, StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import {Text as EvaText} from '@ui-kitten/components';

import Transaction from '../../components/Transaction';
import Wallet from '../../components/Wallet';
import {IRootState} from '../../redux/initialState';
import {ITransaction} from '../../types';
import FAB from '../../components/FAB';
import Modal from '../../components/Modal';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 15,
  },
  transTitle: {
    marginVertical: 15,
    fontWeight: '700',
    marginHorizontal: 50,
  },
  transactionNewTitle: {
    marginVertical: 5,
  },
  errorText: {
    color: 'red',
    marginVertical: 10,
  },
});

const incomeCategories = [
  {
    label: 'Salary',
    value: 'salary',
  },
  {
    label: 'Business',
    value: 'business',
  },
  {
    label: 'Gifts',
    value: 'gifts',
  },
  {
    label: 'Loan',
    value: 'loan',
  },
];

const expenseCategories = [
  {
    label: 'Food',
    value: 'food',
  },
  {
    label: 'Shopping',
    value: 'shopping',
  },
  {
    label: 'Transport',
    value: 'transport',
  },
  {
    label: 'Bills',
    value: 'bills',
  },
  {
    label: 'Entertainment',
    value: 'entertainment',
  },
  {
    label: 'Car',
    value: 'car',
  },
  {
    label: 'Healthcare',
    value: 'healthcare',
  },
];

const Transactions: React.FC<{}> = () => {
  const {
    transactions: {data},
  }: any = useSelector((state: IRootState) => state.transactions);

  const transactions: ITransaction[] = data;

  const [modalVisible, setModalVisible] = useState(false);

  const [state, setState] = useState({
    category: '',
    type: '',
    description: '',
    amount: 0,
  });

  const [error, setError] = useState<string | null>(null);

  const handleSubmit = () => {
    setError(null);
    if ([null, undefined, ''].includes(state.category)) {
      setError('Category is required');
    } else if ([null, undefined, ''].includes(state.type)) {
      setError('Transaction type is required');
    } else if ([null, undefined, ''].includes(state.description)) {
      setError('Transaction description is required');
    } else if ([null, 0, undefined].includes(state.amount)) {
      setError('Amount is required');
    } else {
      setError(null);
      console.log(state);
    }
  };
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
        <Modal open={modalVisible} onHide={() => setModalVisible(false)}>
          <EvaText category="s1" style={styles.transactionNewTitle}>
            Add a new transaction
          </EvaText>
          <Select
            placeholder="Transaction Type"
            options={[
              {
                label: 'Income',
                value: 'income',
              },
              {
                label: 'Expenses',
                value: 'expenses',
              },
            ]}
            value={state.type}
            onValueChange={(v) => {
              setState({
                ...state,
                type: v,
              });
            }}
          />
          <Select
            placeholder="Category"
            options={
              state.type === 'expenses' ? expenseCategories : incomeCategories
            }
            value={state.category}
            onValueChange={(v) => {
              setState({
                ...state,
                category: v,
              });
            }}
          />
          <Input
            placeholder="Short description"
            value={state.description}
            onValueChange={(v) => {
              setState({
                ...state,
                description: v,
              });
            }}
            hasError={[null, undefined, ''].includes(state.description)}
            error={
              [null, undefined, ''].includes(state.description)
                ? 'Required'
                : undefined
            }
          />
          <Input
            inputProps={{
              keyboardType: 'number-pad',
            }}
            value={state.amount}
            onValueChange={(v) => {
              setState({
                ...state,
                amount: parseFloat(v),
              });
            }}
            placeholder="Amount"
            label="Amount"
            before={<Text>RWF &nbsp;</Text>}
          />
          {error && <Text style={styles.errorText}>{error}</Text>}
          <Button onPress={handleSubmit}>Submit</Button>
        </Modal>
      </SafeAreaView>
      <FAB onPress={() => setModalVisible(true)} />
    </>
  );
};

export default Transactions;
