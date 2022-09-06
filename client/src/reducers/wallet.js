import {
    ADD_WALLET,
    WALLET_ERROR,
    GET_WALLET,
    GET_WALLETS,
    DELETE_WALLET
  } from '../actions/types.js';
  
  const initialState = {
    wallets: [],
    wallet: null,
    loading: true,
    error: {},
    isCreated: false
  };
  
  function walletReducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_WALLETS:
        return {
          ...state,
          wallets: payload,
          loading: false
        };
      case GET_WALLET:
        return {
          ...state,
          wallet: payload,
          loading: false
        };
      case ADD_WALLET:
        return {
          ...state,
          wallets: [payload, ...state.wallets],
          loading: false,
          isCreated : true
        };

      case WALLET_ERROR:
        return {
          ...state,
          error: payload,
          loading: false
        };
      
        case DELETE_WALLET:
          return {
            ...state,
            wallets: state.wallets.filter((_wallet) => _wallet._id !== payload),
            loading: false,
            isCreated: false
          };
   
      default:
        return state;
    }
  }
  
  export default walletReducer;
  