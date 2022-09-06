import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import wallet from './wallet';
import team from './team'
import notification from './notification';
import balance from './admin/admin_balance';
// Admin Reducers 
import admin_user from './admin/admin_user';
//Team Reducers
import admin_team from './admin/admin_team';
//Wallet Reducers
import admin_wallet from './admin/admin_wallet';
// timer import
import timer from './timer'

export default combineReducers({
  alert,
  auth,
  profile,
  wallet,
  team,
  admin_user,
  notification,
  balance,
  admin_team,
  admin_wallet,
  timer
});
