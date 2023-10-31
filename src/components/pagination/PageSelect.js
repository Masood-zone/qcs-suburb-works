import React from 'react';
import PropTypes from 'prop-types';

function PageSelect({ pageCount, value, onChange }) {
  return (
    <select value={value} onChange={onChange} className="p-2 bg-transparent ">
      {pageCount.map((pageSize) => (
        <option
          className="text-black"
          key={pageSize.value}
          value={pageSize.value}
        >
          Show
          {pageSize.value}
        </option>
      ))}
    </select>
  );
}

PageSelect.propTypes = {
  pageCount: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
    }),
  ).isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default PageSelect;
