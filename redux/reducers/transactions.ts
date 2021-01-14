export const TRANSACTION_TYPE = [
  'speendee-lite/ADD_TRANSACTION',
  'spendee-lite/DELETE_TRANSACTION',
];

import initialState, {IRootState} from '../initialState';

type IAction = {
  type: string;
  payload: any;
};

export default (state: IRootState = initialState, action: IAction) => {
  switch (action.type) {
    case TRANSACTION_TYPE[0]:
      return {
        ...state,
        transactions: {
          ...state.transactions,
          data: [action.payload, ...state.transactions.data],
        },
      };

    case TRANSACTION_TYPE[1]:
      return {
        ...state,
        transactions: {
          ...state.transactions,
          data: state.transactions.data.filter(
            (t) => t.id !== action.payload.id,
          ),
        },
      };

    default:
      return state;
  }
};

export const addTransactions = (data: any) => ({
  type: TRANSACTION_TYPE[0],
  payload: data,
});

export const deleteTransaction = (id: number) => ({
  type: TRANSACTION_TYPE[1],
  payload: {
    id,
  },
});
