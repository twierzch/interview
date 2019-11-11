import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './FlexRow.css';


export default function FlexRow({
  children,
  className,
  justify,
  ...attrs
}) {
  const classes = cx(className, 'flex-row', {
    'flex-row--justify': justify,
  });

  return (
    <div className={classes}>{children}</div>
  );
}

FlexRow.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  justify: PropTypes.bool,
}

FlexRow.defaultValues = {
  justify: false,
};
