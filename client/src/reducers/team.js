import {
    ADD_TEAM_ACCOUNT,
    ADD_TEAM_ERROR,
    GET_TEAM_ACCOUNT,
    GET_TEAM_ACCOUNTS,
    DELETE_TEAM_ACCOUNT
  } from '../actions/types.js';
  
  const initialState = {
    accounts: [],
    account: null,
    loading: true,
    error: {},
    isCreated: false
  };
  
  function teamReducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_TEAM_ACCOUNTS:
        return {
          ...state,
          accounts: payload,
          loading: false
        };
      case GET_TEAM_ACCOUNT:
        return {
          ...state,
          account: payload,
          loading: false
        };
        //   case ADD_WALLET:
        //     return {
        //       ...state,
        //       wallets: [payload, ...state.wallets],
        //       loading: false,
        //       isCreated : true
        //     };

        //   case WALLET_ERROR:
        //     return {
        //       ...state,
        //       error: payload,
        //       loading: false
        //     };
        
            case DELETE_TEAM_ACCOUNT:
              return {
                ...state,
                accounts: state.accounts.filter((_account) => _account._id !== payload),
                loading: false,
                isCreated: false
              };
   
      default:
        return state;
    }
  }
  
  export default teamReducer;
  