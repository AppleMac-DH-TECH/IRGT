import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer/Footer';
// import Home from './views/Home';
import Landing from './views/Landing';
import Login from './views/Login';
import SignUp from './views/SignUp';
import Profit from './views/profit/Profit';
import Recharge from './views/Recharge';
import Transfer from './views/Transfer';
import Withdraw from './views/Withdraw';
import User from './views/User';
import Privacy from './views/Privacy/Privacy';
import About from './views/About/About';
import Alert from './components/layout/alert'
import Calculation from './views/profit/Calculation';
import { LOGOUT } from './actions/types';
import PrivateRoute from './components/routing/PrivateRoute';
import UsdtTransfer from './views/UsdtTransfer';
import MyTeam from './views/team/MyTeam';
import AddAccount from './views/team/AddAccount'
import InviteFriend from './views/team/InviteFriend';
import Team from './views/Team';
import LearnMore from './views/profit/LearnMore'
import FundRecords from './views/FundRecord';
import AdminSetting from './views/Admin/AdminSetting';
// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import OnlinePayment from './views/onlinePayment';
import Wallet from './views/Wallet';

import { LanguageProvider } from './components/container/Language';
import './App.css';
import CreateWallet from './views/CreateWallet';

// Lottery Section
import Lottery from './views/Lottery';
import LotterySection from './views/LotterySection';

// Admin import
import UserManagement from './views/Admin/UserManagement.js';
import ShowUser from './views/Admin/ShowUser';
import AdminRecord from './views/Admin/AdminRecord';
import AdminTeam from './views/Admin/AdminTeam';
import AdminWallet from './views/Admin/AdminWallet';
import AdminBalance from './views/Admin/AdminBalance';
import Notification from './views/Admin/Notification';
import { ToastContainer } from "react-toastify";
function App() {

  useEffect(() => {
    // check for token in LS when app first runs
    if (localStorage.token) {
      // if there is a token set axios headers for all requests
      setAuthToken(localStorage.token);
      store.dispatch(loadUser());
    }
    // try to fetch a user, if no token or invalid token we
    // will get a 401 response from our API

    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);


  return (
    <>
    <Provider store={store}>
        <Router>
          <LanguageProvider>
            {/* <Alert /> */}
            <Navbar />
            <ToastContainer />
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              {/* User part Router */}
              <Route
                path="/transfer"
                element={<PrivateRoute component={Transfer} />}
              />
              <Route
                path="/online"
                element={<PrivateRoute component={OnlinePayment} />}
              />
              <Route
                path="/usdtTransfer"
                element={<PrivateRoute component={UsdtTransfer} />}
              />
              <Route
                path="/recharge"
                element={<PrivateRoute component={Recharge} />}
              />
              <Route
                path="/withdraw"
                element={<PrivateRoute component={Withdraw} />}
              />          
              <Route
                path="/user"
                element={<PrivateRoute component={User} />}
              /> 
              <Route
                path="/wallet"
                element={<PrivateRoute component={Wallet} />}
              /> 
             

              <Route
                path="/fundrecord"
                element={<PrivateRoute component={FundRecords} />}
              />

              <Route
                path="/learnmore"
                element={<LearnMore />}
              />
              <Route
                path="/myTeam"
                element={<PrivateRoute component={MyTeam} />}
              />

              <Route
                path="/lottery"
                element={<  PrivateRoute component={Lottery} />}
              />

              <Route
                path="/addAccount"
                element={<PrivateRoute component={AddAccount} />}
              />

              <Route
                path="/inviteFriend"
                element={<PrivateRoute component={InviteFriend} />}
              />

              <Route
                path="/createWallet"
                element={<PrivateRoute component={CreateWallet} />}
              />

              <Route
                path="/team"
                element={<PrivateRoute component={Team} />}
              />
              {/* Admin part Router */}

              <Route
                path={"/userManagement"}
                element={<PrivateRoute component={UserManagement} />}
              />
              <Route
                path="/showUser/:_id"
                element={<PrivateRoute component={ShowUser} />}
              />
              <Route
                path="/showUser/:_id/balance"
                element={<PrivateRoute component={AdminBalance} />}
              />
              <Route
                path="/showUser/:_id/wallet"
                element={<PrivateRoute component={AdminWallet} />}
              />
              <Route
                path="/showUser/:_id/record"
                element={<PrivateRoute component={AdminRecord} />}
              />
              <Route
                path="/showUser/:_id/team"
                element={<PrivateRoute component={AdminTeam} />}
              />
              <Route
                path="/lotterySection/:_profit"
                element={<PrivateRoute component={LotterySection} />}
              />
              <Route
              path="/notification"
              element={<PrivateRoute component={Notification} />}
            />

            <Route
              path="/adminsetting"
              element={<PrivateRoute component={AdminSetting} />}
            />

              <Route
                path="/calculation"
                element={<Calculation />}
              />
              <Route path="/profit" element={<Profit />} />
              <Route path="/about" element={<About />} />
              <Route path="/privacy" element={<Privacy />} />
         
            </Routes>
            <Footer />
          </LanguageProvider>
        </Router>
      </Provider>
      </>
    );
}
export default App;