import React from 'react';
import PropTypes from 'prop-types';
import s from '../Statistics/Statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul className={s.ul}>
      <li className={s.li}> good: {good}</li>
      <li className={s.li}> neutral: {neutral}</li>
      <li className={s.li}> bad: {bad}</li>
      <li className={s.li}>total: {total}</li>
      <li className={s.li}>positivePercentage: {positivePercentage}</li>
    </ul>
  );
}

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
