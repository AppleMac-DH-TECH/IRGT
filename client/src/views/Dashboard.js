import React, { useEffect } from "react";
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Dashboard = ({ isAuthenticated}) => {

    if (isAuthenticated) {
        return <Navigate to="/transfer" />;
      }
    return (
        <>
            <div>
                <h1 className="text-center text-white">Dashboard</h1>
           </div>
        </>
    )
}
Dashboard.propTypes = {
    isAuthenticated: PropTypes.bool
  };
  
  const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
  });
  
  export default connect(mapStateToProps)(Dashboard);