import React from 'react';
import PropTypes from 'prop-types';

function PageCount({ title, firstCount, lastCount }) {
  return (
    <span className="flex items-center gap-1">
      <div>{title}</div>
      <strong>
        {firstCount}
        of
        {lastCount}
      </strong>
    </span>
  );
}

PageCount.propTypes = {
  title: PropTypes.string.isRequired,
  firstCount: PropTypes.number.isRequired,
  lastCount: PropTypes.number.isRequired,
};
export default PageCount;
