import {
    ACTION_TIMER
  } from '../actions/types.js';
  
  const initialState = {
      currentTime: 'Empty',          
  };
  
  function timerReducer(state = initialState, action) {
    const { type, payload } = action;
      
    switch (type) {
      case ACTION_TIMER:
        return {
          ...state,
          currentTime:payload
        };
   
      default:
        return state;
    }
  }
  
  export default timerReducer;
  