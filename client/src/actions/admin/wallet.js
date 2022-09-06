import api from '../../utils/api';
import { setAlert } from '../alert';
import {
    GET_WALLETS,
  GET_WALLETS_ERROR,
} from './types';

// Get user
export const getWallets = (id) => async (dispatch) => {
    console.log("WALLET ACTION HERE");
    try {
    const res = await api.get(`/admin/wallet/getWallets/${id}`);
    console.log('TOTAL WALLETS : '  , res.data);
    dispatch({
      type: GET_WALLETS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_WALLETS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};







