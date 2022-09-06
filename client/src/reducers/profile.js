import {
  GET_BALANCE,
  GET_BALANCE_ERROR,
} from '../actions/types';

const initialState = {
  profile: null,
  balance: [],
  loading: true,
  error: {}
};

function profileReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    // case GET_PROFILE:
    case GET_BALANCE:
      return {
        ...state,
        balance : payload,
        loading: false
      };
    case GET_BALANCE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        balance : null
      };
  
    default:
      return state;
  }
}

export default profileReducer;
