import api from '../utils/api';
import { Navigate } from 'react-router-dom';
import { setAlert } from './alert';
import {
  ADD_WALLET,
  WALLET_ERROR,
  GET_WALLET,
  GET_WALLETS,
  DELETE_WALLET,
  GET_BALANCE,
  GET_BALANCE_ERROR
} from './types';

/*
  NOTE: we don't need a config object for axios as the
 default headers in axios are already Content-Type: application/json
 also axios stringifies and parses JSON for you, so no need for 
 JSON.stringify or JSON.parse
*/

// AddWallets
export const addWallet = (formData) => async (dispatch) => {
  // console.log(formData);
  try {
    const res = await api.post('/addWallet', formData);
    // alert("Wallet Created Successfully");

    dispatch({
      type: ADD_WALLET,
      payload: res.data
    });

    dispatch(setAlert('Wallet Created Successfully'));   
     
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg)));
    }
    dispatch({
      type: WALLET_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
  
};

//Get Wallets
// export const getWallets = () => async (dispatch) => {
//   try {
//     const res = await api.get('/getWallet');

//     dispatch({
//       type: GET_WALLETS,
//       payload: res.data
//     });
//   } catch (err) {
//     dispatch({
//       type: WALLET_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status }
//     });
//   }
// };

// Get Wallet
export const getWallet = () => async (dispatch) => {
  try {
    const res = await api.get(`/getWallet/`);
    console.log(res.data);
    dispatch({
      type: GET_WALLET,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: WALLET_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete Wallet
export const deleteWallet = (id) => async (dispatch) => {
  // console.log('delete here');
  // console.log(id);
  try {
    const res = await api.delete(`/deleteWallet/${id}`);
    dispatch({
      type: DELETE_WALLET,
      payload: id
    });

    dispatch(setAlert(res.data.msg));
  } catch (err) {
    dispatch({
      type: WALLET_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
// /Get Balance
export const getBalance = () => async (dispatch) => {
  console.log("GetBalance Here");
  try {
  const res = await api.get(`/wallet/getBalance`);
  // console.log('Get Balance from wallet : '  , res.data);
  dispatch({
    type: GET_BALANCE,
    payload: res.data
  });
} catch (err) {
  dispatch({
    type: GET_BALANCE_ERROR,
    payload: { msg: err.response.statusText, status: err.response.status }
  });
}
};

