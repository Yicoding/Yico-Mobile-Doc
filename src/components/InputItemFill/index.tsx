/**
 *
 */
import React, { forwardRef } from "react";

import { InputItem } from "antd-mobile";
import InputItemBox from "./styles";

export default forwardRef(function InputItemFill(props, ref) {

  const classes = InputItemBox();

  return (
    <div className={classes.box}>
      <InputItem ref={ref} {...props} />
    </div>
  );
});
