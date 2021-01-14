import {ISms} from '../../types';
import initialState, {IRootState} from '../initialState';

export const SMS_TYPE = ['spendee-lite/ADD_SMS', 'spendee-lite/DELETE_SMS'];

type IAction = {
  type: string;
  payload: any;
};

export default (state: IRootState = initialState, action: IAction) => {
  switch (action.type) {
    case SMS_TYPE[0]:
      return {
        ...state,
        sms: {
          ...state.sms,
          data: [action.payload, ...state.sms.data],
        },
      };

    case SMS_TYPE[1]:
      return {
        ...state,
        sms: {
          ...state.sms,
          data: state.sms.data.filter((d) => d.id !== action.payload.id),
        },
      };

    default:
      return state;
  }
};

export const addSms = (data: ISms) => ({
  type: SMS_TYPE[0],
  payload: data,
});

export const removeSms = (id: number) => ({
  type: SMS_TYPE[1],
  payload: {
    id,
  },
});
