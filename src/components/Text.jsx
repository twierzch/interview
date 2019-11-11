import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './Text.css';


export default function Text({
  children,
  className,
  typography,
  ...attrs
}) {
  const classes = cx(className, 'text', `text--typography-${typography}`);

  return (
    <span className={classes} {...attrs}>{children}</span>
  );
}

Text.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  typography: PropTypes.string,
}

Text.defaultProps = {
  typography: 'title',
}
