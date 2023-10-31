import React from 'react';
import PropTypes from 'prop-types';

function Container({ children }) {
  return (
    <div className="flex items-center justify-end mt-2 gap-2">{children}</div>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Container;
