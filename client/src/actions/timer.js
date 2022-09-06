import api from '../utils/api';
import { setAlert } from './alert';
import {
    ACTION_TIMER,
} from './types';

/*
  NOTE: we don't need a config object for axios as the
 default headers in axios are already Content-Type: application/json
 also axios stringifies and parses JSON for you, so no need for 
 JSON.stringify or JSON.parse
*/

// AddWallets
export const AddTimer = (timerId) => async (dispatch) => {
  try {
    const res = await api.post('/timer', { timerId });
    
    if (res.data != "success") return;
    dispatch({
      type: ACTION_TIMER,
      payload: 0
    });
     
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg)));
    }
  }  
};

export const GetTimer = (timerId) => async (dispatch) => {
  try {
    const res = await api.get(`/timer/${timerId}`);    
    dispatch({
      type: ACTION_TIMER,
      payload: res.data
    });  
     
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg)));
    }
  }  
};

export const DelTimer = (timerId) => async (dispatch) => {
  try {
    const res = await api.delete(`/timer/${timerId}`);    
    dispatch({
      type: ACTION_TIMER,
      payload: "Empty"
    });

    dispatch(setAlert('Timer Deleted'));   
     
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg)));
    }
  }  
};
