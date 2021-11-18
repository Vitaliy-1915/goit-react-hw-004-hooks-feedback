import React from 'react';
import PropTypes from 'prop-types';
import s from '../FeedbackButton/FeedbackButton.module.css';

function FeedbackButton({ options, onIncrement }) {
  // console.log(options)
  // const buttons = Object.keys(options);
  // console.log(Object.keys(options));
  return (
    <div className={s.buttons}>
      {options.map(option => (
        <button key={option} type="button" onClick={() => onIncrement(option)}>
          {option}
        </button>
      ))}
    </div>
  );
}

export default FeedbackButton;

FeedbackButton.propTypes = {
  options: PropTypes.array.isRequired,
  onIncrement: PropTypes.func.isRequired,
};
