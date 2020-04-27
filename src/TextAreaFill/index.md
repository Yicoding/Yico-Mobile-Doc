---
group:
  title: TextAreaFill 文本域
---

# TextAreaFill 文本域

# 代码演示

## 基本用法

```tsx
/**
 * title: 基本用法
 */
import React, { useState } from 'react';
import { List } from 'antd-mobile';
import { Container, TextAreaFill } from 'dumi-lib';

export default () => {

  const [value, setValue] = useState();

  return (
    <Container>
      <List>
        <TextAreaFill
          clear
          title="名称"
          autoHeight
          labelNumber={7}
          maxLength={30}
          placeholder="请输入名称"
          value={value}
          onChange={setValue}
        />
        <TextAreaFill
          clear
          title="名称"
          rows={3}
          labelNumber={7}
          maxLength={30}
          placeholder="请输入名称"
          value={value}
          onChange={setValue}
        />
      </List>
    </Container>
  );
};
```


### Empty

| 属性      | 说明                                                                        | 类型   | 默认值 |
| --------- | --------------------------------------------------------------------------- | ------ | ------ |
| value   | value值 | `string` | -      |
| placeholder   | placeholder | `string` | -      |
| title   | 文案说明 | `string` | -      |
| clear   | 是否带清除功能 | `boolean` | `false`      |
| autoHeight   | 高度自适应, autoHeight 和 rows 请二选一 | `boolean` | `false`      |
| rows   | 显示几行 | `number` | `1`      |
| onChange   | change 事件触发的回调函数 | `(val: string): void` | -      |
| onBlur   | blur 事件触发的回调函数 | `(val: string): void` | -      |
| onFocus   | focus 事件触发的回调函数 | `(val: string): void` | -      |


More skills for writing demo: https://d.umijs.org/guide/demo-principle
