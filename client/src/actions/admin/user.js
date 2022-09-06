import api from '../../utils/api';
import { setAlert } from '../alert';
import {
    GET_USER_ERROR,
    DELETE_USER,
    GET_USERS,
    GET_USER,
    SET_BALANCE
} from './types';



// Get posts
export const getUsers = () => async (dispatch) => {
  try {
    const res = await api.get('/admin/users');
   
    dispatch({
      type: GET_USERS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_USER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};



// Delete User
export const deleteUser = (id) => async (dispatch) => {
  try {
    await api.delete(`/admin/users/${id}`);

    dispatch({
      type: DELETE_USER,
      payload: id
    });

    dispatch(setAlert('User Removed'));
  } catch (err) {
    dispatch({
      type: GET_USER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
// Get user
export const getUser = (id) => async (dispatch) => {
    // console.log(id);
  try {
    const res = await api.get(`/admin/users/${id}`);
    console.log('Get User with Specific ID :  '  , res.data);
    dispatch({
      type: GET_USER,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_USER_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};




// Add comment
// export const addComment = (postId, formData) => async (dispatch) => {
//   try {
//     const res = await api.post(`/posts/comment/${postId}`, formData);

//     dispatch({
//       type: ADD_COMMENT,
//       payload: res.data
//     });

//     dispatch(setAlert('Comment Added', 'success'));
//   } catch (err) {
//     dispatch({
//       type: POST_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status }
//     });
//   }
// };

// Delete comment
// export const deleteComment = (postId, commentId) => async (dispatch) => {
//   try {
//     await api.delete(`/posts/comment/${postId}/${commentId}`);

//     dispatch({
//       type: REMOVE_COMMENT,
//       payload: commentId
//     });

//     dispatch(setAlert('Comment Removed', 'success'));
//   } catch (err) {
//     dispatch({
//       type: POST_ERROR,
//       payload: { msg: err.response.statusText, status: err.response.status }
//     });
//   }
// };
