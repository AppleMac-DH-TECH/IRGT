import {
    GET_TEAMS,
     GET_TEAMS_ERROR
   } from '../../actions/admin/types';
   
   const initialState = {
     teams: {_teams:[], username:''},
     team: null,
     loading: true,
     error: {},
   };
   
   function teamReducer(state = initialState, action) {
     const { type, payload } = action;
   
     switch (type) {
         case GET_TEAMS:
           return {
             ...state,
             teams: payload,
             loading: false
             };
         
         case GET_TEAMS_ERROR:
             return {
                 ...state,
                 error: payload,
                 loading: false
             };
 
       default:
         return state;
     }
   }
   
   export default teamReducer;
   