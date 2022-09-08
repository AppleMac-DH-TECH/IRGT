import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './types';

export const setAlert = (msg, timeout = 3000) => dispatch => {
  toast.info(msg)
  const id = uuidv4();
  // dispatch({
  //   type: SET_ALERT,
  //   payload: { msg , id }
  // });
};
