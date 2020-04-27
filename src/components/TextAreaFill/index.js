/**
 *
 */
import React, { forwardRef, useCallback, useRef } from "react";

import { TextareaItem } from "antd-mobile";
import TextAreaBox from "./styles";

export default function TextAreaFill({ onChange, ...resPop }) {

  const ref = useRef();

  const classes = TextAreaBox();

  // input改变
  const onChangeHandle = useCallback(val => {
    if (!val) {
      ref.current.focus();
    }
    onChange && onChange(val); // eslint-disable-line
  }, []);

  return (
    <div className={classes.box}>
      <TextareaItem ref={ref} onChange={onChangeHandle} {...resPop} />
    </div>
  );
};
// export default forwardRef(function TextAreaFill({ onChange, ...resPop }, ref) {

//   const classes = TextAreaBox();

//   // input改变
//   const onChangeHandle = useCallback(val => {
//     if (!val && ref) {
//       ref.current.focus();
//     }
//     onChange && onChange(val); // eslint-disable-line
//   }, []);

//   return (
//     <div className={classes.box}>
//       <TextareaItem ref={ref} onChange={onChangeHandle} {...resPop} />
//     </div>
//   );
// });
