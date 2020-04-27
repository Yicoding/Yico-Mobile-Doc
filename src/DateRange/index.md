---
group:
  title: DateRange 证件有效期
---

# DateRange 证件有效期

DateRange 证件有效期: 开始时间和结束时间

# 代码演示

## 基本用法

```tsx
/**
 * title: 基本用法
 * desc: 开始时间、结束时间、长期
 * transform: true
 */
import React, { useState } from 'react';
import { Container, DateRange } from 'dumi-lib';

export default () => {

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  return (
    <Container>
      <div style={{padding: '0 5px'}}>
        <DateRange
          startDate={startDate}
          endDate={endDate}
          onStartDate={setStartDate}
          onEndDate={setEndDate}
        />
      </div>
    </Container>
  );
};
```

## 更改默认项

```tsx
/**
 * title: 更改默认项
 * transform: true
 */
import React, { useState } from 'react';
import { Container, DateRange } from 'dumi-lib';

export default () => {

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  return (
    <Container>
      <div style={{padding: '0 5px'}}>
        <DateRange
          startDate={startDate}
          endDate={endDate}
          onStartDate={setStartDate}
          onEndDate={setEndDate}
          startTxt="营业期限开始时间"
          endTxt="营业期限结束时间"
          forerverTxt="永久"
        />
      </div>
    </Container>
  );
};
```


### Empty

| 属性      | 说明                                                                        | 类型   | 默认值 |
| --------- | --------------------------------------------------------------------------- | ------ | ------ |
| startDate   | 开始日期 | `Date` | -      |
| endDate   | 结束日期 | `Date` | -      |
| onStartDate   | 开始日期选择确定时执行 | 返回`date` | -      |
| onEndDate   | 结束日期选择确定时执行 | 返回`date` | -      |
| startTxt   | 开始日期文案描述 | `string` | `有效期开始时间`     |
| endTxt   | 结束日期文案描述 | `string` | `有效期结束时间`      |
| forerverTxt   | 长期文案描述 | `string` | `长期`      |
| foreverDate   | 长期日期YYYY-MM-DD | `string` | `9999-12-31`      |
| minDate   | 最小可选日期 | `Date` | `new Date(1980, 0, 1, 23, 59, 59)`      |
| maxDate   | 最大可选日期D | `Date` | `new Date(2100, 11, 30, 23, 59, 59)`      |


More skills for writing demo: https://d.umijs.org/guide/demo-principle
