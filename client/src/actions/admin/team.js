import api from '../../utils/api';
import { setAlert } from '../alert';
import {
    GET_TEAMS,
  GET_TEAMS_ERROR,
} from './types';

// Get user
export const getTeams = (id) => async (dispatch) => {
    console.log("TEAM ACTION HERE");
    try {
    const res = await api.get(`/admin/team/getTeams/${id}`);
    console.log('TOTAL TEAMS : '  , res.data);
    dispatch({
      type: GET_TEAMS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_TEAMS_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};







