/**
 * Steps
 */
import React, { useState, useEffect, useCallback, useRef } from "react";

import TabContainer from "./styles";

export default function (props) {

  const classes = TabContainer();
  // 空函数
  const noon = useCallback(() => { }, []);

  const {
    num = 4,
    tabs = [],
    initialPage = 0,
    onChange = noon,
    lineWidth = 26
  } = props;

  const ref = useRef();

  const [tabIndex, setTabIndex] = useState(initialPage);
  const [left, setLeft] = useState();

  // tab点击
  const tabHandle = useCallback(
    (item, index, e) => {
      if (index === tabIndex) {
        return;
      }
      setTabIndex(index);
      onChange && onChange(item, index); // eslint-disable-line
      setLeft(e.target.offsetLeft + e.target.offsetWidth / 2 - lineWidth / 2);
      if (tabs.length > num && ref && ref.current) {
        if (index < 2) {
          return ref.current.scrollTo(0, 0);
        }
        ref.current.scrollTo(e.target.offsetLeft - e.target.offsetWidth, 0); // 自身偏移量 - 自身宽度
      }
    },
    [tabIndex, tabs, num]
  );

  // init
  useEffect(() => {
    if (tabs && tabs.length) {
      console.log('tabs', ref.current.children);
      const { children } = ref.current;
      console.log('children', children[initialPage], children[initialPage].offsetLeft);
      setLeft(children[initialPage].offsetLeft + children[initialPage].offsetWidth / 2 - lineWidth / 2); // 下划线偏移量
      if (initialPage > 1) {
        ref.current.scrollTo(children[initialPage].offsetLeft - children[initialPage].offsetWidth, 0); // 容器偏移量
      }
    }
  }, [tabs, initialPage]);

  return (
    <div className={classes.box}>
      <ul
        ref={ref}
        className={tabs && tabs.length > num ? "tab-scroll" : ""}
      >
        {tabs &&
          tabs.length > 0 &&
          tabs.map((item, index) => {
            return (
              <li // eslint-disable-line
                key={index} // eslint-disable-line
                className={index === tabIndex ? "active" : ""}
                onClick={e => tabHandle(item, index, e)}
              >
                {item}
              </li>
            );
          })}
        <i style={{ left: `${left}px`, width: `${lineWidth}px` }} />
      </ul>
    </div>
  );
}
