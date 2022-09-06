import api from '../utils/api';
import { setAlert } from './alert';
import {
  SEND_NOTIFICATION,
  NOTIFICATION_ERROR,
  GET_NOTIFICATIONS,
  DELETE_NOTIFICATION,
  DELETE_NOTIFICATION_ERROR,
  GET_NOTIFICATION
} from './types';

/*
  NOTE: we don't need a config object for axios as the
 default headers in axios are already Content-Type: application/json
 also axios stringifies and parses JSON for you, so no need for 
 JSON.stringify or JSON.parse
*/

// AddWallets
export const sendNotification = (formData) => async (dispatch) => {
  try {
    const res = await api.post('/sendNotification', formData);
    dispatch({
      type: SEND_NOTIFICATION,
      payload: res.data
    });

    dispatch(setAlert('Notification sent!'));   
     
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg)));
    }
  }


  
};

  //Get Notifications
export const getNotifications = () => async (dispatch) => {
  console.log('action here');
    try {
      const res = await api.get('/getNotifications');
      // console.log('res Data', res.data);
      dispatch({
        type: GET_NOTIFICATIONS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: NOTIFICATION_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
};
  
  //Delete Notifications
  export const deleteNotification = (id) => async (dispatch) => {
    console.log('action here:' , id);
      try {
        const res = await api.delete(`/deleteNotifications/${id}`);
        dispatch({
          type: DELETE_NOTIFICATION,
          payload: id
        });

        dispatch(setAlert("Notification Removed successfully!"));
      } catch (err) {
        dispatch({
          type: DELETE_NOTIFICATION_ERROR,
          payload: { msg: err.response.statusText, status: err.response.status }
        });
      }
    };
  

    // Get notification for Admin


export const getNotification = (id) => async (dispatch) => {
  console.log('NEW ACTION HERE HEY');
    try {
      const res = await api.get(`notification/getNotification/${id}`);
      // console.log('res Data', res.data);
      dispatch({
        type: GET_NOTIFICATION,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: NOTIFICATION_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
};
  