/**
 *
 */
import React, { forwardRef } from "react";

import { List } from "antd-mobile";
import classnames from 'classnames';
import ItemTxtBox from "./styles";

const { Item } = List;

export default forwardRef(function ItemFill(props, ref) {

  const classes = ItemTxtBox();

  const { arrow } = props;

  return (
    <div className={classnames(classes.box, arrow ? "" : "align-start")}>
      <Item ref={ref} {...props} />
    </div>
  );
});
