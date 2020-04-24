/**
 * Steps
 */
import React from 'react';

import classnames from 'classnames';
import StepBox from './styles';

export default function(props?: any) {
  const { children, current, size = 'large', direction = 'row' } = props;
  const classes = StepBox(props);

  const newChildren = React.Children.map(children, (item, index) => {
    const total = children.length;
    return React.cloneElement(item, {
      index,
      size,
      current,
      direction,
      total,
    });
  });

  return (
    <div className={classnames(classes.steps, direction)}>{newChildren}</div>
  );
}
