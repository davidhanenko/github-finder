import { createContext, useReducer } from 'react';

import alertReducer, { initialState } from './alertReducer';

import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertContext = createContext(initialState);

export const AlertProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    alertReducer,
    initialState
  );

  // Alert
  const setAlert = (msg, type) => {
    dispatch({
      type: SET_ALERT,
      payload: { msg, type },
    });
    setTimeout(
      () => dispatch({ type: REMOVE_ALERT }),
      5000
    );
  };

  const value = {
    alert: state,
    setAlert,
  };

  return (
    <AlertContext.Provider value={value}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
