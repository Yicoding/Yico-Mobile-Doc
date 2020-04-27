---
group:
  title: InputItemFill 输入框
---

# InputItemFill 输入框

# 代码演示

## 基本用法

```tsx
/**
 * title: 基本用法
 */
import React from 'react';
import { List } from 'antd-mobile';
import { Container, InputItemFill } from 'dumi-lib';

export default () => {
  return (
    <Container>
      <List>
        <InputItemFill
          labelNumber={7}
          placeholder="请输入标题"
        >我是测试标题</InputItemFill>
      </List>
    </Container>
  );
};
```


### Empty

| 属性      | 说明                                                                        | 类型   | 默认值 |
| --------- | --------------------------------------------------------------------------- | ------ | ------ |
| children   | 标题文案 | `string/React.Element` | -      |
| value   | value值 | `string` | -      |
| placeholder   | placeholder | `string` | -      |
| disabled   | 是否禁用 | `boolean` | `false`      |
| clear   | 是否带清除功能 | `boolean` | `false`      |
| maxLength   | 最大长度 | `number` | -      |
| onChange   | change 事件触发的回调函数 | `(val: string): void` | -      |
| onBlur   | blur 事件触发的回调函数 | `(val: string): void` | -      |
| onFocus   | focus 事件触发的回调函数 | `(val: string): void` | -      |



More skills for writing demo: https://d.umijs.org/guide/demo-principle
