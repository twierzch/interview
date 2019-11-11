import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './ChartsWrapper.css';


export default function ChartsWrapper({
  children,
  className,
  ...attrs
}) {
  const classes = cx(className, 'charts-wrapper');

  return (
    <div className={classes}>{children}</div>
  )
}

ChartsWrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}
