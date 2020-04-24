import React from 'react';

import useStyles from './styles';

export default ({ children }) => {

  const classes = useStyles();

  return (
    <div className={classes.container}>
      {children}
    </div>
  )
};
