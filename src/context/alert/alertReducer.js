/* eslint-disable import/no-anonymous-default-export */
import { SET_ALERT, REMOVE_ALERT } from '../types';

export const initialState = null;

const alertReducer = (state, action) => {
  switch (action.type) {
    case SET_ALERT:
      return action.payload;
    case REMOVE_ALERT:
      return null;
    default:
      throw Error(`No case for type ${action.type} found`);
  }
};

export default alertReducer;
