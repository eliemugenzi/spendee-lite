import {StyleSheet} from 'react-native';
import colors from '../../colors';

export default StyleSheet.create({
  wrapper: {
    marginHorizontal: 15,
    marginVertical: 10,
  },
  card: {
    marginHorizontal: 5,
  },
  cardHeader: {
    padding: 5,
  },
  walletTitle: {
    marginVertical: 10,
    fontSize: 19,
    fontWeight: 'bold',
    color: colors.primary,
  },
  cardHolder: {
    // justifyContent: 'space-around',
    flexDirection: 'row',
  },
  balancePlus: {
    color: 'black',
  },
  balanceMinus: {
    color: 'red',
  },
});
