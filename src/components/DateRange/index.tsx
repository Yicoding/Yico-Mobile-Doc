import React, { useState, useEffect, useCallback } from "react";

import { List, DatePicker } from "antd-mobile";
import dayjs from "dayjs";
import { formatDate } from "@/utils/tools";
import DateBox from "./styles";

import { iconCheck } from '../Icon';

const { Item } = List;

export default function DateRange(props) {

  const noon = useCallback(() => {}, []);

  const {
    startDate,
    endDate,
    onStartDate = noon,
    onEndDate = noon,
    startTxt = "有效期开始时间",
    endTxt = "有效期结束时间",
    forerverTxt = "长期",
    foreverDate = '9999-12-31',
    minDate = new Date(1980, 0, 1, 23, 59, 59),
    maxDate = new Date(2100, 11, 30, 23, 59, 59),
    format = 'YYYY-MM-DD'
  } = props;

  const classes = DateBox();

  const [checked, setChecked] = useState(false);
  const [snapDate, setSnapDate] = useState();

  useEffect(() => {
    if (!endDate || endDate === foreverDate) {
      if (endDate === foreverDate) {
        setChecked(true);
      }
      return; // eslint-disable-line
    }
    setSnapDate(endDate);
  }, [endDate]);

  // 开始日期改变
  const onChangeStart = useCallback(date => {
    console.log("startDate", date);
    onStartDate && onStartDate(dayjs(date).format(format)); // eslint-disable-line
  }, []);

  // 结束日期改变
  const onChangeEnd = useCallback(val => {
    const date = dayjs(val).format(format);
    onEndDate && onEndDate(date); // eslint-disable-line
  }, []);

  // 是否长期
  const onChangeCheck = useCallback(() => {
    if (!checked) {
      // 选择长期
      onEndDate && onEndDate(foreverDate); // eslint-disable-line
      setChecked(val => !val);
      return; // eslint-disable-line
    }
    onEndDate && onEndDate(snapDate); // eslint-disable-line
    setChecked(val => !val);
  }, [checked, snapDate]);

  return (
    <div className={classes.box}>
      <div className="select-item">
        <p>{startTxt}</p>
        <DatePicker
          mode="date"
          title="开始时间"
          value={formatDate(startDate)}
          onChange={onChangeStart}
          minDate={minDate}
          maxDate={maxDate}
        >
          <Item arrow="horizontal" />
        </DatePicker>
      </div>
      <div className="select-item">
        <p>{endTxt}</p>
        {checked ? (
          <div
            className="time-forever time-forever-left"
            onClick={onChangeCheck}
          >
            <div>
              <span>{forerverTxt}</span>
              <img alt="" src={iconCheck} />
            </div>
          </div>
        ) : (
          <DatePicker
            mode="date"
            title="结束时间"
            value={formatDate(endDate)}
            onChange={onChangeEnd}
            minDate={minDate}
            maxDate={maxDate}
          >
            <Item arrow="horizontal" />
          </DatePicker>
        )}
      </div>
      {!checked ? (
        <div className="time-forever" onClick={onChangeCheck}>
          <div>
            <span>{forerverTxt}</span>
            <i />
          </div>
        </div>
      ) : (
        <div className="time-forever" />
      )}
    </div>
  );
}
