import {
    SEND_NOTIFICATION,
    DELETE_NOTIFICATION,
  GET_NOTIFICATIONS,
    GET_NOTIFICATION
  } from '../actions/types.js';
  
  const initialState = {
    notifications: [],
    notification: null,
    loading: true,
    error: {},
    isCreated: false
  };
  
  function notificationReducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case SEND_NOTIFICATION:
        return {
          ...state,
          notification: payload,
          loading: false
        };
      
        case GET_NOTIFICATIONS:
          return {
            ...state,
            notifications: payload,
            loading: false
        };
      
        case GET_NOTIFICATION:
          return {
            ...state,
            notification: payload,
            loading: false
        };
      
        case DELETE_NOTIFICATION:
          return {
            ...state,
            notifications: state.notifications.filter((_notification) => _notification._id !== payload),
            loading: false,
          };  
      default:
        return state;
    }
  }
  
  export default notificationReducer;
  