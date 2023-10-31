import React from 'react';
import PropTypes from 'prop-types';

function Button({ title, onClick, condtion }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="p-1 border border-gray-300 px-2 disabled:opacity-30"
      disabled={condtion}
    >
      {title}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  condtion: PropTypes.bool.isRequired,
};
export default Button;
