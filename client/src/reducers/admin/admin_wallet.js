import {
    GET_WALLETS,
     GET_WALLETS_ERROR
   } from '../../actions/admin/types';
   
   const initialState = {
     wallets: {_wallets:[], username:''},
     wallet: null,
     loading: true,
     error: {},
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
         
         case GET_WALLETS_ERROR:
             return {
                 ...state,
                 error: payload,
                 loading: false
             };
 
       default:
         return state;
     }
   }
   
   export default walletReducer ; 
   