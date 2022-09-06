const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

// Connect Database
connectDB();


const corsOptions = {
  origin: function (origin, callback) {
    callback(null, true);
  },
  credentials: true
};
app.use(cors(corsOptions));


// Init Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
//Routes for wallet creation
app.use('/api/addWallet', require('./routes/api/wallet'));
app.use('/api/getWallet', require('./routes/api/wallet'));
app.use('/api/deleteWallet', require('./routes/api/wallet'));
// Routes for Team Account
app.use('/api/addTeamAccount', require('./routes/api/teamAccount'));
app.use('/api/getTeamAccount', require('./routes/api/teamAccount'));
app.use('/api/deleteAccount', require('./routes/api/teamAccount'));

//Routes for Admin
app.use('/api/admin/users', require('./routes/api/admin/admin_user'));
// app.use('/api/admin/balance/getBalance', require('./routes/api/admin/admin_balance'));
app.use('/api/admin/balance/setBalance', require('./routes/api/admin/admin_balance'));
// Admin Team routes
app.use('/api/admin/team/getTeams', require('./routes/api/admin/admin_teams'));
//Admin Wallet routes
app.use('/api/admin/wallet/getWallets', require('./routes/api/admin/admin_wallet'));
//notification
app.use('/api/sendNotification', require('./routes/api/notification'));
app.use('/api/getNotifications', require('./routes/api/notification'));
app.use('/api/notification/getNotification', require('./routes/api/notification'));
app.use('/api/deleteNotifications', require('./routes/api/notification'));
// Admin Change password Mode
app.use('/api/admin/changepasword', require('./routes/api/admin/admin_setting'));
// Routes for user balance and profit
app.use('/api/wallet/', require('./routes/api/wallet'));
// Timer Routes
app.use('/api/timer', require('./routes/api/timer'));




// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
