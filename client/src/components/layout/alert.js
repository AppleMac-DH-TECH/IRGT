import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = ({ alerts }) => (
  
  <>
      {alerts.map((alert) => (
        <div key={alert.id} class="relative p-4 mb-4 text-xl font-mono text-white-700 bg-[rgba(13,9,255,0.6)]  rounded-lg " role="alert">
          <span class="font-medium">Alert!</span> { alert.msg }
      </div>
      ))}
      </>
);

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(Alert);
