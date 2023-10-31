import React from 'react';
import PropTypes from 'prop-types';

function Spinner({ small }) {
  return <div className={small ? 'loader-small' : 'loader'} />;
}

Spinner.propTypes = {
  small: PropTypes.bool.isRequired,
};
export default Spinner;
