import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

import Text from './Text';
import FlexRow from './FlexRow';

import './MultiSelect.css';


const handleChange = (onChange) => values => {
  if (!values) {
    onChange([]);
    return;
  }

  onChange(values.map(({ label }) => label));
}

export default function MultiSelect({
  value,
  onChange,
  options,
  label,
}) {
  const mappedOptions = useMemo(() => options.map(option => ({
    label: option,
    value: option,
  })), [options]);

  const mappedValue = value.map(option => ({
    label: option,
    value: option,
  }));

  return (
    <div className="multi-select">
      <FlexRow
        className="multi-select__labels"
        justify
      >
        <Text typography="label">{label}</Text>
        <Text
          typography="label"
          onClick={() => onChange([])}
        >
          Reset
        </Text>
      </FlexRow>

      <Select
        value={mappedValue}
        onChange={handleChange(onChange)}
        options={mappedOptions}
        isMulti
      />
    </div>
  );
}

MultiSelect.propTypes = {
  value: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  label: PropTypes.string,
}
