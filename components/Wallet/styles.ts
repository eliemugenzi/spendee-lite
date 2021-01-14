import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export default StyleSheet.create({
  wrapper: {
    marginHorizontal: 50,
    marginVertical: 10,
  },
  card: {
    padding: 5,
    marginHorizontal: 10,
    width: width / 3.5,
  },
  cardHeader: {
    padding: 5,
  },
  walletTitle: {
    marginVertical: 10,
    fontSize: 19,
    fontWeight: 'bold',
  },
  cardHolder: {
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  balancePlus: {
    color: 'black',
  },
  balanceMinus: {
    color: 'red',
  },
});
