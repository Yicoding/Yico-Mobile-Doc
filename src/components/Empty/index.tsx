import React from "react";
import { createUseStyles } from 'react-jss';

import { empty } from "../Icon";

const EmptyContent = createUseStyles({
  box: {
    fontSize: '13px',
    color: '#7d7d80',
    background: '#fff',
    textAlign: 'center',
    padding: '30px 0',
    '& img': {
      display: 'block',
      width: '50px',
      margin: '0 auto 20px'
    }
  }
});

export default function Empty({ txt = "暂无数据" }) {
  
  const classes = EmptyContent();

  return (
    <div className={classes.box}>
      <img alt="" src={empty} />
      <p>{txt}</p>
    </div>
  );
}
