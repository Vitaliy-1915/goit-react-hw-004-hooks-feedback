import React from 'react';
import PropTypes from 'prop-types';

function Notification({ message }) {
  return <h2>{message}</h2>;
}

export default Notification;

Notification.propTypes = {
  message: PropTypes.string,
};
