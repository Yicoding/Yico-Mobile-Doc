import React from 'react';

import useStyles from './styles';

export default (props?: any) => {
  const { children, name } = props;

  const classes = useStyles();

  return (
    <div className={classes.page}>
      <div className="header">
        <div className="status-bar" />
        <div className="status-name">{name}</div>
      </div>
      <div className="content">{children}</div>
    </div>
  );
};
