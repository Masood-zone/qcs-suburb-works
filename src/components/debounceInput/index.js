import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function DebounceInput({
  value: initValue,
  onChange,
  debounce = 500,
  ...props
}) {
  const [value, setValue] = useState(initValue);
  useEffect(() => {
    setValue(initValue);
  }, [initValue]);
  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);
    return () => clearTimeout(timeout);
  }, [value]);
  return (
    <input
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

DebounceInput.defaultProps = {
  debounce: 500,
};
DebounceInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  debounce: PropTypes.number,
};
export default DebounceInput;
