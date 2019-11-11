import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './FiltersWrapper.css';


export default function FiltersWrapper({
  children,
  className,
  ...attrs
}) {
  const classes = cx(className, 'filters-wrapper');

  return (
    <div className={classes}>{children}</div>
  )
}

FiltersWrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}
