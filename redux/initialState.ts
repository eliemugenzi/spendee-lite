import {ITransaction, ISms} from '../types';

export interface IRootState {
  sms: {
    data: Array<ISms>;
  };
  transactions: {
    data: Array<ITransaction>;
  };
}

const state: IRootState = {
  sms: {
    data: [],
  },
  transactions: {
    data: [
      {
        id: 1,
        type: 'expenses',
        description: 'The art of spending',
        amount: 1000,
        created_at: new Date(),
      },
      {
        id: 2,
        type: 'income',
        description: 'ChipperCash giveaway',
        amount: 100000,
        created_at: new Date(),
      },
      {
        id: 3,
        type: 'expenses',
        description: 'Transport',
        amount: 1500,
        created_at: new Date(),
      },
    ],
  },
};

export default state;
