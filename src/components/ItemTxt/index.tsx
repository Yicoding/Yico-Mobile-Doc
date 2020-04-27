/**
 *
 */
import React, { forwardRef } from "react";

import ItemTxtBox from "./styles";

export default forwardRef(function TextAreaFill(props, ref) {

  const classes = ItemTxtBox();
  const { children, extra } = props;

  return (
    <div className={classes.box} ref={ref}>
      <span>{children}</span>
      <div>{extra}</div>
    </div>
  );
});
