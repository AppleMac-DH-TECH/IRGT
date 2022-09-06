import api from '../utils/api';
import { setAlert } from './alert';
import {
  ADD_TEAM_ACCOUNT,
  ADD_TEAM_ERROR,
  GET_TEAM_ACCOUNT,
  GET_TEAM_ACCOUNTS,
  DELETE_TEAM_ACCOUNT
} from './types';

/*
  NOTE: we don't need a config object for axios as the
 default headers in axios are already Content-Type: application/json
 also axios stringifies and parses JSON for you, so no need for 
 JSON.stringify or JSON.parse
*/

// AddWallets
export const addTeamAccount = (formData) => async (dispatch) => {
  console.log(formData);
  try {
    const res = await api.post('/addTeamAccount', formData);
    // alert("Wallet Created Successfully");

    dispatch({
      type: ADD_TEAM_ACCOUNT,
      payload: res.data
    });

    dispatch(setAlert('Account Created Successfully'));   
     
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg)));
    }
    dispatch({
      type: ADD_TEAM_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
  
};

// GET All of TEAM ACCOUNTS
export const getAccounts = () => async (dispatch) => {
  try {
    const res = await api.get('/getTeamAccount');
    console.log('GET_ACCOUNT_RESULT:', res.data);
    dispatch({
      type: GET_TEAM_ACCOUNTS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ADD_TEAM_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get Wallet
// export const getWallet = (id) => async (dispatch) => {
//   try {
//     const res = await api.get(`/getWallet/${id}`);

//     dispatch({
//       type: GET_WALLET,
//       payload: res.data
//     });
//   } catch (err) {
//     dispatch({
//       type: WALLET_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status }
//     });
//   }
// };

// // Delete Wallet
export const deleteAccount = (id) => async (dispatch) => {
 
  try {
    const res = await api.delete(`/deleteAccount/${id}`);
    dispatch({
      type: DELETE_TEAM_ACCOUNT,
      payload: id
    });

    dispatch(setAlert(res.data.msg));
  } catch (err) {
    dispatch({
      type: ADD_TEAM_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

