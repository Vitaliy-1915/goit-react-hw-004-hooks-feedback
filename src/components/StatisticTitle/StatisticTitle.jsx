import React from 'react';
import PropTypes from 'prop-types';

function StatisticTitle({ title }) {
  return <h1>{title}</h1>;
}

export default StatisticTitle;

StatisticTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
