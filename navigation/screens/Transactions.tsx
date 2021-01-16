import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import numeral from 'numeral';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  FlatList,
  ScrollView,
  Dimensions,
} from 'react-native';
import {Text as EvaText, Input as EvaInput} from '@ui-kitten/components';

import Transaction from '../../components/Transaction';
import Wallet from '../../components/Wallet';
import {IRootState} from '../../redux/initialState';
import {ITransaction} from '../../types';
import FAB from '../../components/FAB';
import Modal from '../../components/Modal';
import Select from '../../components/Select';
import Button from '../../components/Button';

import {addTransactions} from '../../redux/reducers/transactions';
import {addSms} from '../../redux/reducers/sms';
import colors from '../../colors';

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 15,
  },
  transTitle: {
    marginVertical: 15,
    fontWeight: '700',
    marginLeft: 20,
  },
  transactionNewTitle: {
    marginVertical: 5,
  },
  errorText: {
    color: 'red',
    marginVertical: 10,
  },
  flatList: {
    flex: 1,
    paddingBottom: Dimensions.get('window').height,
  },
  evaInput: {
    borderColor: colors.primary,
    // borderWidth: 2,
    borderRadius: 4,
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
  const dispatch = useDispatch();
  const {
    transactions: {data},
  }: any = useSelector((state: IRootState) => state.transactions);

  const transactions: ITransaction[] = data;

  const [modalVisible, setModalVisible] = useState(false);

  const [state, setState] = useState({
    category: '',
    type: '',
    description: '',
    amount: '0',
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
    } else if ([null, '0', undefined, ''].includes(state.amount)) {
      setError('Amount is required');
    } else {
      setError(null);
      console.log(state);
      const payload = {
        ...state,
        amount: parseFloat(state.amount),
        created_at: new Date(),
      };
      dispatch(addTransactions(payload));

      const newSms: any = {
        income: `You have received ${numeral(payload.amount).format(
          '0,0',
        )} RWF for ${payload.category} `,
        expenses: `You have spent ${numeral(payload.amount).format(
          '0,0',
        )} RWF for ${payload.category}`,
      };
      dispatch(
        addSms({
          id: Math.random(),
          text: newSms[payload.type],
          created_at: new Date(),
          read: false,
        }),
      );
      setModalVisible(false);
    }
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.wrapper}>
          <Wallet transactions={transactions} />
          <Text style={styles.transTitle}>Recent Transactions</Text>
          <ScrollView>
            <FlatList
              contentContainerStyle={styles.flatList}
              data={transactions}
              renderItem={({item: transaction, index}) => (
                <Transaction {...transaction} key={index} />
              )}
            />
          </ScrollView>
        </View>
        <Modal open={modalVisible} onHide={() => setModalVisible(false)}>
          <EvaText category="s1" style={styles.transactionNewTitle}>
            Add a new transaction
          </EvaText>
          <Select
            placeholder="Payment Method"
            options={[
              {
                label: 'MasterCard',
                value: 'mastercard',
              },
              {
                label: 'Mobile Money',
                value: 'mobilemoney',
              },
            ]}
          />
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
          <EvaInput
            label="Description"
            placeholder="Short description"
            value={state.description}
            onChangeText={(v) => {
              setState({
                ...state,
                description: v,
              });
            }}
            style={styles.evaInput}
          />
          <EvaInput
            keyboardType="number-pad"
            value={state.amount}
            onChangeText={(v) => {
              setState({
                ...state,
                amount: v,
              });
            }}
            placeholder="Amount"
            label="Amount"
            style={styles.evaInput}
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
