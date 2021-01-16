import numeral from 'numeral';

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
      const newSms: any = {
        income: `You have received ${numeral(action.payload.amount).format(
          '0,0',
        )} RWF for ${action.payload.category}`,
        expenses: `You have spent ${numeral(action.payload.amount).format(
          '0,0',
        )} RWF for ${action.payload.category}`,
      };

      const sms = newSms[action.payload.type];

      const message = {
        id: state.sms.data.length + 1,
        text: sms,
        created_at: new Date(),
        read: false,
      };

      console.log('___SMS', message);

      const newState = {
        ...state,
        transactions: {
          ...state.transactions,
          data: [action.payload, ...state.transactions.data],
        },
        sms: {
          ...state.sms,
          data: [message, ...state.sms.data],
        },
      };

      return {
        ...newState,
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
