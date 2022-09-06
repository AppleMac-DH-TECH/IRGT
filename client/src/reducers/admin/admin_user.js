import {
    GET_USER_ERROR,
    DELETE_USER,
    GET_USERS,
    GET_USER,
    SET_BALANCE
  } from '../../actions/admin/types';
  
  const initialState = {
    admin_users: [],
    admin_user: null,
    loading: true,
    error: {},
    admin_balance : null
  };
  
  function Admin_User_Reducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_USERS:
        return {
          ...state,
          admin_users: payload,
          loading: false
            };
        
        case GET_USER_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            };
        
        case GET_USER:
        return {
          ...state,
          admin_user: payload,
          loading: false
        };
      
        case SET_BALANCE:
          return {
            ...state,
            admin_balance: payload,
            loading: false
          };

        case DELETE_USER:
            return {
                ...state,
                admin_users: state.admin_users.filter((_user) => _user._id !== payload),
                loading: false,
                isCreated: false
            };
      default:
        return state;
    }
  }
  
  export default Admin_User_Reducer;
  