import {
    SET_BALANCE,
    SET_BALANCE_ERROR
  } from '../../actions/admin/types';
  
  const initialState = {
    loading: true,
    error: {},
  };
  
  function balanceReducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
        case SET_BALANCE:
          return {
            ...state,
            balance: payload,
            loading: false
            };
      default:
        return state;
    }
  }
  
  export default balanceReducer;
  