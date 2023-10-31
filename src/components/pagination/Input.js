import React from 'react';
import PropTypes from 'prop-types';

function Input({ onChange, defaultValue, type }) {
  return (
    <input
      type={type}
      onChange={onChange}
      defaultValue={defaultValue}
      className="border p-1 w-16 rounded bg-transparent"
    />
  );
}

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  defaultValue: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};
export default Input;
