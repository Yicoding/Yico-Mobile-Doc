/**
 *
 */
import React, { useState, useCallback, forwardRef } from "react";

import { InputItem } from "antd-mobile";
import InputItemBox from "./styles";

export default forwardRef(function InputItemFill({type, extra, onExtraClick, ...props}, ref) {

  const iconEye = require('@/assets/images/icon-eye.png');
  const iconEyePass = require('@/assets/images/icon-eye-pass.png');
  const noon = useCallback(() => {}, []);

  const classes = InputItemBox();
  const [isPassWord, setIsPassWord] = useState(true);

  const extraFun = useCallback(() => {
    return <img alt="" src={isPassWord ? iconEyePass : iconEye} />
  }, [isPassWord]);

  const onExtraClickFun = useCallback(() => {
    setIsPassWord(val => !val);
  }, []);

  return (
    <div className={classes.box}>
      <InputItem
        ref={ref}
        type={type === 'password' ? (isPassWord ? type : 'text') : type}
        extra={ extra || type === 'password' ? extraFun() : null}
        onExtraClick={onExtraClick || type === 'password' ? onExtraClickFun : noon}
        {...props}
      />
    </div>
  );
});
