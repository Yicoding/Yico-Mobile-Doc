import React from 'react';

import useStyles from './styles';

export default (props?: any) => {
  const { children } = props;

  const classes = useStyles();

  return <div className={classes.title}>{children}</div>;
};
