/**
 * Steps
 */
import React from "react";

import TitleBox from "./styles";

export default function(props) {

  const classes = TitleBox();

  const { children } = props;

  return (
    <div className={classes.box}>
      <i />
      <p>{children}</p>
    </div>
  );
}
