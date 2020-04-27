---
group:
  title: Empty 空状态
---

# Empty 空状态

Empty 空状态: 数据为空时展示。

# 代码演示

## 基本用法

```tsx
/**
 * title: 基本用法
 * desc: 数据为空时展示
 */
import React from 'react';
import { Container, Empty } from 'dumi-lib';

export default () => {
  return (
    <Container>
      <Empty txt="还没有内容哦" />
    </Container>
  );
};
```


### Empty

| 属性      | 说明                                                                        | 类型   | 默认值 |
| --------- | --------------------------------------------------------------------------- | ------ | ------ |
| txt   | 指定描述文案。 | `string/React.Element` | `暂无数据`      |


More skills for writing demo: https://d.umijs.org/guide/demo-principle
