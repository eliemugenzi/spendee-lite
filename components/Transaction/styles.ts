import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  expensesAmount: {
    color: 'red',
  },
  incomeAmount: {
    color: 'green',
  },
  transactionText: {
    fontSize: 15,
  },
  transactionDate: {
    marginVertical: 5,
    fontSize: 10,
  },
});
