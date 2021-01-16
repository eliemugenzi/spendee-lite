import {StyleSheet} from 'react-native';
import colors from '../../colors';

export default StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 10,
    borderColor: colors.darkGray,
    borderWidth: 0.7,
    padding: 7,
    borderRadius: 3,
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
