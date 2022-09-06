import api from '../../utils/api';
import { setAlert } from '../alert';
import {
  SET_BALANCE,
    SET_BALANCE_ERROR
} from './types';

//SET BALANCE 
export const setBalance = (formData) => async (dispatch) => {
  console.log("Action FOrm Data" , formData);
  try {
  const res = await api.post(`/admin/balance/setBalance`, formData);
  console.log('SET DEMO MONEY RESULT :  '  , res.data);
  dispatch({
    type: SET_BALANCE,
    payload: res.data
  });
    
  dispatch(setAlert('Demo Successful'));
   
    
} catch (err) {
  dispatch({
    type: SET_BALANCE_ERROR,
    payload: { msg: err.response.statusText, status: err.response.status }
  });
}
};






